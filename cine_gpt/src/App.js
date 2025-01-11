import InitialHeader from "./components/SignInHeader/SignInHeader";
import Body from "./components/BodyComponent/Body";
import { BG_IMG_URL } from "./utils/constants";
function App() {
  return (
    <div className="App bg-cover bg-center min-h-screen"
      style={{ backgroundImage: `url(${BG_IMG_URL})` }}>
      <InitialHeader/>
      <Body/>
    </div>
  );
}

export default App;
