// src/pages/SubjectsPage.js
import React, { useState, useEffect } from 'react';

function SubjectsPage({ api }) {
    const [subjects, setSubjects] = useState([]);
    const [newSubject, setNewSubject] = useState('');

    useEffect(() => {
        const fetchSubjects = async () => {
            const data = await api.getSubjects();
            setSubjects(data);
        };
        fetchSubjects();
    }, [api]);

    const handleAdd = async () => {
        await api.addSubject(newSubject);
        setNewSubject('');
        const updatedSubjects = await api.getSubjects();
        setSubjects(updatedSubjects);
    };

    const handleDelete = async (subjectId) => {
        await api.deleteSubject(subjectId);
        const updatedSubjects = await api.getSubjects();
        setSubjects(updatedSubjects);
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
                                <button onClick={() => handleDelete(subject.id)}>Xóa</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default SubjectsPage;
