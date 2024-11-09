// src/pages/DashboardPage.js
import React from 'react';

function DashboardPage({ summary }) {
    return (
        <div className="dashboard-page">
            <h2>Trang Chủ</h2>
            <div className="summary-cards">
                <div className="card">
                    <h3>Giáo Viên</h3>
                    <p>{summary.teachers} giáo viên</p>
                </div>
                <div className="card">
                    <h3>Sinh Viên</h3>
                    <p>{summary.students} sinh viên</p>
                </div>
                <div className="card">
                    <h3>Môn Học</h3>
                    <p>{summary.subjects} môn học</p>
                </div>
            </div>
        </div>
    );
}

export default DashboardPage;

