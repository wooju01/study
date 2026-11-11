import { Routes, Route, NavLink } from "react-router";
import HomePage from "./page/HomePage.jsx";
import ChatPage from "./page/ChatPage.jsx";
import DocumentPage from "./page/DocumentPage.jsx";
import SettingsPage from "./page/SettingsPage.jsx";

function App() {
    return (
        <>
            <nav>
              <NavLink style={{ textDecoration: 'none' }} to="/">Home</NavLink>
              <NavLink style={{ textDecoration: 'none' }} to="/chat">Chat</NavLink>
              <NavLink style={{ textDecoration: 'none' }} to="/document">Document</NavLink>
              <NavLink style={{ textDecoration: 'none' }} to="/settings">Settings</NavLink>
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