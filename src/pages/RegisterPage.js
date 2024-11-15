import React, { useState } from 'react';

function RegisterPage({ onRegister }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [role, setRole] = useState('student');
    const [studentId, setStudentId] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const registrationData = { username, password, email, role };
        if (role === 'student') {
            registrationData.studentId = studentId;
        }
        onRegister(registrationData);
    };

    return (
        <div className="register-page">
            <h2>Đăng Ký</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Tên đăng nhập" value={username} onChange={(e) => setUsername(e.target.value)} />
                <input type="password" placeholder="Mật khẩu" value={password} onChange={(e) => setPassword(e.target.value)} />
                <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <select value={role} onChange={(e) => setRole(e.target.value)}>
                    <option value="student">Sinh viên</option>
                    <option value="teacher">Giáo viên</option>
                </select>
                {role === 'student' && (
                    <input type="text" placeholder="Mã số sinh viên" value={studentId} onChange={(e) => setStudentId(e.target.value)} />
                )}
                <button type="submit">Đăng Ký</button>
            </form>
        </div>
    );
}

export default RegisterPage;
