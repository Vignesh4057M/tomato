import React, { useState } from 'react'
import './LoginPopup.css'
import { assets } from '../../assets/assets'

const LoginPopup = ({ setShowLogin }) => {
  const [currState, setCurrState] = useState("Login")

  const handleSubmit = (e) => {
    e.preventDefault()

    const form = e.target

    // Get stored user
    const storedUser = JSON.parse(localStorage.getItem("user"))

    if (currState === "Sign Up") {
      const name = form[0].value
      const email = form[1].value
      const password = form[2].value

      // Save user in localStorage
      localStorage.setItem(
        "user",
        JSON.stringify({ name, email, password })
      )

      alert("✅ Registration successful. Please login.")
      setCurrState("Login")
      return
    }

    // LOGIN FLOW
    const email = form[0].value
    const password = form[1].value

    if (!storedUser) {
      alert("❌ No account found. Please register first.")
      setCurrState("Sign Up")
      return
    }

    if (
      storedUser.email === email &&
      storedUser.password === password
    ) {
      alert("✅ Login successful")

      // OPTIONAL: admin redirect
      if (email === "admin@gmail.com") {
        window.location.href = "http://localhost:5174/"
      }

      setShowLogin(false)
    } else {
      alert("❌ Invalid email or password")
    }
  }

  return (
    <div className='login-popup'>
      <form onSubmit={handleSubmit} className="login-popup-container">

        <div className="login-popup-title">
          <h2>{currState}</h2>
          <img
            onClick={() => setShowLogin(false)}
            src={assets.cross_icon}
            alt=""
            height={20}
          />
        </div>

        <div className="login-popup-inputs">
          {currState === "Sign Up" && (
            <input type="text" placeholder="your name" required />
          )}
          <input type="email" placeholder="your email" required />
          <input type="password" placeholder="password" required />
        </div>

        <button>
          {currState === "Sign Up" ? "Create account" : "Login"}
        </button>

        <div className='login-popup-condition'>
          <input type="checkbox" required />
          <p>I agree to terms & policy</p>
        </div>

        {currState === "Login" ? (
          <p>
            Create a new account?
            <span onClick={() => setCurrState("Sign Up")}> Click here</span>
          </p>
        ) : (
          <p>
            Already have an account?
            <span onClick={() => setCurrState("Login")}> Login here</span>
          </p>
        )}

      </form>
    </div>
  )
}

export default LoginPopup
