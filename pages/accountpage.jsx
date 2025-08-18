import useQuery from "../src/api/useQuery"

function AccountPage(){
    const{data: user, loading, error} = useQuery(`/users/me`);

    if(loading || !user) return <p>Account Page Loading...</p>
    if(error) return <p>I Broke</p>


    return(
        <>
          <div id="accountContainer">

          <div id="profileContainer">
              <div id="userName">{user.username}</div>
              <div id="welcome">Welcome</div>
          </div> 

          

          </div> 

          
        </>
    )
}
export default AccountPage