import "bootstrap/dist/css/bootstrap.min.css";
import { useReducer } from "react";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./components/AppRouter";
import NavBar from "./components/NavBar";
import Footer from "./components/footer/Footer";
import { reducer } from "./components/reducer/reducer";
import Context from "./context/context";

const App = () => {
  const auth = window.localStorage.getItem("token");
  const user = window.localStorage.getItem("user");

  const [state, dispatch] = useReducer(reducer, {
    session: auth,
    user: user,
    users: [],
  });
  return (
    <Context.Provider
      value={{
        state,
        dispatch,
      }}
    >
      <div className="App">
        <BrowserRouter>
          <NavBar />
          <AppRouter />
          <Footer />  
        </BrowserRouter>
      </div>
    </Context.Provider>
  );
};

export default App;
