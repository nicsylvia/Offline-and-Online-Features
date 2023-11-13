// import { useEffect, useState } from "react";
import "./App.css";
// import Functions from "./functions";

import LearnFunctions from "./LearnFunctions";

// function App() {
//   const [isOnline, setisOnline] = useState(navigator.onLine);
//   const [styles, setstyles] = useState(isOnline ? "flex" : "none");

//   // To check if online or not
//   function checkIfOnline() {
//     setisOnline(true);

//     setTimeout(() => {
//       setstyles("none");
//     }, 2000);
//   }
//   function checkIfOffline() {
//     setisOnline(false);
//   }

//   useEffect(() => {
//     window.addEventListener("online", checkIfOnline);
//     window.addEventListener("offline", checkIfOffline);

//     return () => {
//       window.addEventListener("online", checkIfOnline);
//       window.addEventListener("offline", checkIfOffline);
//     };
//   }, []);
//   return (
//     <div style={{ display: styles }}>
//       {isOnline && <h2>This user is online</h2>}
//       {!isOnline && <h2>This user is not online</h2>}

//     </div>
//   );
// }

// export default App;

const App = () => {
  return (
    <div>
      <>
        <LearnFunctions />
      </>
    </div>
  );
};

export default App;
