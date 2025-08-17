import CreateTrailerForm from "../components/addtrailer"
import CreateVendor from "../components/addvendor"
import CreateIndustry from "../components/addindustry"
import DeleteTrailer from "../components/deletetrailer"
import DeleteVendor from "../components/deletevendor"


function AdminPage(){
    
    return(
        <>
        <div id="adminContainer1">
            <CreateTrailerForm/>
            <CreateVendor/>
            <CreateIndustry/>
        </div>
        <div>
            <DeleteTrailer/>
            <DeleteVendor/>
        </div>
        
        </>
    )
}
export default AdminPage