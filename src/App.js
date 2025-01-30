import React from "react";
import Sticker from "./components/Sticker/Sticker";
import StickerList from "./components/StickerList/StickerList";
import Choice from "./components/Choice/Choice";
import data from "./data/stickers.json"
console.log(data)

function App() {
  return (
    <div className="App">
     <Sticker/>
     <StickerList data={data}/>
    </div>
  );
}

export default App;
