import { useState } from "react";
import useQuery from "../src/api/useQuery";

function CompareTrailers() {
  const { data: trailers, loading, error } = useQuery(`/trailers`);
  const [selectedType, setSelectedType] = useState("");
  const [selectedMake, setSelectedMake] = useState("");

  if (loading || !trailers) return <p>Loading Our Trailers</p>;
  if (error) return <p>I Broke</p>;

  
  const trailerTypes = [...new Set(trailers.map(trailer => trailer.type))];
  const trailerMakes = [...new Set(trailers.map(trailer => trailer.make))];

  
  const filteredTrailers = trailers.filter(trailer => {
    const matchesType = selectedType ? trailer.type === selectedType : true;
    const matchesMake = selectedMake ? trailer.make === selectedMake : true;
    return matchesType && matchesMake;
  });

  return (
    <>
    <div id="selectContainer">
      <select id="selectTrailerId"
        value={selectedType}
        onChange={(e) => setSelectedType(e.target.value)}
      >
        <option value="">Select A Trailer Type</option>
        {trailerTypes.map((type, idx) => (
          <option key={idx} value={type}>
            {type}
          </option>
        ))}
      </select>

      
      <select id="selectTrailerMake"
        value={selectedMake}
        onChange={(e) => setSelectedMake(e.target.value)}
      >
        <option value="">Select A Trailer Make</option>
        {trailerMakes.map((make, idx) => (
          <option key={idx} value={make}>
            {make}
          </option>
        ))}
      </select>
    </div>

    
      <div id="filteredTrailers">
  {(selectedType || selectedMake) ? (
    filteredTrailers.length > 0 ? (
      filteredTrailers.map((trailer, id) => (
        <div key={id}>

          <div id="trailerInfoContainer">

            <div id="trailerInfo">
              <div id="trailerInfoTitle">ID: {trailer.id} {trailer.make} {trailer.model}</div>
              <div>Type: {trailer.type}</div>
              <div>Year: {trailer.year}</div>
              <div>Price: ${trailer.price}</div>
            </div>

            <div id="trailerPicture">
              <img id="trailerImg" src={trailer.images} alt="Trailer Picture" />
            </div>
          </div>

        </div>
      ))
    ) : (
      <div>No trailers found for the selected filters.</div>
    )
  ) : (
    <div id="pleaseSelect">Select A Trailer Type or Make To Begin Comparing.</div>
  )}
</div>

    </>
  );
}

export default CompareTrailers;

