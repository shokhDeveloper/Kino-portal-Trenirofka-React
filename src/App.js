import { Navigate, Route, Routes } from "react-router";
import { Global } from "./Global";
import { Home} from "./Home";
import { Movie } from "./Popular";
import { Actors } from "./Popular";
import { Actor } from "./Popular/Actor";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/*" element={<Home/>}/> 
        {/* <Route path="/movie/:id" element={<Movie/>}/> */}
        <Route path="*" element={<Navigate to={"/"} replace={true}/>}/> 
        <Route path="/actors/:id" element={<Actors/>}/>
        <Route path="/actor/:id" element={<Actor/>}/>
      </Routes>      
    <Global/>
    </div>
  );
}

export default App;
