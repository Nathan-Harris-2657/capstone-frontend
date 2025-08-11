import useMutation from "../src/api/useMutation"

function createTrailerForm(){
    const {mutate: createTrailer, loading, error} = useMutation("POST", "/trailers", "trailers")
    

    const handleSubmit = (FormData) => {
    if (loading || error) {
      if (error) console.log(error);
      return;
    }}

    const type = FormData.get("type")
    const make = FormData.get("make")
    const model = FormData.get("model")
    const year = FormData.get("year")
    const specs = FormData.get("specs")
    const img = FormData.get("img")
    const price = FormData.get ("price")

    return(
        <>
        </>
    )
}