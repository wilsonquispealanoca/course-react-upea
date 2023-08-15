import BadgeNew from "../pages/BadgeNew";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NotFound from "../pages/404";
import BadgeList from "../pages/BadgeList";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BadgeNew />} />
        <Route path="/badges" element={<BadgeList />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
