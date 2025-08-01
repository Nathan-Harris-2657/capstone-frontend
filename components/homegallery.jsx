import { useState } from "react"
import { useEffect } from "react"
import { Link } from "react-router"

import trailer1 from "../assets/trailerpics/trailer1.jpg"
import trailer2 from "../assets/trailerpics/trailer2.jpg"
import trailer3 from "../assets/trailerpics/trailer3.jpg"
import trailer4 from "../assets/trailerpics/trailer4.jpg"

const trailerPics = [trailer1,trailer2,trailer3,trailer4]


function HomeGallery(){
    const [index, setIndex] = useState(0)

    useEffect(() => {
        const timer = setInterval(()=>{
           setIndex((prevIndex) => (prevIndex + 1) % trailerPics.length);
        },3000);
        return () => clearInterval(timer);
    }, []);
    
    return(
        <>
        <div id="homeGalleryContainer">
            <div id="galleryBackground">
                <img id="homeGalleryPics" src={trailerPics[index]} alt="" />
            </div>
            <div id="vendorSupport">
                
                <img id="certifiedImg" src="../assets/graphics/certifieddealer.png" alt="" />
                
                <Link to={"/vendors"}>Explore Vendors Now!</Link>
            </div>
        </div>
        </>
    )
}
export default HomeGallery