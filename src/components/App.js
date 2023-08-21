import video from "../data/video.js";
import PlayerWindow from "./PlayerWindow.js";
import Info from "./Info.js";
import Votes from "./Votes.js";

function App() {
  console.log("Here's your data:", video);

  return (
    <div className="App">
      <PlayerWindow video= {video}/>
      <Info video= {video}/>
      <Votes video= {video}/>

      
    </div>
  );
}

export default App;
