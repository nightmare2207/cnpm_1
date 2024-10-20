import { FaFolderOpen } from "react-icons/fa";
import Grades from "../pages/Grades";
import StudentInformation from "../pages/StudentInformation";

const StudentRoutes = [
  {
    path: "/grades",
    name: "Grades",
    identify: "grades",
    element: <Grades />,
    icon: FaFolderOpen,
  },
  {
    path: "/studentInformation",
    name: "StudentInformation",
    identify: "studentInformation",
    element: <StudentInformation />,
    icon: FaFolderOpen,
  },
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
