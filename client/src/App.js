// import MyButton from "./MyButton/MyButton";
// import { useState } from "react";
// import ToggleButton from "./MyToggleButton/ToggleButton";
// import CounterHeader from "./Counter/CounterHeader";
// import CounterAdd from "./Counter/CounterAdd";
// import CounterSub from "./Counter/CounterSub";
// import CounterStudy from "./CounterStudy";
// import MyClassButton from "./MyClassButton/MyClassButton";

// function App() {
//   const [buttonText, setButtonText] = useState("Click me please!");
//   const [toggle, setToggle] = useState(false);
//   const [count, setCount] = useState(1);

//   const changeText = () => {
//     setButtonText("New text");
//   };

//   return (
//     <div className="App">
//       <MyButton action={changeText}>{buttonText}</MyButton>
//       <ToggleButton toggle={toggle} setToggle={setToggle}>
//         {toggle ? "One" : "Two"}
//       </ToggleButton>
//       <CounterHeader>Current count: {count}</CounterHeader>
//       <hr></hr>
//       <CounterAdd count={count} addCount={setCount}></CounterAdd>
//       <CounterSub count={count} subCount={setCount}></CounterSub>
//       <CounterStudy />
//       <MyClassButton />
//     </div>
//   );
// }

// export default App;

import "bootstrap/dist/css/bootstrap.min.css";
import { useReducer } from "react";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./components/AppRouter";
import NavBar from "./components/NavBar";
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
        </BrowserRouter>
      </div>
    </Context.Provider>
  );
};

export default App;
