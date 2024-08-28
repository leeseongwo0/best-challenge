import React from "react";
import ConnectWalletButton from "./components/ConnectWalletButton";
import TeamBuildingPage from "./pages/TeamBuildingPage";

function App() {
  return (
    <div>
      <h1>Blockchain Team Building Platform</h1>
      <ConnectWalletButton />
      <TeamBuildingPage />
    </div>
  );
}

export default App;
