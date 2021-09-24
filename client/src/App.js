import {useEffect} from "react";
import './App.css';

function App() {

  useEffect(() => {
    fetch("/data").then((resp) => resp.json()).then((resp) => {
      alert(JSON.stringify(resp, undefined, 2));
    });
  }, []);

  return (
    <div>
      HELLO ARMENIA
    </div>
  );
}

export default App;
