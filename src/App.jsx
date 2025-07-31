import { Route, Routes } from "react-router";
import Layout from "./layout/Layout";
import Login from "./auth/Login";
import Register from "./auth/Register";
import ComparePage from "../pages/compare";
import HomePage from "../pages/home";
import IndustriesPage from "../pages/industries";
import BudgetToolPage from "../pages/budgettool";


export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage/>} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/compare" element={<ComparePage/>}/>
        <Route path="/industries" element={<IndustriesPage/>}/>
        <Route path="/budget_tool" element={<BudgetToolPage/>}/>
      </Route>
    </Routes>
  );
}
