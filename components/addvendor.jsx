import useMutation from "../src/api/useMutation";

function CreateVendor(){
const { mutate: CreateVendor, loading, error } = useMutation("POST", "/vendors", ["vendors"]);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (loading) return;
    if (error) {
      console.error("Error creating vendor:", error);
      return;
    }

    const form = event.target;
    const formData = new FormData(form);

    const name = formData.get("name");
    const location = formData.get("location");
    const contact_info = formData.get("contactinfo");
    const ratings = formData.get("ratings");
    
    

    let contactInfo;
        try {
            contactInfo = JSON.parse(contact_info);
        } catch (err) {
            console.error("Invalid specs JSON:", err);
        return;
    }

    CreateVendor({ name, location, contact_info: contactInfo, ratings});


    
    form.reset()
  };
    
    return(
        <>
        <form id="createVendor" onSubmit={handleSubmit}>
            <input name="name" placeholder="Vendor Name" required />
            <input name="location" placeholder="Location" required />
            <textarea
                name="contactinfo"
                placeholder='{"email": "vendor@example.com", "phone": "123-456-7890"}'
                required/>
            <input name="ratings" type="number" step="0.1" min="0" max="5" placeholder="Ratings (0–5)" />
            <button type="submit" disabled={loading}>Submit</button>
        </form>

        
        </>
    )
}
export default CreateVendor