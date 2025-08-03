// Components
import HomeGallery from "../components/homegallery"
import TrailerFacts from "../components/trailerfacts"
// css files
import "../css/homegallery.css"
// react 
import { Link } from "react-router"

function HomePage(){
    return(
        <>
        <div id="trailerFactsContainer">
            <div id="trailerFacts">{<TrailerFacts/>}</div>
        </div>
        <HomeGallery/>
        <div id="homeGridContainer">
            <Link to={"/finance"}>Financing</Link>
            <Link to={"/compliance"}>Compliance</Link>
            <Link to={"/articles"}>Articles</Link>
            <Link to={"/contact"}>Contact</Link>
        </div>
        </>
    )
}
export default HomePage