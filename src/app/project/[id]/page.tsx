import Navbar from "@/components/navbar";
import ClickableCard from "@/components/ui/card";

export const metadata = {
  title: "Project | Admin Dashboard",
  description: "Generated by create next app",
};

const tabs = [
  { name: "List REPs", description: "List of all the representatives" },
  { name: "List Partners", description: "List of all the partners" },
  { name: "List Fields", description: "List of all the farms" },
  { name: "Update User", description: "Reset user Passwords" },
];

const ProjectHome = ({ params }: { params: { id: string } }) => {
  return (
    <>
      <Navbar />
      <div className="grid grid-cols-4 gap-4 p-10">
        {tabs.map((item, index) => (
          <ClickableCard key={index} data={item} />
        ))}
      </div>
    </>
  );
};

export default ProjectHome;
