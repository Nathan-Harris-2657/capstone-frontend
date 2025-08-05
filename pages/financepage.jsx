import { useState } from "react"
import { Link } from "react-router"

function FinancePage(){

const [moreInfo, setMoreInfo] = useState("")

const info = (info) =>{
    setMoreInfo(info)

}


    return(
        <>
        <div id="financeQuestion">Looking To Finance A Trailer?</div>

        <div id="financeContainer">

            <div className="statmentsContainer">
                <div className="statment" onClick={() => info("Aim to put down at least 10-25% to reduce monthly payments and interest")}>Know Your Budget and Down Payment</div>

                <div className="statment" onClick={() => info("Explore banks, credit unions, dealer financing, and platforms like Clicklease for flexible options")}>Compare Lenders and Loan Types</div>

                <div className="statment" onClick={() => info("A score above 700 often unlocks better interest rates and terms")}>Check Your Credit Score First</div>

                <div className="statment" onClick={() => info("Be prepared with proof of income, credit history, and trailer specs.")}>Have Your Documents Ready</div>

                <div className="statment" onClick={() => info("Tools like the Trailer Loan Calculator help you estimate monthly payments, total interest, and affordability.")}>Use a Loan Calculator</div> 
            </div>
        

            <div className="statmentsContainer">
                <div className="statment" onClick={() => info("Leasing might be better if you want lower upfront costs, newer equipment more often, or flexibility to upgrade")}>Evaluate Lease vs. Purchase Based on Your Business Model
</div>

                <div className="statment" onClick={() => info("Go with lenders who specialize in trucking or equipment financing—they’re more likely to offer flexible terms and understand seasonal cash flow")}>Choose Lenders Who Understand the Industry</div>

                <div className="statment" onClick={() => info("New trailers cost more but may come with better warranties and tech, Used trailers are cheaper upfront but might need more maintenance—factor that into your budget.")}>Decide Between New vs. Used Trailers</div>

                <div className="statment" onClick={() => info("Financing may let you deduct interest or depreciation on your taxes.")}>Understand Tax & Depreciation Benefits</div>

                <div className="statment" onClick={() => info("Make sure the trailer is covered by insurance and has a warranty.")}>Don’t Skip the Fine Prin</div> 
            </div>
        </div>


            <div id="moreInfo">
                <div id="moreInfo2">{moreInfo}</div>
            </div>

            <div id="financeLink">
                <Link to={"/budget_tool"}>Try Out Budget Calculator</Link>
            </div>

            
                
            

        
        </>
    )
}
export default FinancePage