function ContactMap(){
    return(
        <>
            <div id="mapContainer">
                <iframe id="map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5938.423288856993!2d-83.39651582304138!3d41.909808771238474!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x883b6fb8c38bc357%3A0x2c5a9f4d16bfe0c3!2s524%20E%204th%20St%2C%20Monroe%2C%20MI%2048161!5e0!3m2!1sen!2sus!4v1754411257465!5m2!1sen!2sus" 
                    width="600" 
                    height="450" 
                    allowfullscreen="" 
                    loading="lazy" 
                    referrerpolicy="no-referrer-when-downgrade">
                </iframe>
            </div>
        </>
    )
}
export default ContactMap