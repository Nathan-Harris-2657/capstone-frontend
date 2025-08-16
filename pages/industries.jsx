import { useState } from "react";
import useQuery from "../src/api/useQuery.jsx";

function IndustriesPage() {
  const { data: industries, loading, error } = useQuery(`/industries`);
  const [selectedIndustryId, setSelectedIndustryId] = useState(null);

  if (loading || !industries) return <p>Loading Our Industries</p>;
  if (error) return <p>I Broke</p>;

  const selectedIndustry = industries[selectedIndustryId];

  return (
    <>
      <img
        id="wallPaper1"
        src="../assets/wallpaper/wallpaper1.jpg"
        alt="semi trucking in the fall"
      />

      <div id="industriesInfoContianer">
        <div id="industriesInfoContianer2">
          {industries.map((industry, id) => (
            <div
              key={id}
              id="industriesInfo"
              onClick={() => setSelectedIndustryId(id)}
              style={{ cursor: "pointer" }}
            >
              <div id="indTitle">{industry.name}</div>
            </div>
          ))}
        </div>
      </div>

      
      {selectedIndustry && (
        <div id="industryDescriptionBox">
          <p>{selectedIndustry.description}</p>
        </div>
      )}
    </>
  );
}

export default IndustriesPage;