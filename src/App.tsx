import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import WebsiteContent from "./components/WebsiteContent";
import ToolsPage from "./components/ToolsPage";

function App() {
  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route
          path="/"
          element={
            <div className="min-h-screen">
              <div className="relative z-20">
                <WebsiteContent isVisible={true} />
              </div>
            </div>
          }
        />
        <Route path="/tools" element={<ToolsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
