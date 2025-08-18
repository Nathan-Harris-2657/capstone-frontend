import { useState } from "react";
import useQuery from "../src/api/useQuery";
import useMutation from "../src/api/useMutation";

function DeleteVendor() {
    const { data: vendors, loading, error } = useQuery("/vendors", "vendors");
  const { mutate: deleteVendor, loading: deleting } = useMutation("DELETE", "/vendors", ["vendors"]);

  const handleDelete = async (id) => {
    const confirmed = window.confirm("Are you sure you want to delete this vendor?");
    if (confirmed) {
      await deleteVendor(null, `/vendors/${id}`);
    }
  };

  if (loading) return <p>Loading vendors...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!vendors?.length) return <p>No vendors found.</p>;

  return (
    <div id="deleteVendorContainer">
      <div className="deleteTitles">Vendor List</div>
      <ul>
        {vendors.map((vendor) => (
          <li className="deleteList" key={vendor.id}>
            <strong>{vendor.name}</strong> — {vendor.location}
            <br />
            Contact: {vendor.contact_info.name} | Ratings: {vendor.ratings}
            <br />
            <button className="deleteButton" onClick={() => handleDelete(vendor.id)} disabled={deleting}>
              {deleting ? "Deleting..." : "Delete"}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );


}

export default DeleteVendor;