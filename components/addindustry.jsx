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
    <div id="createIndustireContainer">
      <div id="createTitle"> Create Industry</div>
    <form id="createIndustrie" onSubmit={handleSubmit}>
      <input className="createInput" name="name" placeholder="name" required />
      <input className="createInput" name="description" placeholder="description" required />
      <button className="createButton" type="submit" disabled={loading}>Submit</button>
    </form>
    </div>
  );
}

export default CreateIndustry;