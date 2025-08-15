import useMutation from "../src/api/useMutation";

function CreateTrailerForm() {
  const { mutate: createTrailer, loading, error } = useMutation("POST", "/trailers", ["trailers"]);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (loading) return;
    if (error) {
      console.error("Error creating trailer:", error);
      return;
    }

    const form = event.target;
    const formData = new FormData(form);

    const type = formData.get("type");
    const make = formData.get("make");
    const model = formData.get("model");
    const year = parseInt(formData.get("year"), 10);
    const specsRaw = formData.get("specs");
    const imagesRaw = formData.get("img");
    const price = parseFloat(formData.get("price"));

    let specs;
    try {
      specs = JSON.parse(specsRaw);
    } catch (err) {
      console.error("Invalid specs JSON:", err);
      return;
    }

    const images = imagesRaw ? [imagesRaw] : [];

    createTrailer({ type, make, model, year, specs, images, price });
    form.reset()
  };

  return (
    <form id="createTrailer" onSubmit={handleSubmit}>
      <input name="type" placeholder="Type" required />
      <input name="make" placeholder="Make" required />
      <input name="model" placeholder="Model" required />
      <input name="year" type="number" placeholder="Year" required />
      <textarea name="specs" placeholder='{"length": "20ft", "axles": 2}' required />
      <input name="img" type="text" placeholder="Image URL" />
      <input name="price" type="number" step="0.01" placeholder="Price" required />
      <button type="submit" disabled={loading}>Submit</button>
    </form>
  );
}

export default CreateTrailerForm;
