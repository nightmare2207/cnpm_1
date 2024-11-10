import React, { useState } from 'react';
import './CreateUserForm.css';

function CreateUserForm({ onCreateUser }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [role, setRole] = useState('student');
    const [studentId, setStudentId] = useState('');
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const userData = { username, password, email, role };
        if (role === 'student') {
            userData.studentId = studentId;
        }
        onCreateUser(userData);
    };

    return (
        <div className="create-user-form">
            <h2>Tạo Tài Khoản Mới</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Tên đăng nhập" value={username} onChange={(e) => setUsername(e.target.value)} required />
                <input type="password" placeholder="Mật khẩu" value={password} onChange={(e) => setPassword(e.target.value)} required />
                <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                <select value={role} onChange={(e) => setRole(e.target.value)}>
                    <option value="student">Sinh viên</option>
                    <option value="teacher">Giáo viên</option>
                </select>
                {role === 'student' && (
                    <input type="text" placeholder="Mã số sinh viên" value={studentId} onChange={(e) => setStudentId(e.target.value)} />
                )}
                <button type="submit">Tạo Tài Khoản</button>
            </form>
        </div>
    );
}

export default CreateUserForm;
