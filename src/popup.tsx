import { useState } from "react";
import { MemoryRouter } from "react-router-dom";
import { Routing } from "./tabs";

function Home() {

  return (
    <MemoryRouter>
      <Routing />
    </MemoryRouter>
  )
}

export default Home
