import AdminNavBar from "@/components/view/AdminNavBar";
import NavBar from "@/components/view/NavBar";
import Sidebar from "@/components/view/SideBar";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className='flex'>
        <Sidebar />
        <div className='border flex-[8] rounded h-[100vh] m-0 p-0'>
          <AdminNavBar />
          {children}
        </div>
      </div>
    </>
  );
}
