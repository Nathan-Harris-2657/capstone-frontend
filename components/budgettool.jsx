function BudgetTool(){
    const stateTaxRates = {
        AL: 4.00,AK: 0.00,AZ: 5.60,AR: 6.50,CA: 7.25,CO: 2.90,CT: 6.35,DE: 0.00,FL: 6.00,GA: 4.00,
        HI: 4.00,ID: 6.00,IL: 6.25,IN: 7.00,IA: 6.00,KS: 6.50,KY: 6.00,LA: 4.45,ME: 5.50,MD: 6.00,
        MA: 6.25,MI: 6.00,MN: 6.875,MS: 7.00,MO: 4.225,MT: 0.00,NE: 5.50,NV: 6.85,NH: 0.00,NJ: 6.625,
        NM: 5.00,NY: 4.00,NC: 4.75,ND: 5.00,OH: 5.75,OK: 4.50,OR: 0.00,PA: 6.00,RI: 7.00,SC: 6.00,
        SD: 4.50,TN: 7.00,TX: 6.25,UT: 4.85,VT: 6.00,VA: 5.30,WA: 6.50,WV: 6.00,WI: 5.00,WY: 4.00,DC: 6.00
};

const averageRatePerMile = 2.36
    
    return(
<>
        

{/* this form will take the price of the trailer you are looking to my and calculate a rough estimate including tax,FET, shipping */}
    <form id="budgetTool">
            <label className="budgetLabel">Trailer Price
                <input className="budgetInput" type="number" placeholder="Trailer Price Only" />
            </label>

{/* creates a drop down to select what state */}
        <label className="budgetLabel">
          Select State
          <select className="budgetInput" name="state">
            {Object.entries(stateTaxRates).map(([state, rate]) => (
              <option key={state} value={rate}>{state} ({rate}%)</option>
            ))}
          </select>
        </label> 

        <label className="budgetLabel">FET %
            <input className="budgetInput" type="number" name="fet" defaultValue={0.12}/>
        </label>

        <label className="budgetLabel">Cartage
            <input className="budgetInput"  type="number" name="miles" placeholder="Price Per Mile $2.36"/>            
        </label>

        <label className="budgetLabel"> Total Trailer Price
            <input className="budgetInput" type="number" />
        </label>


    </form>
</>
    )
}
export default BudgetTool