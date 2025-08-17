import CreateTrailerForm from "../components/addtrailer"
import CreateVendor from "../components/addvendor"
import CreateIndustry from "../components/addindustry"

function AdminPage(){
    
    return(
        <>
        <div id="adminContainer1">
            <CreateTrailerForm/>
            <CreateVendor/>
            <CreateIndustry/>
        </div>
        
        </>
    )
}
export default AdminPage