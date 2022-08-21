import React,{useState}from 'react';
import '../Join.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import { FcGoogle } from "react-icons/fc";
import { SocialIcon } from 'react-social-icons';
import { Alert } from 'react-bootstrap';
import { Link,useNavigate} from "react-router-dom";
import { useUserAuth } from "../context/UserAuthContext";
import axios from 'axios';

import join from '../join.jpg';

function Bjoin() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [password, setPassword] = useState("");
  const [name, setuname] = useState("");
  const [address, setaddr] = useState("");
  const [phone, setmnum] = useState("");
  const { signUp,signInwG,signInwF } = useUserAuth();
  
  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    
    
    e.preventDefault();
    
    setError("");
    try {
      const register={
      email:email,
      password:password,
      address:address,
      name:name,
      phone:phone,
      }
      axios.post('http://localhost:9999/registerBuyer', register)
            .then(res => console.log(res.data)).then(data => { alert('SignUp SuccessFully') })
      await signUp(email, password);

      navigate("/signin");
    } catch (err) {
      setError(err.message);
    }
  };
  const handleGS = async (e) => {
    e.preventDefault();
    
    setError("");
    try {
      
        await signInwG(email,password);
        
       
          navigate("/signin",{ replace: true });
       
       
      
    } catch (err) {
      
      setError(err.message);
    }
  };

  const handleFS = async (e) => {
    e.preventDefault();
    
    setError("");
    try {
      
        await signInwF();
     
      navigate("/signin");
      
    } catch (err) {
      
      setError(err.message);
    }
  };
  
  return (
   
            <div className='p-5'>
            <div className='bjcont'>
            <div className= "d-flex gap-3 m-5">
            <div>
              <img src={join} width="600px" height="650px" className='sbs'/>
            </div>
            <div className='col-sm-6'>
            {error && <Alert variant="danger">{error}</Alert>}
            <form onSubmit={handleSubmit} className="aform">
            <div>
            <h1 id='jhead'>Join As Buyer</h1>
            <div className='d-flex flex-column gap-2 '>
            <div><Button type="submit" onClick={handleGS} variant="default" id="gbtn" ><span className='ispan'><FcGoogle/></span> Sign Up with Google</Button></div>
            <div><Button type="submit" onClick={handleFS} variant="default" id="fbtn" ><span className='ispan'><SocialIcon network='facebook' style={{ height: 25, width: 25 }}/>
            </span>Sign Up with Facebook</Button></div>
            </div>

            <div id="fsep"><p>OR</p></div>
            </div>
        <div className="mb-3 p-1">
          <input type="text" value={name} className="form-control" placeholder="Enter username" required onChange={(e) => setuname(e.target.value)} />
        </div>

        <div className="mb-3 p-1">
          <input type="email" value={email} className="form-control" placeholder="Enter email address" required onChange={(e) => setEmail(e.target.value)}/>
        </div>

        <div className="mb-3 p-1">
          <input type="number" value={phone} className="form-control" placeholder="Enter your mobile number" required onChange={(e) => setmnum(e.target.value)} />
        </div>

        <div className="mb-3 p-1">
          <input type="text" value={address} className="form-control" placeholder="Enter your address" onChange={(e) => setaddr(e.target.value)}/>
        </div>

        <div className="mb-3 p-1">
          <input type="password"  value={password} className="form-control" placeholder="Enter your password" required onChange={(e) => setPassword(e.target.value)}/>
        </div>
       
        <div className="d-grid ">
          <Button type="submit" variant="default" className="subtn">
            Sign Up
          </Button>
        </div>
        <p className="forgot-password text-center">
          Already registered      <Link to="/signin">  <Button variant="default" id="sibtn" >Sign In?</Button></Link>
        </p>
      </form>
      </div>
            </div>
            </div>
            </div>
          
            
        
  
   
  )
}

export default Bjoin;