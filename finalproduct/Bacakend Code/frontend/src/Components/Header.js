import React,{useState} from 'react'
import '../Styles/Header.css'
import Modal from 'react-modal';
import FacebookLogin from 'react-facebook-login'
import GoogleLogin from 'react-google-login'

const modalStyle={
    content:{
        top:'50%',
        left:'50%',
        right:'auto',
        bottom:'auto',
        width:'600px',
        marginRight:'-50%',
        tranform:'translate(-50%,-50%)'
    }
}

Modal.setAppElement('#root')
export default function Header() {
   const [isLoginModalOpen, setIsLoginModalOpen] = useState(false)

   const facebookLogin= (response) => {
    console.log(response);
  }

  const googleLogin=(response) => {
    console.log(response);
  }

    return (
        <div className="header">
                <div className="s-logo">
                    <span>e!</span>
                </div>
                <div className="btn-group login-block">
                    <span className="login" onClick={()=>setIsLoginModalOpen(true)}>LogIn</span>
                    <span className="signUp">Create an account</span>
                </div>
                <Modal isOpen={isLoginModalOpen} style={modalStyle}>
                  <h2>
                    Login
                    <button onClick={()=>setIsLoginModalOpen(false)} className="btn btn-outline-danger float-end">X</button>
                  </h2>
                  <form>
                    <div>
                        <div>
                          <input placeholder='email' type="email" className='forrm-control'/>
                        </div>
                        <div>
                        <input placeholder='password' type="password" className='forrm-control'/>
                        </div>
                        <div className='text-center'>
                            <button>Login</button>
                        </div>
                    </div>
                  
                  <div className="mt-4">
                  <FacebookLogin
                    appId="1348620152255555"
                    autoLoad={true}
                    fields="name,email,picture"
                    callback={facebookLogin()} 
                    cssClass="btnFacebook"
                    icon="fa-facebook"
                    textButton = "&nbsp;&nbsp;Sign In with Facebook"                                                                
      
                    />

                    <GoogleLogin
                        clientId="899176143197-30k4f0jmmfvpsnbsfulino49b5stit85.apps.googleusercontent.com"
                        buttonText="Continue with Google"
                        onSuccess={googleLogin()}
                        onFailure={googleLogin()}
                        cookiePolicy={'single_host_origin'}
                        className="btnGoogle"
                    />
                  </div>
                  </form>
                </Modal>
                
        </div>
    )
}
