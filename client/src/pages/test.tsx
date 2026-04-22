export default function Test() {
  return (
    <>
      <div
        className="fixed inset-0 bg-black/50 z-40 hidden md:hidden transition-opacity"
        id="mobile-overlay"
      ></div>
      {/* <!-- TopAppBar --> */}
      <header className="sticky top-0 z-50 flex items-center justify-between w-full px-6 h-16 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="flex items-center gap-4">
          {/* <!-- Mobile Menu Toggle --> */}
          <button
            className="md:hidden p-2 -ml-2 text-slate-600 hover:bg-slate-100 rounded-lg"
            id="mobile-toggle"
          >
            <span className="material-symbols-outlined">menu</span>
          </button>
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold tracking-tight text-slate-900">
              TicketOS
            </span>
          </div>
          {/* <!-- Desktop Sidebar Toggle --> */}
          <button
            className="hidden md:flex p-2 text-slate-500 hover:bg-slate-50 transition-colors rounded-full ml-2"
            id="desktop-toggle"
          >
            <span className="material-symbols-outlined">menu_open</span>
          </button>
        </div>
        <div className="flex items-center gap-4">
          <button className="p-2 text-slate-500 hover:bg-slate-50 transition-colors cursor-pointer active:opacity-80 rounded-full">
            <span
              className="material-symbols-outlined"
              data-icon="notifications"
            >
              notifications
            </span>
          </button>
          <div className="h-8 w-8 rounded-full overflow-hidden border border-slate-200">
            <img
              alt="Admin User Profile"
              className="h-full w-full object-cover"
              data-alt="close-up portrait of a professional man in a clean white studio setting with soft natural light"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDjXjES9_ysj6ZDzKArFr4JB6gHfeQxcTtCvkwOkIKnrGriTd9ZLpiYdm-84cbHK51YEuk_vlSTpIR1-qeGa-MoD9nOrj0UZ7zX4pjg9qjoK_WNkgwt7aVCLHP7TjZb3NNDxlV2IKQCrFuFLVOiKQsCP0SMW4aC4mxjqrqacs34006A9r8KxRM-MVCUNgKqxPIHBh2XjInj3ZFJOkOMev4nrcwolRdoXZ0oL6-3cD3ettN7newa2o6xks98Aa4ThbPxzRCRvOjbey76"
            />
          </div>
        </div>
      </header>
      <div className="flex min-h-screen">
        {/* <!-- NavigationDrawer --> */}
        <aside
          className="fixed left-0 top-16 h-[calc(100vh-4rem)] py-6 px-4 gap-2 bg-slate-50 border-r border-slate-200 w-64 z-40 transition-all duration-300 transform -translate-x-full md:translate-x-0 md:flex flex-col overflow-y-auto"
          id="sidebar"
        >
          <div className="px-2 mb-4 nav-header">
            <p className="text-lg font-semibold text-slate-900 nav-header-text">
              Management
            </p>
          </div>
          <nav className="flex flex-col gap-1">
            <a
              className="nav-link flex items-center gap-3 px-3 py-2 text-sm font-medium Inter text-indigo-600 bg-indigo-50/50 rounded-lg transition-all duration-200 ease-in-out"
              href="#"
            >
              <span className="material-symbols-outlined" data-icon="dashboard">
                dashboard
              </span>
              <span className="nav-text">Dashboard</span>
            </a>
            <a
              className="nav-link flex items-center gap-3 px-3 py-2 text-sm font-medium Inter text-slate-600 hover:bg-slate-100 hover:text-slate-900 rounded-lg transition-all duration-200 ease-in-out"
              href="#"
            >
              <span
                className="material-symbols-outlined"
                data-icon="confirmation_number"
              >
                confirmation_number
              </span>
              <span className="nav-text">Tickets</span>
            </a>
            <a
              className="nav-link flex items-center gap-3 px-3 py-2 text-sm font-medium Inter text-slate-600 hover:bg-slate-100 hover:text-slate-900 rounded-lg transition-all duration-200 ease-in-out"
              href="#"
            >
              <span
                className="material-symbols-outlined"
                data-icon="qr_code_scanner"
              >
                qr_code_scanner
              </span>
              <span className="nav-text">Scanners</span>
            </a>
            <a
              className="nav-link flex items-center gap-3 px-3 py-2 text-sm font-medium Inter text-slate-600 hover:bg-slate-100 hover:text-slate-900 rounded-lg transition-all duration-200 ease-in-out"
              href="#"
            >
              <span className="material-symbols-outlined" data-icon="insights">
                insights
              </span>
              <span className="nav-text">Analytics</span>
            </a>
            <a
              className="nav-link flex items-center gap-3 px-3 py-2 text-sm font-medium Inter text-slate-600 hover:bg-slate-100 hover:text-slate-900 rounded-lg transition-all duration-200 ease-in-out"
              href="#"
            >
              <span className="material-symbols-outlined" data-icon="settings">
                settings
              </span>
              <span className="nav-text">Settings</span>
            </a>
          </nav>
        </aside>
        {/* <!-- Main Content Area --> */}
        <main
          className="flex-1 md:ml-64 p-8 transition-all duration-300 main-content-mobile"
          id="main-content"
        >
          <div className="max-w-container-max mx-auto">
            {/* <!-- Page Header --> */}
            <div className="mb-stack-lg">
              <h1 className="font-h1 text-h1 text-on-background">
                System Overview
              </h1>
              <p className="font-body-base text-body-base text-on-surface-variant mt-1">
                Real-time ticketing performance and monitoring.
              </p>
            </div>
            {/* <!-- Stats Cards Grid --> */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter mb-stack-lg">
              {/* <!-- Total Tickets Card --> */}
              <div className="bg-surface-container-lowest p-6 border border-slate-200 rounded-xl shadow-[0_1px_3px_rgba(0,0,0,0.05)]">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="font-label-md text-label-md text-on-surface-variant mb-2">
                      Total Tickets
                    </p>
                    <h2 className="font-h2 text-h2 text-on-background">
                      12,482
                    </h2>
                  </div>
                  <div className="p-2 bg-indigo-50 rounded-lg">
                    <span
                      className="material-symbols-outlined text-primary"
                      data-icon="confirmation_number"
                    >
                      confirmation_number
                    </span>
                  </div>
                </div>
                <div className="mt-4 flex items-center gap-2">
                  <span className="flex items-center text-emerald-600 text-xs font-semibold">
                    <span
                      className="material-symbols-outlined text-sm"
                      data-icon="arrow_upward"
                    >
                      arrow_upward
                    </span>{" "}
                    12%
                  </span>
                  <span className="font-label-xs text-label-xs text-on-surface-variant">
                    vs last month
                  </span>
                </div>
              </div>
              {/* <!-- Active Tickets Card --> */}
              <div className="bg-surface-container-lowest p-6 border border-slate-200 rounded-xl shadow-[0_1px_3px_rgba(0,0,0,0.05)]">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="font-label-md text-label-md text-on-surface-variant mb-2">
                      Active Tickets
                    </p>
                    <h2 className="font-h2 text-h2 text-on-background">
                      4,819
                    </h2>
                  </div>
                  <div className="p-2 bg-blue-50 rounded-lg">
                    <span
                      className="material-symbols-outlined text-blue-600"
                      data-icon="timer"
                    >
                      timer
                    </span>
                  </div>
                </div>
                <div className="mt-4 flex items-center gap-2">
                  <span className="flex items-center text-emerald-600 text-xs font-semibold">
                    <span
                      className="material-symbols-outlined text-sm"
                      data-icon="arrow_upward"
                    >
                      arrow_upward
                    </span>{" "}
                    5%
                  </span>
                  <span className="font-label-xs text-label-xs text-on-surface-variant">
                    vs yesterday
                  </span>
                </div>
              </div>
              {/* <!-- Used Tickets Card --> */}
              <div className="bg-surface-container-lowest p-6 border border-slate-200 rounded-xl shadow-[0_1px_3px_rgba(0,0,0,0.05)]">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="font-label-md text-label-md text-on-surface-variant mb-2">
                      Used Tickets
                    </p>
                    <h2 className="font-h2 text-h2 text-on-background">
                      7,663
                    </h2>
                  </div>
                  <div className="p-2 bg-slate-100 rounded-lg">
                    <span
                      className="material-symbols-outlined text-slate-600"
                      data-icon="check_circle"
                    >
                      check_circle
                    </span>
                  </div>
                </div>
                <div className="mt-4 flex items-center gap-2">
                  <span className="flex items-center text-slate-600 text-xs font-semibold">
                    <span
                      className="material-symbols-outlined text-sm"
                      data-icon="remove"
                    >
                      remove
                    </span>{" "}
                    0%
                  </span>
                  <span className="font-label-xs text-label-xs text-on-surface-variant">
                    stable rate
                  </span>
                </div>
              </div>
            </div>
            {/* <!-- Main Layout Grid --> */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-gutter">
              {/* <!-- Scan Activity Table (Left - 2/3) --> */}
              <div className="lg:col-span-2 bg-surface-container-lowest border border-slate-200 rounded-xl overflow-hidden">
                <div className="p-6 border-b border-slate-100 flex items-center justify-between">
                  <h3 className="font-h3 text-h3 text-on-background">
                    Recent Scan Activity
                  </h3>
                  <button className="text-primary font-label-md hover:underline cursor-pointer">
                    View all
                  </button>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-left">
                    <thead className="bg-slate-50 border-b border-slate-100">
                      <tr>
                        <th className="px-6 py-4 font-label-md text-on-surface-variant">
                          Ticket ID
                        </th>
                        <th className="px-6 py-4 font-label-md text-on-surface-variant">
                          Timestamp
                        </th>
                        <th className="px-6 py-4 font-label-md text-on-surface-variant">
                          Status
                        </th>
                        <th className="px-6 py-4 font-label-md text-on-surface-variant">
                          Action
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      <tr className="hover:bg-slate-50 transition-colors">
                        <td className="px-6 py-4 font-body-base text-on-background font-medium">
                          #TIC-99420
                        </td>
                        <td className="px-6 py-4 font-body-sm text-on-surface-variant">
                          Oct 24, 14:22:10
                        </td>
                        <td className="px-6 py-4">
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-100 text-emerald-800">
                            Valid
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          <button className="p-1 hover:bg-slate-200 rounded transition-colors">
                            <span
                              className="material-symbols-outlined text-slate-500"
                              data-icon="more_vert"
                            >
                              more_vert
                            </span>
                          </button>
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50 transition-colors">
                        <td className="px-6 py-4 font-body-base text-on-background font-medium">
                          #TIC-88124
                        </td>
                        <td className="px-6 py-4 font-body-sm text-on-surface-variant">
                          Oct 24, 14:21:45
                        </td>
                        <td className="px-6 py-4">
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-amber-100 text-amber-800">
                            Used
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          <button className="p-1 hover:bg-slate-200 rounded transition-colors">
                            <span
                              className="material-symbols-outlined text-slate-500"
                              data-icon="more_vert"
                            >
                              more_vert
                            </span>
                          </button>
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50 transition-colors">
                        <td className="px-6 py-4 font-body-base text-on-background font-medium">
                          #TIC-77301
                        </td>
                        <td className="px-6 py-4 font-body-sm text-on-surface-variant">
                          Oct 24, 14:19:02
                        </td>
                        <td className="px-6 py-4">
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                            Invalid
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          <button className="p-1 hover:bg-slate-200 rounded transition-colors">
                            <span
                              className="material-symbols-outlined text-slate-500"
                              data-icon="more_vert"
                            >
                              more_vert
                            </span>
                          </button>
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50 transition-colors">
                        <td className="px-6 py-4 font-body-base text-on-background font-medium">
                          #TIC-99419
                        </td>
                        <td className="px-6 py-4 font-body-sm text-on-surface-variant">
                          Oct 24, 14:18:30
                        </td>
                        <td className="px-6 py-4">
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-100 text-emerald-800">
                            Valid
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          <button className="p-1 hover:bg-slate-200 rounded transition-colors">
                            <span
                              className="material-symbols-outlined text-slate-500"
                              data-icon="more_vert"
                            >
                              more_vert
                            </span>
                          </button>
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50 transition-colors">
                        <td className="px-6 py-4 font-body-base text-on-background font-medium">
                          #TIC-99418
                        </td>
                        <td className="px-6 py-4 font-body-sm text-on-surface-variant">
                          Oct 24, 14:15:12
                        </td>
                        <td className="px-6 py-4">
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-100 text-emerald-800">
                            Valid
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          <button className="p-1 hover:bg-slate-200 rounded transition-colors">
                            <span
                              className="material-symbols-outlined text-slate-500"
                              data-icon="more_vert"
                            >
                              more_vert
                            </span>
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              {/* <!-- Right Sidebar / Active Scanners (1/3) --> */}
              <div className="space-y-gutter">
                {/* <!-- Active Scanners Bento --> */}
                <div className="bg-indigo-600 rounded-xl p-6 text-white overflow-hidden relative">
                  <div className="relative z-10">
                    <p className="text-indigo-100 font-label-md mb-1">
                      Active Scanners
                    </p>
                    <div className="flex items-end gap-2 mb-4">
                      <h4 className="text-3xl font-bold">24</h4>
                      <span className="text-indigo-200 font-label-xs mb-1">
                        Devices Online
                      </span>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between p-2 bg-white/10 rounded-lg">
                        <span className="font-body-sm">Main Gate A</span>
                        <div className="w-2 h-2 rounded-full bg-emerald-400"></div>
                      </div>
                      <div className="flex items-center justify-between p-2 bg-white/10 rounded-lg">
                        <span className="font-body-sm">North Entrance</span>
                        <div className="w-2 h-2 rounded-full bg-emerald-400"></div>
                      </div>
                      <div className="flex items-center justify-between p-2 bg-white/10 rounded-lg">
                        <span className="font-body-sm">VIP Access</span>
                        <div className="w-2 h-2 rounded-full bg-amber-400"></div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute top-0 right-0 -mr-8 -mt-8 opacity-10">
                    <span
                      className="material-symbols-outlined text-[120px]"
                      data-icon="qr_code_2"
                    >
                      qr_code_2
                    </span>
                  </div>
                </div>
                {/* <!-- Quick Actions Bento --> */}
                <div className="bg-surface-container-lowest border border-slate-200 rounded-xl p-6">
                  <h3 className="font-label-md text-on-background mb-4">
                    Quick Actions
                  </h3>
                  <div className="grid grid-cols-2 gap-3">
                    <button className="flex flex-col items-center justify-center p-4 bg-slate-50 border border-slate-100 rounded-xl hover:bg-slate-100 transition-colors">
                      <span
                        className="material-symbols-outlined text-indigo-600 mb-2"
                        data-icon="add_circle"
                      >
                        add_circle
                      </span>
                      <span className="font-label-xs">New Batch</span>
                    </button>
                    <button className="flex flex-col items-center justify-center p-4 bg-slate-50 border border-slate-100 rounded-xl hover:bg-slate-100 transition-colors">
                      <span
                        className="material-symbols-outlined text-indigo-600 mb-2"
                        data-icon="download"
                      >
                        download
                      </span>
                      <span className="font-label-xs">Export All</span>
                    </button>
                    <button className="flex flex-col items-center justify-center p-4 bg-slate-50 border border-slate-100 rounded-xl hover:bg-slate-100 transition-colors">
                      <span
                        className="material-symbols-outlined text-indigo-600 mb-2"
                        data-icon="search"
                      >
                        search
                      </span>
                      <span className="font-label-xs">Lookup</span>
                    </button>
                    <button className="flex flex-col items-center justify-center p-4 bg-slate-50 border border-slate-100 rounded-xl hover:bg-slate-100 transition-colors">
                      <span
                        className="material-symbols-outlined text-indigo-600 mb-2"
                        data-icon="block"
                      >
                        block
                      </span>
                      <span className="font-label-xs">Revoke</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
      {/* <!-- Mobile Bottom Navigation --> */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200 h-16 flex items-center justify-around z-50">
        <a
          className="flex flex-col items-center gap-1 text-indigo-600"
          href="#"
        >
          <span className="material-symbols-outlined" data-icon="dashboard">
            dashboard
          </span>
          <span className="text-[10px] font-medium">Dashboard</span>
        </a>
        <a className="flex flex-col items-center gap-1 text-slate-500" href="#">
          <span
            className="material-symbols-outlined"
            data-icon="confirmation_number"
          >
            confirmation_number
          </span>
          <span className="text-[10px] font-medium">Tickets</span>
        </a>
        <a className="flex flex-col items-center gap-1 text-slate-500" href="#">
          <span
            className="material-symbols-outlined"
            data-icon="qr_code_scanner"
          >
            qr_code_scanner
          </span>
          <span className="text-[10px] font-medium">Scan</span>
        </a>
        <a className="flex flex-col items-center gap-1 text-slate-500" href="#">
          <span className="material-symbols-outlined" data-icon="insights">
            insights
          </span>
          <span className="text-[10px] font-medium">Stats</span>
        </a>
      </nav>
    </>
  );
}
