// src/pages/TeacherList.js
import React from 'react';

function TeacherList({ teachers }) {
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
