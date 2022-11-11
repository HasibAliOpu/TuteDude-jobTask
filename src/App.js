import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Breadcrumbs from "./Components/Breadcrumbs/Breadcrumbs";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Breadcrumbs />
    </div>
  );
}

export default App;
