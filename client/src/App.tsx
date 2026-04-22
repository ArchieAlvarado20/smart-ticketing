import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/admin/Dashboard";
import Scanner from "./pages/admin/Scanner";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/admin/dashboard" element={<Dashboard />} />
        <Route path="/admin/scanner" element={<Scanner />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
