// src/pages/SubjectsPage.js
import React, { useState } from 'react';

function SubjectsPage({ subjects, onAdd, onEdit, onDelete }) {
    const [newSubject, setNewSubject] = useState('');
    const handleAdd = () => {
        onAdd(newSubject);
        setNewSubject('');
    };

    return (
        <div className="subjects-page">
            <h2>Quản Lý Môn Học</h2>
            <input
                type="text"
                placeholder="Tên môn học"
                value={newSubject}
                onChange={(e) => setNewSubject(e.target.value)}
            />
            <button onClick={handleAdd}>Thêm Môn Học</button>
            <table>
                <thead>
                    <tr>
                        <th>Môn Học</th>
                        <th>Hành Động</th>
                    </tr>
                </thead>
                <tbody>
                    {subjects.map((subject) => (
                        <tr key={subject.id}>
                            <td>{subject.name}</td>
                            <td>
                                <button onClick={() => onEdit(subject.id)}>Sửa</button>
                                <button onClick={() => onDelete(subject.id)}>Xóa</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default SubjectsPage;
