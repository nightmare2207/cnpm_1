import React, { useEffect, useState } from 'react';
import './AdminDashboard.css';

function AdminDashboard({ fetchSummary }) {
    const [summary, setSummary] = useState({
        totalTeachers: 0,
        totalStudents: 0,
        totalCourses: 0
    });

    useEffect(() => {
        // Fetch summary data
        fetchSummary().then(data => setSummary(data));
    }, [fetchSummary]);

    return (
        <div className="admin-dashboard">
            <h1>Trang Chủ Quản Trị</h1>
            <div className="summary-box">
                <div className="summary-item">
                    <h3>Tổng số Giáo Viên</h3>
                    <p>{summary.totalTeachers}</p>
                </div>
                <div className="summary-item">
                    <h3>Tổng số Sinh Viên</h3>
                    <p>{summary.totalStudents}</p>
                </div>
                <div className="summary-item">
                    <h3>Tổng số Môn Học</h3>
                    <p>{summary.totalCourses}</p>
                </div>
            </div>
        </div>
    );
}

export default AdminDashboard;
