import { BrowserRouter, Routes, Route } from "react-router-dom";
import routes from "./routes";
import MainLayout from "./layouts/main";
function App() {
  const routManager = () => {
    return routes.map((route, index) => {
      switch (route.layout) {
        case "main":
          return (
            <Route
              path={route.path}
              element={<MainLayout component={route.component} />}
            />
          );

        default:
          return null;
      }
    });
  };
  return (
    <BrowserRouter>
      <Routes>{routManager()}</Routes>
    </BrowserRouter>
  );
}

export default App;
