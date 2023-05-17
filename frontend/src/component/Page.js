import '../css/reset.css';
import '../css/style.css';
import { NavLink } from 'react-router-dom';
import { Footer, Header } from './Template';

export const LoginPage = () => {

   const handleForm = e => {
      
   }

   const login = e => {

   }

   return (
      <div id="login-container">
         <Header />
         <div id="login-body" className="body-container">
            <div id="login-box" className="body-box">
               <h3>Login</h3>
               <form id="login-form" className="form-box">
                  <div id="login-input" className="input-box">
                     <input type='text' name='username' placeholder='Username' onChange={handleForm} />
                     <input type='password' name='password' placeholder='Password' onChange={handleForm} />
                  </div>
                  <button type='submit' onClick={login}>Sign-in</button>
               </form>
               <p>Don't have an account yet? <NavLink to={'/register'}>Sign-up now</NavLink></p>
            </div>
         </div>
         <Footer />
      </div>
   )
}

export const RegistrationPage = () => {

   const handleRegister = e => {

   }

   const register = e => {

   }

   return (
      <div id="register-container">
         <Header />
         <div id="register-body" className="body-container">
            <div id="register-box" className="body-box">
               <h3>Register</h3>
               <form id="register-form" className="form-box">
                  <div id="register-input" className="input-box">
                     <input type='text' name='firstname' placeholder='First Name' onChange={handleRegister} />
                     <input type='text' name='lastname' placeholder='Last Name' onChange={handleRegister} />
                     <input type='email' name='email' placeholder='Email Address' onChange={handleRegister} />
                     <input type='text' name='username' placeholder='Username' onChange={handleRegister} />
                     <input type='password' name='password' placeholder='Password' onChange={handleRegister} />
                     <input type='password' name='confirmPassword' placeholder='Confirm Password' onChange={handleRegister} />
                  </div>
                  <button type='submit' onClick={register}>Register</button>
               </form>
               <p>Already have an account? <NavLink to={'/'}>Sign-in</NavLink> instead</p>
            </div>
         </div>
         <Footer />
      </div>
   )
}

export const LandingPage = () => {
   return (
      <div id="landing-container">
         <Header />

         <Footer />
      </div>
   )
}