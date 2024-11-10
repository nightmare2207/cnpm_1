import React, { useState, useEffect } from 'react';
import './CourseManagement.css';

function CourseManagement({ fetchCourses, addCourse, editCourse, deleteCourse }) {
    const [courses, setCourses] = useState([]);
    const [newCourse, setNewCourse] = useState("");

    useEffect(() => {
        fetchCourses().then(setCourses);
    }, [fetchCourses]);

    const handleAddCourse = () => {
        addCourse(newCourse).then(() => {
            setNewCourse("");
            fetchCourses().then(setCourses);
        });
    };

    const handleEditCourse = (id, name) => {
        editCourse(id, name).then(() => {
            fetchCourses().then(setCourses);
        });
    };

    const handleDeleteCourse = (id) => {
        deleteCourse(id).then(() => {
            fetchCourses().then(setCourses);
        });
    };

    return (
        <div className="course-management">
            <h2>Quản Lý Môn Học</h2>
            <input
                type="text"
                value={newCourse}
                placeholder="Tên môn học"
                onChange={(e) => setNewCourse(e.target.value)}
            />
            <button onClick={handleAddCourse}>Thêm Môn Học</button>
            <ul>
                {courses.map(course => (
                    <li key={course.id}>
                        <input
                            type="text"
                            value={course.name}
                            onChange={(e) => handleEditCourse(course.id, e.target.value)}
                        />
                        <button onClick={() => handleDeleteCourse(course.id)}>Xóa</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default CourseManagement;
