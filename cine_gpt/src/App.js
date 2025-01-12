import InitialHeader from "./components/Header/header";
import Body from "./components/BodyComponent/Body";
import { BG_IMG_URL } from "./utils/constants";
import {createBrowserRouter} from "react-router-dom";
import Browse from "./components/BrowseComponent/Browse";
import { Provider } from "react-redux";
import appStore from "./store/appstore";
import { RouterProvider } from "react-router-dom";
import { AuthRoute, ProtectedRoute } from "./ProtectedRoute";

const appRoutes = createBrowserRouter([
  {
    path: "/",
    element: (
      <AuthRoute>
        <div 
          className="App min-h-screen bg-cover bg-center bg-fixed"
          style={{ 
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.8)), url(${BG_IMG_URL})` 
          }}
        >
          <InitialHeader/>
          <Body/>
        </div>
      </AuthRoute>
    )
  },
  {
    path: '/browse',
    element: (
      <ProtectedRoute>
        <Browse/>
      </ProtectedRoute>
    )
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
