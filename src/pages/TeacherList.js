// src/pages/TeacherList.js
import React, { useEffect, useState } from 'react';

function TeacherList({ api }) {
    const [teachers, setTeachers] = useState([]);

    useEffect(() => {
        const fetchTeachers = async () => {
            const data = await api.getTeachers();
            setTeachers(data);
        };
        fetchTeachers();
    }, [api]);

    return (
        <div className="teacher-list">
            <h2>Danh Sách Giáo Viên</h2>
            <table>
                <thead>
                    <tr>
                        <th>Tên</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {teachers.map((teacher) => (
                        <tr key={teacher.id}>
                            <td>{teacher.name}</td>
                            <td>{teacher.email}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default TeacherList;
