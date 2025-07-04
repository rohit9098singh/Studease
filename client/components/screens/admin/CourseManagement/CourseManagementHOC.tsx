import dynamic from "next/dynamic";

const CourseManagement = dynamic(() => import("./CourseManagement"), {
    ssr: true,
});
const CourseManagementHOC = () => {
    return <CourseManagement />;
};

export default CourseManagementHOC;
