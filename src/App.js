import "./App.css";
import { Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import routes from "./routes";

function App() {
  return (
    <Layout>
      <Routes>
        {routes.map((route) => {
          return <Route {...route} />;
        })}
      </Routes>
    </Layout>
  );
}

export default App;
