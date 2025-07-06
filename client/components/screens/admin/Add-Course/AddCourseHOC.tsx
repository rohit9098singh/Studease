import dynamic from "next/dynamic";

const AddCourse = dynamic(() => import("./AddCourse"), {
    ssr: true,
});
const AddCourseHOC = () => {
    return <AddCourse />;
};

export default AddCourseHOC;
