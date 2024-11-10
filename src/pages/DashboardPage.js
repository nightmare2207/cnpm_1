// src/pages/DashboardPage.js
import React, { useEffect, useState } from 'react';

function DashboardPage({ api }) {
    const [summary, setSummary] = useState({ teachers: 0, students: 0, subjects: 0 });

    useEffect(() => {
        // Fetch summary data from API
        const fetchSummary = async () => {
            const data = await api.getSummary();
            setSummary(data);
        };
        fetchSummary();
    }, [api]);

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
