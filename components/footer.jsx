function Footer(){
const date = new Date().toLocaleDateString('en-US', {
    year:'numeric'
})

    return(
        <>

           <div id="footer">The <br /> Trailer Bible {date} © </div> 
        </>
    )

    
}
export default Footer