import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [message, setMessage] = useState("Learning offline and online feature");
  const [online, setOnline] = useState<boolean>(navigator.onLine);
  // To check if online or not
  function checkinternetstatus() {
    if (online) {
      setOnline(true);
      setMessage("This user is online");
      setTimeout(() => {
        setMessage("");
      }, 2000);
    } else {
      setOnline(false);
      setMessage("This user is not online");
      setTimeout(() => {
        setMessage("");
      }, 2000);
    }
  }

  useEffect(() => {
    window.addEventListener("online", checkinternetstatus);
    window.addEventListener("offline", checkinternetstatus);

    return () => {
      window.addEventListener("online", checkinternetstatus);
      window.addEventListener("offline", checkinternetstatus);
    };
  }, []);
  return (
    <div>
      <h2>{message}</h2>

      {/* <button onClick={checkinternetstatus} className="bg-blue-500 border-0">
        Click
      </button> */}
    </div>
  );
}

export default App;
