import { useReducer } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import routes from "./routes";
import MainLayout from "./layouts/main";
import mainContext from "contexts/main";
function App() {
  const [state, dispath] = useReducer(
    (state, action) => {
      switch (action.type) {
        case "SET_USER_DATA":
          return { ...state, userData: action.payLoad };
        default:
          return state;
      }
    },
    {
      userData: {},
    }
  );
  const routManager = () => {
    return routes.map((route, index) => {
      switch (route.layout) {
        case "main":
          return (
            <Route
              key={index}
              path={route.path}
              element={<MainLayout component={route.component} />}
            />
          );
        default:
          return null;
      }
    });
  };
  const themeProvider = () => {
    return localStorage.getItem("theme");
  };
  const mainContextInit = {
    userData: state.userData,
    theme: themeProvider(),
    setUser: (data) => {
      dispath({ type: "SET_USER_DATA", payLoad: data });
    },
  };
  return (
    <mainContext.Provider value={mainContextInit}>
      <BrowserRouter>
        <Routes>{routManager()}</Routes>
      </BrowserRouter>
    </mainContext.Provider>
  );
}

export default App;
