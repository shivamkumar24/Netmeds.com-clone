import { Route, Routes } from "react-router-dom";
import LabTest from "../Components/LabTest";
import Wellness from "../Components/Wellness";
import Home from "../Components/Home";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Wellness" element={<Wellness />} />
      <Route path="/LabTest" element={<LabTest />} />
    </Routes>
  );
};

export default AllRoutes;
