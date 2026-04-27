import MobileBottomNav from "@/components/shared/BottomNav";
import ComingSoon from "@/components/shared/ComingSoon";
import Sidebar from "@/components/shared/Sidebar";
import Topbar from "@/components/shared/Topbar";

export default function Analytics() {
  return (
    <>
      <Topbar />
      <div className="flex max-h-[calc(100vh-72px)]">
        <Sidebar />
        <main className="flex-1 p-4 overflow-y-auto">
          <div className="max-w-container-max mx-auto">
            {/* <!-- Page Header --> */}
            <div className="mb-0 space-y-1">
              <ComingSoon />
            </div>
          </div>
        </main>
      </div>

      <MobileBottomNav active="analytics" />
    </>
  );
}
