import { Routes, Route } from "react-router-dom";
import Event from "./pages/Event";

export default function Router() {
  return (
    <Routes>
      <Route path="/" />
      <Route path="/event/lesson/:slug" element={<Event />} />
      <Route path="/contact" />
    </Routes>
  );
}
