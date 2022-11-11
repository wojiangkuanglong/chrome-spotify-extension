import { Route, Routes } from "react-router-dom"

import Home from './home';
import Callback from "./callback";

export const Routing = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/callback" element={<Callback />} />
  </Routes>
)