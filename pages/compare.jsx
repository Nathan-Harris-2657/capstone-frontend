import { useParams } from "react-router";
import  useQuery  from "../src/api/useQuery.jsx"

import CompareTrailers from "../components/comparetrailers.jsx";


function ComparePage(){


    return(
        <>
        <div id="compareBlurb">Compare Trailer Below</div>
        <div id="compareBackground">
            <div id="compareBackground2">
                <div id="compareContainer">

                    <div id="compare1">
                        <CompareTrailers/>
                    </div>

                     <div id="compare2">
                        <CompareTrailers/>
                    </div>
                    
                </div>
            </div>    
        </div>
        </>
    )
}
export default ComparePage