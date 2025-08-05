import ContactMap from "../components/contactmap"

function ContactPage(){
    return(
        <>
        <div id="contactContainer">
            <ContactMap/>
            <div id="contactInfo">
                <img id="contactLogo" src="../assets/trailerbiblelogo.png" alt="The Trailer Bible Logo" />
                <div>The Trailer bible</div>
                <div>524 E 4th St Monroe, MI 48161</div>
                <div>nharris@tctrailer-mi.com</div>
                <div>7346527230</div> 
            </div>
        </div>
        </>
    )
}
export default ContactPage