import CreateTrailerForm from "../components/addtrailer"
import CreateVendor from "../components/addvendor"
import CreateIndustry from "../components/addindustry"

function AdminPage(){
    
    return(
        <>
        <CreateTrailerForm/>
        <CreateVendor/>
        <CreateIndustry/>
        </>
    )
}
export default AdminPage