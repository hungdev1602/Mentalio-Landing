import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage"
import PolicyPage from "./pages/PolicyPage/PolicyPage"
import Header from "./components/Header/Header"
import Section4 from "./components/Section4/Section4"
import Footer from "./components/Footer/Footer"
import ScrollToTop from "./ScrollToTop"
import "./App.css"
function App() {

  return (
    <>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/policy" element={<PolicyPage />} />
      </Routes>
      <Section4 />
      <Footer />
    </>
  )
}

export default App
