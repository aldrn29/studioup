import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import GlobalStyles from './styles/GlobalStyles';
import Home from './pages/Home';
import About from './pages/About';
import Works from './pages/Works';
import Process from './pages/Process';
import Contact from './pages/Contact';
import Layout from './layout';

function App() {
    return (
        <>
            <GlobalStyles />
            <Router basename={process.env.PUBLIC_URL}>
                <Routes>
                <Route element={<Layout/>}>
                    <Route path="/" element={<Home/>}/> 
                    <Route path="/about" element={<About/>}/>
                    <Route path="/works" element={<Works/>}/>
                    <Route path="/process" element={<Process/>}/>
                    <Route path="/contact" element={<Contact/>}/>
                    <Route path="/*" element={<Home/>}/>
                </Route>
                </Routes>
            </Router>
        </>
    );
}

export default App;
