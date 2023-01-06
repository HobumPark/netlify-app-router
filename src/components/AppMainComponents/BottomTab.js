
import '../../css/AppMainComponents/BottomTab.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse,faLocationDot,faQrcode,faFolder,faMessage } from "@fortawesome/free-solid-svg-icons";

function BottomTab(){
    const homeSelect=()=>{
        alert('homeSelect!')
        window.location.href='/main/home'
    }
    const locationSelect=()=>{
        alert('locationSelect!')
        window.location.href='/main/location'
    }
    const authSelect=()=>{
        alert('authSelect!')
        window.location.href='/main/auth'
    }
    const collectionSelect=()=>{
        alert('collectionSelect!')
        window.location.href='/main/collection'
    }
    const etcSelect=()=>{
        alert('etcSelect!')
        window.location.href='/main/etc'
    }

    return(
        <div id='bottom-tab'>
            <div id='bottom-tab1' onClick={homeSelect}>
                <FontAwesomeIcon icon={faHouse} size="3x"/>
            </div>
            <div id='bottom-tab2' onClick={locationSelect}>
                <FontAwesomeIcon icon={faLocationDot} size="3x"/>
            </div>
            <div id='bottom-tab3' onClick={authSelect}>
                <FontAwesomeIcon icon={faQrcode} size="3x"/>    
            </div>
            <div id='bottom-tab4' onClick={collectionSelect}>
                <FontAwesomeIcon icon={faFolder} size="3x"/>
            </div>
            <div id='bottom-tab5' onClick={etcSelect}>
                <FontAwesomeIcon icon={faMessage} size="3x"/>
            </div>
        </div>
    )
}

export default BottomTab;