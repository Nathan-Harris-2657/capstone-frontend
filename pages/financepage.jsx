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
                <div className="statment" onClick={() => info("Aim to put down at least 10-25% to reduce monthly payments and interest")}>Know Your Budget and Down Payment</div>
                <div className="statment" onClick={() => info("Explore banks, credit unions, dealer financing, and platforms like Clicklease for flexible options")}>Compare Lenders and Loan Types</div>
                <div className="statment" onClick={() => info("A score above 700 often unlocks better interest rates and terms")}>Check Your Credit Score First</div>
                <div className="statment" onClick={() => info("Be prepared with proof of income, credit history, and trailer specs.")}>Have Your Documents Ready</div>
                <div className="statment" onClick={() => info("Tools like the Trailer Loan Calculator help you estimate monthly payments, total interest, and affordability.")}>Use a Loan Calculator</div> 
            </div>
        </div>


            <div id="moreInfo">
                <div>{moreInfo}</div>
            </div>
            

            
                
            

        
        </>
    )
}
export default FinancePage