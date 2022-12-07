import React, {useState} from "react";
import "./App.css"
import ListGifs from "./containers/ListGifs";

function App() {
  const [keyword, setKeyword] = useState("panda")
  return (
    <div className="App">
      <section className="App-content">
        <h1>Hola Mundo</h1>
        <button onClick={() => setKeyword("mapache")}>Cambiar imagen</button>
        <ListGifs keyword = {keyword}/>
      </section>
    </div>
  );
}
export default App;
