import React, { useState, useRef } from "react";
import "./Login.css";
import logo from "../../assets/logo.png";
import { login, signUp } from "../../utils/firebase.js";
import spinner from "../../assets/netflix_spinner.gif";
import { toast } from "react-toastify";
import {Eye} from 'react-bootstrap-icons'

const Login = () => {
  const [signState, setSignState] = useState("Sign In");
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [visibility, setVisibility] = useState(false);

  const passInput = useRef(null);

  const userAuth = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (signState === "Sign In") {
      await login(email, password);
    } else {

      if(!name.trim()){
        toast.error('Please enter your name!')
        setLoading(false)
        return
      }

      const regex =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
      if (!regex.test(password)) {
        toast.error("Please provide a strong password!");
        setLoading(false);
        return;
      }
      await signUp(name, email, password);
    }
    setLoading(false);
  };

  const passwordVisibility = () => {
    setVisibility(!visibility);
    passInput.current.type = visibility ? "password" : "text";
  };

  return loading ? (
    <div className="login-spinner">
      <img src={spinner} alt="" />
    </div>
  ) : (
    <div className="login">
      <img src={logo} alt="" className="login-logo" />
      <div className="login-form">
        <h1>{signState}</h1>
        <form>
          {signState === "Sign Up" ? (
            <input
              type="text"
              placeholder="Your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          ) : null}
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <div className="password-input">
            <input
              type="password"
              ref={passInput}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
           

            <Eye className="password-visible" onClick={passwordVisibility}/>
          </div>

          <button onClick={userAuth} type="submit">
            {signState}
          </button>
          <div className="form-help">
            <div className="remember">
              <input type="checkbox" />
              <label htmlFor="">Remember Me</label>
            </div>
            <p>Need Help?</p>
          </div>
        </form>
        <div className="form-switch">
          {signState === "Sign Up" ? (
            <p>
              Already have account?{" "}
              <span onClick={() => setSignState("Sign In")}>Sign In</span>
            </p>
          ) : (
            <p>
              Don't have an have account?{" "}
              <span onClick={() => setSignState("Sign Up")}>Sign Up Now</span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
