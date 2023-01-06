
import './App.css'
import {BrowserRouter, Routes,Route} from 'react-router-dom';
import SplashMain from './components/SplashMain'
import Login from './components/Login'
import AppMain from './components/AppMain'

function App(){

    return(
        <div id='app'>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<SplashMain/>}/>
                    <Route path='/login' element={<Login/>}/>
                    <Route path='/main/*' element={<AppMain/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App;