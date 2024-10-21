import { BrowserRouter, Route, Routes } from "react-router-dom"
import Card from "./pages/card"


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Card />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
