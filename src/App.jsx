import { Route, Routes } from "react-router";
import Layout from "./layout/Layout";
import Login from "./auth/Login";
import Register from "./auth/Register";
// PAGES
import ComparePage from "../pages/compare";
import HomePage from "../pages/home";
import IndustriesPage from "../pages/industries";
import BudgetToolPage from "../pages/budgettool";
import AccountPage from "../pages/accountpage";
import VendorsPage from "../pages/vendorspage";
import FinancePage from "../pages/financepage";
import CompliancePage from "../pages/compliancepage";
import ArticlesPage from "../pages/articlespage";
import ContactPage from "../pages/contactpage";
import AdminPage from "../pages/adminpage";
// CSS FILES
import "../css/navbar.css"
import "../css/logo.css"
import "../css/industriespage.css"
import "../css/vendorspage.css"
import "../css/login.css"
import "../css/register.css"
import "../css/homepage.css"
import "../css/footer.css"
import "../css/articlepage.css"
import "../css/financepage.css"
import "../css/contactpage.css"
import "../css/budgettoolpage.css"
import "../css/accountpage.css"
import "../css/compliancepage.css"




export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage/>} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Account" element={<AccountPage/>}/>
        <Route path="/compare" element={<ComparePage/>}/>
        <Route path="/industries" element={<IndustriesPage/>}/>
        <Route path="/budget_tool" element={<BudgetToolPage/>}/>
        <Route path="/vendors" element={<VendorsPage/>}/>
        <Route path="/finance" element={<FinancePage/>}/>
        <Route path="/compliance" element={<CompliancePage/>}/>
        <Route path="/articles" element={<ArticlesPage/>}/>
        <Route path="/contact" element={<ContactPage/>}/>
        <Route path="/admin" element={<AdminPage/>}/>        
      </Route>
    </Routes>
  );
}
