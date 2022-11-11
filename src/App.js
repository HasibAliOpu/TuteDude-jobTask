import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Breadcrumbs from "./Components/Breadcrumbs/Breadcrumbs";
import CodeAndBalance from "./Components/CodeAndBalance/CodeAndBalance";

function App() {
  return (
    <div className="font-poppins">
      <Navbar />
      <Breadcrumbs />
      <CodeAndBalance />
    </div>
  );
}

export default App;
