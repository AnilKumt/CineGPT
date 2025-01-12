import InitialHeader from "./components/SignInHeader/SignInHeader";
import Body from "./components/BodyComponent/Body";
import { BG_IMG_URL } from "./utils/constants";
import {createBrowserRouter} from "react-router-dom";
import Browse from "./components/BrowseComponent/Browse";
import { Provider } from "react-redux";
import appStore from "./store/app.store";
import { RouterProvider } from "react-router-dom";
const appRoutes = createBrowserRouter([
  {
    path:"/",
    element:(<div className="App bg-cover bg-center min-h-screen"
        style={{ backgroundImage: `url(${BG_IMG_URL})` }}>
            <InitialHeader/>
            <Body/>
        </div>)
  },
  {
    path:'/browse',
    element:<Browse/>
  }

]);


function App() {
  return (
    <Provider store={appStore}>
        <RouterProvider router={appRoutes} />
    </Provider>
  );
}

export default App;
