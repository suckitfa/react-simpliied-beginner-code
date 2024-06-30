import { useState } from "react"
import { validateEmail, validatePassword } from './validate'
export default function StateForm() {


    const [password, setPassword] = useState()
    const [email, setEmail] = useState()
    const [emailErrors, setEmailErrors] = useState([])
    const [passwordErrors, setPasswordErrors] = useState([])

    const [isFirstSubmit, setIsFirstSubmit] = useState(true)

    const handleSubmit = (e) => {
        e.preventDefault()
        setIsFirstSubmit(false)
        setEmailErrors(validateEmail(email))
        setPasswordErrors(validatePassword(password))
        if (!emailErrors.length && !passwordErrors.length) {
            alert('Success')
        }
    }
    return <>
        <form className="form" onSubmit={handleSubmit}>
            <div className={`form-group ${emailErrors.length > 0 ? "error" : ""}`}>
                <label className="label" htmlFor="email">Email</label>
                <input className="input" type="email" id="email" value={email} onChange={e => {
                    setEmail(e.target.value)
                    !isFirstSubmit && setEmailErrors(validateEmail(email))
                }} />
                {emailErrors.length > 0 && (<div className="msg">{emailErrors.join(',')}</div>)}
            </div>
            <div className={`form-group ${passwordErrors.length > 0 ? "error" : ""}`}>
                <label className="label" htmlFor="password">Password</label>
                <input
                    className="input"
                    value={password}
                    type="password"
                    id="password"
                    onChange={e => {
                        setPassword(e.target.value)
                        !isFirstSubmit && setPasswordErrors(validatePassword(password))
                    }}
                />
                {passwordErrors.length > 0 && (<div className="msg">{passwordErrors.join(',')}</div>)}
            </div>
            <button className="btn" type="submit">Submit</button>
        </form>
    </>
}