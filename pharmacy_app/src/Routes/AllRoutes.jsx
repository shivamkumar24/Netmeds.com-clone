import { Route, Routes } from "react-router-dom";
import LabTest from "../Components/LabTest";
import { Wellness } from "../Components/Wellness";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/Wellness" element={<Wellness />} />
      <Route path="/LabTest" element={<LabTest />} />
    </Routes>
  );
};

export default AllRoutes;
