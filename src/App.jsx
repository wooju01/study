import { Routes, Route, NavLink } from "react-router";
import HomePage from "./page/HomePage.jsx";
import ChatPage from "./page/ChatPage.jsx";
import DocumentPage from "./page/DocumentPage.jsx";
import SettingsPage from "./page/SettingsPage.jsx";

const navLinkClass = ({ isActive }) =>
  `rounded-lg px-3 py-1.5 text-sm font-medium transition-colors ${
    isActive
      ? "bg-emerald-200 text-emerald-900"
      : "text-slate-300 hover:bg-slate-700 hover:text-white"
  }`;

function App() {
    return (
        <>
            <nav className="flex gap-2 bg-slate-800 px-4 py-3 shadow-md">
              <NavLink className={navLinkClass} to="/" end>Home</NavLink>
              <NavLink className={navLinkClass} to="/chat">Chat</NavLink>
              <NavLink className={navLinkClass} to="/document">Document</NavLink>
              <NavLink className={navLinkClass} to="/settings">Settings</NavLink>
            </nav>
            <Routes>
              <Route path="/" element={<HomePage/>} />
              <Route path="/chat" element={<ChatPage />} />
              <Route path="/document" element={<DocumentPage />} />
              <Route path="/settings" element={<SettingsPage />} />
            </Routes>
        </>
    );
}

export default App;