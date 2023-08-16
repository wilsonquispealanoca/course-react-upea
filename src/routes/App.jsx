import BadgeNew from "../pages/BadgeNew";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NotFound from "../pages/404";
import BadgeList from "../pages/BadgeList";
import AppContext from "../context/AppContext";
import useInitialState from "../hooks/useInitialState";

function App() {
  const initialState = useInitialState();
  return (
    <AppContext.Provider value={initialState}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<BadgeNew />} />
          <Route path="/badges" element={<BadgeList />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </AppContext.Provider>
  );
}

export default App;
