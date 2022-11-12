import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Breadcrumbs from "./Components/Breadcrumbs/Breadcrumbs";
import { Route, Routes } from "react-router-dom";
import ReferAndEarn from "./Components/Pages/ReferAndEarn";
import FriendsReferred from "./Components/Pages/FriendsReferred";
import UIAndUX from "./Components/Pages/UIAndUX";
import NotFound from "./Components/Pages/NotFound";

function App() {
  return (
    <div className="font-poppins">
      <Navbar />
      <Breadcrumbs />
      <Routes>
        <Route path="/" element={<UIAndUX />} />
        <Route path="/referAndEarn" element={<ReferAndEarn />} />
        <Route path="/friendsReferred" element={<FriendsReferred />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
