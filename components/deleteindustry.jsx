import { useState } from "react";
import useQuery from "../src/api/useQuery";
import useMutation from "../src/api/useMutation";

function DeleteIndustry() {
  const { data: industries, loading, error } = useQuery("/industries", "industries");
  const [deletingId, setDeletingId] = useState(null);

  const {
    mutate: deleteIndustry,
    loading: mutationLoading,
    error: mutationError,
  } = useMutation("DELETE", "industries", ["industries"]);

  async function handleDelete(id) {
    if (!window.confirm("Are you sure you want to delete this industry?")) return;

    setDeletingId(id);
    try {
      const success = await deleteIndustry(null, `/industries/${id}`);
      if (!success) throw new Error("Mutation failed");
    } catch (err) {
      console.error("Delete error:", err);
    } finally {
      setDeletingId(null);
    }
  }

  if (loading || !industries) return <p>Loading industries...</p>;
  if (error) return <p>Error loading industries: {error}</p>;
  if (!industries.length) return <p>No industries available.</p>;

  return (
    <div id="deleteIndustrialContainer">
      <div className="deleteTitles">Industry List</div>
      <ul>
        {industries.map((industry) => (
          <li className="deleteList" key={industry.id}>
            <strong>{industry.name}</strong>
            <br />
            <button className="deleteButton"
              onClick={() => handleDelete(industry.id)}
              disabled={deletingId === industry.id || mutationLoading}
            >
              {deletingId === industry.id ? "Deleting..." : "Delete"}
            </button>
          </li>
        ))}
      </ul>
      {mutationError && <p>Error deleting industry: {mutationError}</p>}
    </div>
  );
}

export default DeleteIndustry;