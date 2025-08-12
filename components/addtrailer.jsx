import useMutation from "../src/api/useMutation"

function CreateTrailerForm(){
    const {mutate: createTrailer, loading, error} = useMutation("POST", "/trailers", "trailers")
    

    const handleSubmit = (FormData) => {
    if (loading || error) {
      if (error) console.log(error);
      return;
    }

    const type = FormData.get("type")
    const make = FormData.get("make")
    const model = FormData.get("model")
    const year = FormData.get("year")
    const specs = FormData.get("specs")
    const img = FormData.get("img")
    const price = FormData.get ("price")

    createTrailer({type, make, model, year, specs, img, price})
  }

    return(
        <>
        <form id="createTrailer" onSubmit={handleSubmit}>
          <input name="type" placeholder="Type" />
          <input name="make" placeholder="Make" />
          <input name="model" placeholder="Model" />
          <input name="year" type="number" placeholder="Year" />
          <textarea name="specs" placeholder='{"length": "20ft", "axles": 2}' />
          <input name="img" type="text" placeholder="Url"/>
          <input name="price" type="number" step="0.01" placeholder="Price" />
          <button type="submit">Submit</button>
        </form>

        </>
    )
}
export default CreateTrailerForm