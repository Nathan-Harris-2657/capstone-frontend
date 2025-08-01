// Components
import HomeGallery from "../components/homegallery"
import TrailerFacts from "../components/trailerfacts"
// css files
import "../css/homegallery.css"


function HomePage(){
    return(
        <>
        <div id="trailerFactsContainer">
            <div id="trailerFacts">{<TrailerFacts/>}</div>
        </div>
        <HomeGallery/>
        </>
    )
}
export default HomePage