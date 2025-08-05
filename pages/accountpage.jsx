import useQuery from "../src/api/useQuery"

function AccountPage(){
    const{data: user, loading, error} = useQuery(`/users/me`);

    if(loading || !user) return <p>Loading...</p>
    if(error) return <p>I Broke</p>


    return(
        <>
      <div>{user.username}</div>
        </>
    )
}
export default AccountPage