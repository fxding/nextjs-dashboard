import SideNav from "../ui/dashboard/sidenav";

export default function Layout({ children }) {
  return <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
    <div className="w-full md:w-64 flex-none">
      <SideNav />
    </div>
    <div className="flex-grow md:overflow-auto p-6 md:p-12">

    {children}
    </div>
    
    </div>;
}