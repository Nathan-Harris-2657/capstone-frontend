import useMutation from "../src/api/useMutation";

function CreateIndustry() {
  const { mutate: createIndustry, loading, error } = useMutation("POST", "/industries", ["industries"]);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (loading) return;
    if (error) {
      console.error("Error creating industry:", error);
      return;
    }

    const form = event.target;
    const formData = new FormData(form);

    const name = formData.get("name");
    const description = formData.get("description");
  

    

    

    createIndustry({ name, description});
    form.reset()
  };

  return (
    <form id="createTrailer" onSubmit={handleSubmit}>
      <input name="name" placeholder="name" required />
      <input name="description" placeholder="description" required />
      <button type="submit" disabled={loading}>Submit</button>
    </form>
  );
}

export default CreateIndustry;