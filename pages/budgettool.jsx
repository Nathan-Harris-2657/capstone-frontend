import BudgetTool from "../components/budgettool"


function BudgetToolPage(){

    return(
        <>
        <div id="budgetToolContainer">
            <div id="budgetToolInstructions">
                <div id="budgetInsTitle">Instructions</div>
                <div id="instructions">
                    <div className="instructTitle">Trailer Price:</div>
                        <div className="instructInfo">Enter only the base cost of the trailer. Do not include taxes, fees, or additional charges.</div>

                    <div className="instructTitle">State Selection:</div>
                        <div className="instructInfo">Choose the state where you currently reside. This ensures accurate tax and regulatory calculations.</div>

                    <div className="instructTitle">Federal Excise Tax (FET)</div>
                        <div className="instructInfo">FET applies only to new trailers. You may deduct $101 per axle from the taxable amount. <br />
                        FET is calculated as 12% of the purchase price, before state taxes and other fees.</div>

                    <div className="instructTitle">Cartage Calculations:</div>
                        <div className="instructInfo" >Enter the number of miles between the trailer’s pickup and delivery locations. <br />
                        This estimate uses the national average rate per mile to calculate transportation cost.</div>
                </div>
            </div>



            <div id="budgetToolContainer2">
                <BudgetTool/> 
           </div>
        </div>
        

        </>
    )
}
export default BudgetToolPage