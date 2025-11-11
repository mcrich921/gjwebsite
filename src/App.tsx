import "./App.css";
import WebsiteContent from "./components/WebsiteContent";

function App() {
  return (
    <div className="min-h-screen">
      <div className="relative z-20">
        <WebsiteContent isVisible={true} />
      </div>
    </div>
  );
}

export default App;
