// src/pages/RegisterPage.js
import React, { useState } from 'react';

function RegisterPage({ onRegister }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [role, setRole] = useState('student');

    const handleSubmit = (e) => {
        e.preventDefault();
        onRegister({ username, password, email, role });
    };

    return (
        <div className="register-page">
            <h2>Đăng Ký</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Tên đăng nhập"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Mật khẩu"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <select value={role} onChange={(e) => setRole(e.target.value)}>
                    <option value="student">Sinh viên</option>
                    <option value="teacher">Giáo viên</option>
                </select>
                <button type="submit">Đăng Ký</button>
            </form>
        </div>
    );
}

export default RegisterPage;
