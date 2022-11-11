import { Route, Routes } from "react-router-dom"

import Callback from "./callback"
import Home from "./home"

export const Routing = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/callback" element={<Callback />} />
  </Routes>
)
