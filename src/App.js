import React from 'react'
import { Route, Routes} from 'react-router-dom'
import Disrtrict from './Admin/District'
import './Admin/style.css'
function App() {
  return (
    <div>
      <Routes>
        <Route path="/District" element={<Disrtrict/>}/>
      </Routes>
    </div>
  )
}

export default App