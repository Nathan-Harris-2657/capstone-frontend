import BudgetTool from "../components/budgettool"

function BudgetToolPage(){

    return(
        <>
        <div id="budgetToolContainer">
            <div id="budgetToolInstructions">
                <div id="budgetInsTitle">Instructions</div>
            </div>



            <div id="budgetToolContainer2">
                <BudgetTool/> 
           </div>
        </div>
        

        </>
    )
}
export default BudgetToolPage