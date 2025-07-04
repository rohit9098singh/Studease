import dynamic from "next/dynamic";

const SettingsContent = dynamic(() => import("./SettingsContent"), {
    ssr: true,
});
const SettingsContentHOC = () => {
    return <SettingsContent />;
};

export default SettingsContentHOC;
