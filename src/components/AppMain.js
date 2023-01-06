
import '../css/AppMain.css'
import UpperTab from './AppMainComponents/UpperTab'
import BottomTab from './AppMainComponents/BottomTab'
import AppMainHome from './AppMainComponents/AppMainHome'
import AppMainLocation from './AppMainComponents/AppMainLocation'
import AppMainAuth from './AppMainComponents/AppMainAuth'
import AppMainCollection from './AppMainComponents/AppMainCollection'
import AppMainEtc from './AppMainComponents/AppMainEtc'

import {Routes,Route} from 'react-router-dom';

function AppMain(){

    return(
        <div id='app-main'>
            <UpperTab/>
            <div id='main-contents'>
                <Routes>
                    <Route path='/home' element={<AppMainHome/>}/>
                    <Route path='/location' element={<AppMainLocation/>}/>
                    <Route path='/auth' element={<AppMainAuth/>}/>
                    <Route path='/collection' element={<AppMainCollection/>}/>
                    <Route path='/etc' element={<AppMainEtc/>}/>
                </Routes>
            </div>
            <BottomTab/>
        </div>
    )
}

export default AppMain;