import  useQuery  from "../src/api/useQuery.jsx"

function IndustriesPage(){
    const{data: industries, loading, error} = useQuery(`/industries`);
    
        if(loading || !industries) return <p>Loading Our Industries</p>
        if(error) return <p>I Broke</p>


    return(
        <>
        <img id="wallPaper1" src="../assets/wallpaper/wallpaper1.jpg" alt="semi trucking in the fall" />
    
            <div id="industriesInfoContianer">
                <div>{industries.map((industries, id) =>(
                    <div key={id} id="industriesInfo">
                        <div id="indTitle">{industries.name}</div>
                        <div id="indDescr">{industries.description}</div>
                    </div>
                    
                ))}</div>
                

            </div>
        
        </>
    )
}
export default IndustriesPage