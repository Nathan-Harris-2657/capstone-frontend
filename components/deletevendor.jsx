import { useState } from "react";
import useQuery from "../src/api/useQuery";
import useMutation from "../src/api/useMutation";

function DeleteVendor() {
  const { data: vendors, loading, error } = useQuery("/vendors", "vendors");
  const [deletingId, setDeletingId] = useState(null);

  const { mutate: deleteVendor, loading: mutationLoading, error: mutationError } =
  useMutation("DELETE", "/vendors:id", ["vendors"]);


  async function handleDelete(id) {
    if (!window.confirm("Are you sure you want to delete this vendor?")) return;

    setDeletingId(id);
    try {
      const success = await deleteVendor(`/vendors/${id}`);
      if (!success) throw new Error("Mutation failed");
    } catch (err) {
      console.error("Delete error:", err);
    } finally {
      setDeletingId(null);
    }
  }

  if (loading || !vendors) return <p>Loading Vendors...</p>;
  if (error) return <p>Something went wrong.</p>;

  return (
    <div>
      <h2>Vendors</h2>
      <ul>
        {vendors.map((vendor) => (
          <li key={vendor.id}>
            <strong>{vendor.name}</strong> — {vendor.location}
            <button
              onClick={() => handleDelete(vendor.id)}
              disabled={deletingId === vendor.id || mutationLoading}
            >
              {deletingId === vendor.id ? "Deleting..." : "Delete"}
            </button>
          </li>
        ))}
      </ul>
      {mutationError && <p>Error deleting vendor: {mutationError}</p>}
    </div>
  );
}

export default DeleteVendor;