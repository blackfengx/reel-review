import React,{useState} from 'react'

export default function SignUp() {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleFirstNameChange = (event) => {
        setFirstName(event.target.value)
    }

    const handleLastNameChange = (event) => {
        setLastName(event.target.value)
    }

    const handleUsernameChange = (event) => {
        setUsername(event.target.value)
    }

    const handleEmailChange = (event) => {
        setEmail(event.target.value)
    }

    const handlePasswordChange = (event) => {
        setPassword(event.target.value)
    }





  return (
    <div>
        <div className="form-floating mb-3">
            <input onChange={handleFirstNameChange} value={firstName} placeholder="Enter your first name" required type="text" name="firstName" id="firstName" className="" />
            <label htmlFor="firstName">First Name</label>
        </div>
        <div className="form-floating mb-3">
            <input onChange={handleLastNameChange} value={lastName} placeholder="Enter your last name" required type="text" name="lastName" id="lastName" className="" />
            <label htmlFor="lastName">Last Name</label>
        </div>
        <div className="form-floating mb-3">
            <input onChange={handleUsernameChange} value={username} placeholder="Enter your desired username" required type="text" name="username" id="username" className="" />
            <label htmlFor="username">Username</label>
        </div>
        <div className="form-floating mb-3">
            <input onChange={handleEmailChange} value={email} placeholder="Enter your email" required type="text" name="email" id="email" className="" />
            <label htmlFor="email">E-Mail</label>
        </div>
        <div className="form-floating mb-3">
            <input onChange={handlePasswordChange} value={password} placeholder="Enter your desired password" required type="password" name="password" id="password" className="" />
            <label htmlFor="password">Password</label>
        </div>
    </div>
  )
}
