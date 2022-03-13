import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import { Home, Profile, Chats } from './routes'

function App() {

  return (
    <Router>
      <header>
       <ul>
         <li>
           <Link to="/profile">profile</Link>
         </li>

         <li>
           <Link to="/chats">chats</Link>
         </li>

         <li>
           <Link to="/">Home</Link>
         </li>
       </ul>
     </header>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route exact path="/chats" element={<Chats/>}/>
        <Route path='*' element={<Home/>}/>
      </Routes>
   </Router>
  )
  // return (

  // )
}

export default App;
