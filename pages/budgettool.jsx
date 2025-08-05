import BudgetTool from "../components/budgettool"


function BudgetToolPage(){

    return(
        <>
        <div id="budgetToolContainer">
            <div id="budgetToolInstructions">
                <div id="budgetInsTitle">Instructions</div>
                <div id="instructions">
                    <p>When trailer price is enterend it should only be what the trailer cost no additions</p>
                    <p>Please select the correct state in which you currently reside in</p>
                    <p>FET only applys to new trailers, you may deduct $101 per axle. <br />
                    FET is 12% of the Purchase price before state taxs and any other fees</p>
                    <p>For the cartage, insert the miles between pickup and delivery. <br />
                    This is using the national average rate per mile.</p>
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