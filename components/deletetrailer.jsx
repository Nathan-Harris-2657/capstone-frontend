import { useState } from "react";
import useQuery from "../src/api/useQuery";
import useMutation from "../src/api/useMutation";

function DeleteTrailer() {
  const { data: trailers, loading, error } = useQuery("/trailers", "trailers");
  const [deletingId, setDeletingId] = useState(null);

  const { mutate: deleteTrailer, loading: mutationLoading, error: mutationError } =
  useMutation("DELETE", "trailers", ["trailers"]);

  async function handleDelete(id) {
    if (!window.confirm("Are you sure you want to delete this trailer?")) return;

    setDeletingId(id);
    try {
      const success = await deleteTrailer(null, `/trailers/${id}`);
      if (!success) throw new Error("Mutation failed");
    } catch (err) {
      console.error("Delete error:", err);
    } finally {
      setDeletingId(null);
    }
  }

  if (loading || !trailers) return <p>Loading Our Trailers</p>;
  if (error) return <p>I Broke</p>;

  return (
    <div>
      <h2>Our Trailers</h2>
      <ul>
        {trailers.map((trailer) => (
          <li key={trailer.id}>
            <strong>{trailer.make} {trailer.model} ({trailer.year})</strong>
            <button
              onClick={() => handleDelete(trailer.id)}
              disabled={deletingId === trailer.id || mutationLoading}
            >
              {deletingId === trailer.id ? "Deleting..." : "Delete"}
            </button>
          </li>
        ))}
      </ul>
      {mutationError && <p>Error deleting trailer: {mutationError}</p>}
    </div>
  );
}

export default DeleteTrailer;


