import AdminNavBar from "@/components/view/AdminNavBar";
import Sidebar from "@/components/view/SideBar";
import Providers from "@/lib/Providers";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Providers>
        <div className='flex'>
          <Sidebar />
          <div className='flex-[8] rounded m-0 p-0 h-full'>
            <AdminNavBar />
            {children}
          </div>
        </div>
      </Providers>
    </>
  );
}
