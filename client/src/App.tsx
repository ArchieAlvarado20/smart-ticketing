import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/admin/Dashboard";
import Scanner from "./pages/admin/Scanner";
import Auth from "./pages/Auth";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/auth" element={<Auth />} />
        <Route path="/admin/dashboard" element={<Dashboard />} />
        <Route path="/admin/tickets" element={<Scanner />} />
        <Route path="/admin/scanner" element={<Scanner />} />
        <Route path="/admin/analytics" element={<Scanner />} />
        <Route path="/admin/settings" element={<Scanner />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
