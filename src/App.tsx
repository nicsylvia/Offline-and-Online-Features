import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [isOnline, setisOnline] = useState(navigator.onLine);
  const [styles, setstyles] = useState(isOnline ? "flex" : "none");

  // To check if online or not
  function checkIfOnline() {
    setisOnline(true);

    setTimeout(() => {
      setstyles("none");
    }, 2000);
  }
  function checkIfOffline() {
    setisOnline(false);
  }

  useEffect(() => {
    window.addEventListener("online", checkIfOnline);
    window.addEventListener("offline", checkIfOffline);

    return () => {
      window.addEventListener("online", checkIfOnline);
      window.addEventListener("offline", checkIfOffline);
    };
  }, []);
  return (
    <div style={{ display: styles }}>
      {isOnline && <h2>This user is online</h2>}
      {!isOnline && <h2>This user is not online</h2>}
      {/* <button onClick={checkinternetstatus} className="bg-blue-500 border-0">
        Click
      </button> */}
    </div>
  );
}

export default App;
