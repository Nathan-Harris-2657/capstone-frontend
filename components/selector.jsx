import { useEffect } from "react"

function Selector(){

function colorChange(){
    const options = document.getElementsByClassName('options')
    if(options.textContent === "OK"){
        options.style = 'background-color = green'
    }
}


    return(
        <>
        <select name="" id="optionSelector">
            <option className="options" value="">OK</option>
            <option className="options" value="">NEEDS REPAIR</option>
            <option className="options" value="">Not Applicable</option>
        </select>
        </>
    )
}
export default Selector