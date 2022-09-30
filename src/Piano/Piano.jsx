import React,{useState} from "react"
import "./Piano.css"
import A from "./MP3/A.mpeg"
import B from "./MP3/B.mpeg"

export const Piano = () => {
      let audio = new Audio (A)
      
      const getAudio = (tone) => {
            audio.play()
      }
    

return(
<div className="sub2">
      <h1>Piano</h1>
      <div className="box">

      <button className="pio" onClick={()=>getAudio("SA")}>SA</button>
      <button className="pio2"></button>
      <button className="pio" onClick={()=>getAudio("RE")}>RE</button>
      <button className="pio2"></button>
      <button className="pio" onClick={()=>getAudio("GA")}>GA</button>
      <button className="pio2"></button>
      <button className="pio" onClick={()=>getAudio("MA")}>MA</button>
      <button className="pio2"></button>
      <button className="pio"onClick={()=>getAudio("PA")}>PA</button>
      <button className="pio2"></button>
      <button className="pio" onClick={()=>getAudio("DA")}>DA</button>
      <button className="pio2"></button>
      <button className="pio" onClick={()=>getAudio("NI")}>NI</button>
      </div>
</div>
)
}