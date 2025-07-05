import dynamic from "next/dynamic";
const Dashboard = dynamic(() => import("./Dashboard"), {
    ssr: true,
});

const DashboardHOC = () => {
    return <Dashboard  />;
};

export default DashboardHOC;
