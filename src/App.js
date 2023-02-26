import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import DetailsPage from "./pages/DetailsPage";
import Main from "./pages/Main";
import { ProductProvider } from "./store/context";

const App = () => {
  return (
    <BrowserRouter>
      <ProductProvider>
        <Routes>
          <Route element={<Main></Main>} path={"/"}></Route>
          <Route element={<AboutPage></AboutPage>} path={"/about"}></Route>
          <Route
            element={<DetailsPage></DetailsPage>}
            path={"/details/:id"}
          ></Route>
        </Routes>
      </ProductProvider>
    </BrowserRouter>
  );
};

export default App;
