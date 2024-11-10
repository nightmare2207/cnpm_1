// src/pages/StudentList.js
import React, { useEffect, useState } from 'react';

function StudentList({ api }) {
    const [students, setStudents] = useState([]);

    useEffect(() => {
        const fetchStudents = async () => {
            const data = await api.getStudents();
            setStudents(data);
        };
        fetchStudents();
    }, [api]);

    return (
        <div className="student-list">
            <h2>Danh Sách Sinh Viên</h2>
            <table>
                <thead>
                    <tr>
                        <th>Tên</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {students.map((student) => (
                        <tr key={student.id}>
                            <td>{student.name}</td>
                            <td>{student.email}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default StudentList;
