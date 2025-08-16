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
                    <div key={id}>
                        <div id="dealerName">{vendor.name}</div>
                        <div id="infoContainer">
                            <div>Location: {vendor.location}</div>
                            <div>Name: {vendor.contact_info.name}</div>
                            <div>Phone: {vendor.contact_info.phone}</div>
                            <div>Rating: {vendor.ratings}</div>
                        </div>
                    </div>
                ))}

                </div>
            </div>
        </>
    )
}
export default VendorsPage