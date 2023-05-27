import { useState, ChangeEvent } from 'react';
import Home from './components/Home';
import UserHistory from "./components/UserHistory";
import './App.css';

export const DATE_KEY_FORMAT = "YYYYMMDD";

export enum AppState {
  PROMPT_FOR_USER_CREDS,
  USER_INPUT_ACCEPTED,
  ERROR,
}


function App() {
  const [userId, setUserId] = useState<string>("");
  const [userApiKey, setUserApiKey] = useState<string>("");
  // const [error, setError] = useState<Error>();
  const [appState, setAppState] = useState<AppState>(
    AppState.PROMPT_FOR_USER_CREDS
  );
  const handleUserIdChange = (event: ChangeEvent<HTMLInputElement>) => {
    setUserId(event.target.value);
  };

  const handleUserApiKeyChange = (event: ChangeEvent<HTMLInputElement>) => {
    setUserApiKey(event.target.value);
  };

  const handleSubmit = (event: React.MouseEvent) => {
    event.preventDefault();
    setAppState(AppState.USER_INPUT_ACCEPTED);
  };

  if (
    (appState === AppState.PROMPT_FOR_USER_CREDS || appState === AppState.ERROR) &&
    !localStorage.getItem("user-id")
  ) {
    return <Home
      handleUserIdChange={handleUserIdChange}
      handleUserApiKeyChange={handleUserApiKeyChange}
      handleSubmit={handleSubmit}
      userId={userId}
      userApiKey={userApiKey}
    />
  } else {
    return (
      <>
        <UserHistory
          userId={userId || localStorage.getItem("user-id") || ""}
          userApiKey={userApiKey || localStorage.getItem("user-key") || ""}
        />
      </>
    );
  }
}

export default App;
