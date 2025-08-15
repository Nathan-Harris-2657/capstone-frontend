import useQuery from "../src/api/useQuery";

function AccountPage() {
  const { data: user, loading: userLoading, error: userError } = useQuery("/users/me");
  const { data: estimates = [], loading: estimatesLoading, error: estimatesError } = useQuery(
    user ? "/users/me/estimates" : null
  );

  if (userLoading || estimatesLoading) return <p>Account Page Loading...</p>;
  if (userError || estimatesError) return <p>Something went wrong.</p>;

  return (
    <div id="accountContainer">
      {/* User Info */}
      <div id="profileContainer">
        <div id="userName">{user.username}</div>
        <div id="welcome">Welcome</div>
      </div>

      {/* Saved Estimates */}
      <div id="estimatesContainer">
        <div id="savedTitle">Saved Estimates</div>

        {estimates.length === 0 ? (
          <p>No saved estimates yet.</p>
        ) : (
          <div id="savedEstimates">
            <div className="estimateHeader">
              <strong>Location</strong>
              <strong>FET</strong>
              <strong>Tax</strong>
              <strong>Shipping</strong>
              <strong>Total</strong>
              <strong>Saved At</strong>
            </div>

            {estimates.map((est, i) => (
              <div key={i} className="estimateRow">
                <div>{est.location}</div>
                <div>${est.fees.toFixed(2)}</div>
                <div>${est.tax.toFixed(2)}</div>
                <div>${est.shipping.toFixed(2)}</div>
                <div>${est.total_cost.toFixed(2)}</div>
                <div>{new Date(est.saved_at).toLocaleDateString()}</div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default AccountPage;
