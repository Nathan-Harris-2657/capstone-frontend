import { useParams } from "react-router";
import  useQuery  from "../src/api/useQuery.jsx"

function VendorsPage(){
    const{data: vendors, loading, error} = useQuery(`/vendors`);

    if(loading || !vendors) return <p>Loading...</p>
    if(error) return <p>I Broke</p>

    
    return(
        <>
        <div id="vText">Browse Our Certified Vendors Below</div>

            <div id="vendorContainer">
                <div id="vendorInfo">
                    {vendors.map((vendor, id) => (
                    <div key={id} id="vendorInfo">
                        <h1>{vendor.name}</h1>
                        <p>{vendor.location}</p>
                        <p>{vendor.contact_info.name}</p>
                        <p>{vendor.contact_info.phone}</p>
                        <p>{vendor.ratings}</p>
                    </div>
                ))}

                </div>
            </div>
        </>
    )
}
export default VendorsPage