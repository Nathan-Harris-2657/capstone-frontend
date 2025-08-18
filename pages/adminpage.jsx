import CreateTrailerForm from "../components/addtrailer"
import CreateVendor from "../components/addvendor"
import CreateIndustry from "../components/addindustry"
import DeleteTrailer from "../components/deletetrailer"
import DeleteVendor from "../components/deletevendor"
import DeleteIndustry from "../components/deleteindustry"



function AdminPage(){
    
    return(
        <>
        <div id="adminContainer1">
            <CreateTrailerForm/>
            <CreateVendor/>
            <CreateIndustry/>
        </div>
        <div id="adminContainer2">
            <DeleteTrailer/>
            <DeleteVendor/>
            <DeleteIndustry/>
        </div>
        
        </>
    )
}
export default AdminPage