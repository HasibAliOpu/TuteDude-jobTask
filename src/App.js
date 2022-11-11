import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Breadcrumbs from "./Components/Breadcrumbs/Breadcrumbs";
import CodeAndBalance from "./Components/CodeAndBalance/CodeAndBalance";
import WorkDetails from "./Components/WorkDetails/WorkDetails";

function App() {
  return (
    <div className="font-poppins">
      <Navbar />
      <Breadcrumbs />
      <CodeAndBalance />
      <WorkDetails />
    </div>
  );
}

export default App;
