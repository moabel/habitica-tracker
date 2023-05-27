interface HomeProps {
  handleUserIdChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleUserApiKeyChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (event: React.MouseEvent) => void;
  userId: string;
  userApiKey: string;
}
export default function Home(HomeProps: HomeProps){
  return <div className="App">
  <h1>Habitica Tracker</h1>
  {/* {error && <div className="error">Error: {error.message}</div>} */}
  <p>
    This tool displays a history of your Habits, Dailies and Todos in
    Habitica.
  </p>
  <p>
    Your User ID and API key can be found on the{" "}
    <a
      href="https://habitica.com/user/settings/api"
      target="_blank"
      rel="noopener noreferrer"
    >
      Settings &gt; API
    </a>{" "}
    page in Habitica.
  </p>
  <form className="user-api-form">
    <div className="label-container">
      <div className="label">User ID</div>
      <input
        type="text"
        className="user-id"
        value={HomeProps.userId}
        onChange={HomeProps.handleUserIdChange}
      />
    </div>
    <div className="label-container">
      <span className="label">API Key</span>
      <input
        type="password"
        className="api-key"
        value={HomeProps.userApiKey}
        onChange={HomeProps.handleUserApiKeyChange}
        minLength={36}
      />
    </div>
    <div className="submit-wrapper">
      <input type="submit" value="Fetch My Data" onClick={HomeProps.handleSubmit} />
    </div>
  </form>
  <h2>Note</h2>
  <ul>
    <li>
      Your user ID and API key will be sent to the Habitica servers and
      nowhere else.
    </li>
    <li>
      This app does not change your Habitica account data. It only fetches
      and displays data.
    </li>
  </ul>
</div>
}