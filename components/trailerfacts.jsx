function TrailerFacts(){
    const trailerFacts = [
  "The first enclosed cargo trailers were repurposed railway boxcars pulled behind trucks.",
  "Gooseneck hitches provide tighter turning radii than bumper pulls — great for navigating tight job sites.",
  "Air ride suspension is not just for comfort; it reduces shock to the cargo and extends trailer lifespan.",
  "Some refrigerated trailers use eutectic plates that store cold, reducing reliance on active cooling.",
  "VIN numbers on trailers can reveal axle specs, GVWR, and manufacturer code — decoding saves hours.",
  "Tandem axles distribute weight better, but single axle trailers are easier to maneuver and maintain.",
  "DOT requires reflective tape patterns on trailers for visibility — placement affects compliance.",
  "Tilt-bed trailers simplify loading low-clearance equipment like scissor lifts without ramps.",
  "Aluminum trailers resist corrosion better than steel, but can crack under torsional stress if overloaded.",
  "Fifth-wheel couplings date back to 19th-century horse-drawn carriages — modern ones handle 30,000+ lbs."
];

const randomIndex = Math.floor(Math.random() * trailerFacts.length)

const randomFact = trailerFacts[randomIndex]


    return(
        <>
        <div>{randomFact}</div>
        </>
    )
}
export default TrailerFacts

