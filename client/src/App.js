import react from "react";
import "./App.css";
// import Login from './Component/Login'
import Sidebar from "./Component/Sidebar";
import Chat from "./Component/Chat";
function App() {
  return (
    <div className="App_body">
      <Sidebar />
      <Chat />
    </div>
  );
}

export default App;
