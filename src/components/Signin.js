import React,{useState}from 'react';
import '../Join.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import { FcGoogle } from "react-icons/fc";
import { SocialIcon } from 'react-social-icons';
import {  Alert } from "react-bootstrap";
import { Link,useNavigate} from "react-router-dom";
import { useUserAuth } from "../context/UserAuthContext";
import signin from '../signin.jpg';
function Signin() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [password, setPassword] = useState("");
  const { logIn,signInwG } = useUserAuth();

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await logIn(email, password);
      navigate("/")
      
    } catch (err) {
      setError(err.message);
    }
    
  };
  const handleGS = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signInwG();
      navigate("/");
    } catch (err) {
      setError(err.message);
    }
  };
  
  return (
   
    <div className='p-5'>
            <div className='bjcont'>
            <div className= "d-flex gap-3 m-5">
    
            <div>
              <img src={signin} width="600px" height="540px" className='sbs'/>
            </div>
            <div className= "col-sm-6 ">
            {error && <Alert variant="danger">{error}</Alert>}
            <form onSubmit={handleSubmit} className="aform">
            <div>
            <h1 id='jhead'>Sign In</h1>
            <div className='d-flex flex-column gap-2 '>
            <div><Button onClick={handleGS} variant="default" id="gbtn" ><span className='ispan'><FcGoogle/></span> Sign In with Google</Button></div>
            <div><Button variant="default" id="fbtn" ><span className='ispan'><SocialIcon network='facebook' style={{ height: 25, width: 25 }}/>
            </span>Sign In with Facebook</Button></div>
            </div>

            <div id="fsep"><p>OR</p></div>
            </div>

        <div className="mb-3 p-2">
          <input type="email" className="form-control" placeholder="Enter email address" required onChange={(e) => setEmail(e.target.value)}/>
        </div>


        <div className="mb-3 p-2">
          <input type="password" className="form-control" placeholder="Enter your password" required  onChange={(e) => setPassword(e.target.value)}/>
        </div>
       
        <div className="d-grid p-2">
          
          
          <Button type="submit" variant="default" className="subtn">
            Sign In 
          </Button>
         
        </div>
        <p className="forgot-password text-center">
        <span> <input type="checkbox" style={{width:50}}/>
        Remember Me</span>&nbsp; &nbsp;<Button variant="default" id="sibtn" >Forgot Password?</Button>
        </p>
        <footer>
       <p> Not a member yet? <Link to="/"><Button variant="default" id="jbtn" >Join Now</Button></Link>
        </p>
        </footer>
      </form>
      </div>
            </div>
            </div>
            </div>
            
        
  
   
  )
}

export default Signin;