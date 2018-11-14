import React from "react"; //že chceme teda psát ten react
import ReactDOM from "react-dom"; //document object model

import "./styles.css";

function App() {
  //nejake funkce, tahle nám dělá tu applikaci, vrací to html

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      NOPE NOPE NOPE ><br />
      no f*cking magic
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
//metoda rectdom render
//<App /> najky nejaky html zavolá funkci co nám neco vypíse
