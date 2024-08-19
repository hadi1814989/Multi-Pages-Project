
import Layout from './components/root/Layout';
import './App.css'
import About from './pages/About';
import Home from './pages/Home';
import {createBrowserRouter, createRoutesFromElements, RouterProvider, Route} from "react-router-dom"


function App() {
 let router = createBrowserRouter(createRoutesFromElements(
  <Route element={<Layout/>}>
    <Route path="/" element={<Home />}></Route>
    <Route path="/about" element={<About />}></Route>
  
  </Route>
 )
 );

  return (
    <>
  
    <RouterProvider router={router} />
    </>
  )
}

export default App
