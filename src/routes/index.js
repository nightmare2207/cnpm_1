import { FaFolderOpen } from "react-icons/fa";
import { PiStudentBold } from "react-icons/pi";
import Grades from "../pages/Grades";
import StudentInformation from "../pages/StudentInformation";
import Subject from "../pages/Subject";
import Classes from "../pages/Class";

const StudentRoutes = [
  {
    path: "/grades",
    name: "Điểm sinh viên",
    identify: "grades",
    element: <Grades />,
    icon: FaFolderOpen,
  },
  {
    path: "/studentInformation",
    name: "Thông tin sinh viên",
    identify: "studentInformation",
    element: <StudentInformation />,
    icon: PiStudentBold,
  },
  {
    path: "/subject",
    name: "Môn học",
    identify: "subject",
    element: <Subject />,
    icon: FaFolderOpen,
  },
  {
    path: "/class",
    name: "Lớp học sinh viên",
    identify: "class",
    element: <Classes />,
    icon: FaFolderOpen,
  }
];

const TeacherRoutes = [
  {
    path: "/studentInformation",
    name: "StudentInformation",
    identify: "studentInformation",
    element: <StudentInformation />,
    icon: FaFolderOpen,
  },
];

export { StudentRoutes, TeacherRoutes };
