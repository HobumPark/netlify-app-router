
import '../css/Login.css'

function Login(){

    const loginCheck=(e)=>{
        e.preventDefault()
        alert('로그인 확인')
        window.location.href='/main'
    }

    return(
        <div id='login'>
            <form id='login-form'>
                <input type='text' placeholder='아이디를 입력하세요'/><br/>
                <input type='password' placeholder='비밀번호를 입력하세요'/><br/>
                <input type='submit' value='로그인' onClick={loginCheck}/>
            </form>
        </div>
    )
}

export default Login;