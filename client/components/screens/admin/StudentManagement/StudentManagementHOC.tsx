import dynamic from "next/dynamic";

const StudentManagement = dynamic(() => import("./StudentManagement"), {
    ssr: true,
});
const StudentManagementHOC = () => {
    return <StudentManagement />;
};

export default StudentManagementHOC;
