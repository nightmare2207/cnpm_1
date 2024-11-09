import { FaFolderOpen } from "react-icons/fa";
import { PiStudentBold } from "react-icons/pi";
import { MdDashboard } from "react-icons/md";
import * as PagesStudent from "../pages/student/index";
import * as PagesTeacher from "../pages/teacher/index";
import * as PagesAdmin from "../pages/admin/index";

const StudentRoutes = [
  {
    path: "/",
    name: "Trang chủ",
    identify: "dashboard",
    element: <PagesStudent.StudentHome />,
    icon: MdDashboard,
  },
  {
    path: "/grades",
    name: "Điểm sinh viên",
    identify: "grades",
    element: <PagesStudent.StudentClass />,
    icon: FaFolderOpen,
  },
  {
    path: "/studentInformation",
    name: "Thông tin sinh viên",
    identify: "studentInformation",
    element: <PagesStudent.StudentInformation />,
    icon: PiStudentBold,
  },
  {
    path: "/subject",
    name: "Môn học",
    identify: "subject",
    element: <PagesStudent.StudentSubject />,
    icon: FaFolderOpen,
  },
  {
    path: "/class",
    name: "Lớp học sinh viên",
    identify: "class",
    element: <PagesStudent.StudentClass />,
    icon: FaFolderOpen,
  },
];

const TeacherRoutes = [
  {
    path: "/",
    name: "Trang chủ",
    identify: "dashboard",
    element: <PagesTeacher.TeacherHome />,
    icon: MdDashboard,
  },
  {
    path: "/infor",
    name: "Thông tin giáo viên",
    identify: "infor",
    element: <PagesTeacher.TeacherInfor />,
    icon: FaFolderOpen,
  },
];

const AdminRoutes = [
  {
    path: "/",
    name: "Trang chủ",
    identify: "dashboard",
    element: <PagesAdmin.AdminHome />,
    icon: MdDashboard,
  },
  {
    path: "/form",
    name: "Form",
    identify: "form",
    element: <PagesAdmin.AdminForm />,
    icon: FaFolderOpen,
  },
];

export { StudentRoutes, TeacherRoutes, AdminRoutes };
