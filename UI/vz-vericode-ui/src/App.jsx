import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {Home} from './screens/home'
import Landing from './screens/landing/Landing' 

function App() {


  return (
    <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Landing />} />
    </Routes>
  </Router>
  )
}

export default App
