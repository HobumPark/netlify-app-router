
import { useEffect } from 'react';
import '../css/SplashMain.css'
import splash_img from '../images/splash-main.png';

function SplashMain(){

    useEffect(()=>{
        setTimeout(moveLogin,3000)  
    },[])

    const moveLogin=()=>{
        window.location.href='/login'
    }

    return(
        <div id='splash-main'>
            <img src={splash_img}/>
        </div>
    )
}

export default SplashMain;