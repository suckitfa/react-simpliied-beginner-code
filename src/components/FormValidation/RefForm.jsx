import { useRef, useState } from "react"
import { validateEmail, validatePassword } from './validate'

export default function RefForm() {
    const passworRef = useRef(null);
    const emailRef = useRef(null);

    const [emailErrors, setEmailErrors] = useState([])
    const [passwordErrors, setPasswordErrors] = useState([])
    const [isNotFirstSubmit, setIsNotFirstSubmit] = useState(false)
    const handleSubmit = (e) => {
        e.preventDefault()
        setIsNotFirstSubmit(true)

        const emailResult = validateEmail(emailRef.current.value)
        const passwordResult = validatePassword(passworRef.current.value)

        setEmailErrors(emailResult)
        setPasswordErrors(passwordResult)

        if (!emailResult.length && !passwordResult.length) {
            alert('success')
        }
    }

    return (
        <>
            <form className="form" onSubmit={handleSubmit}>
                <div className={`form-group ${emailErrors.length > 0 ? "error" : ""}`}>
                    <label className="label" htmlFor="email">Email</label>
                    <input
                        onChange={
                            isNotFirstSubmit ?
                                e => setEmailErrors(validateEmail(e.target.value))
                                : undefined
                        }
                        ref={emailRef} className="input" type="email" id="email" />
                    {
                        emailErrors.length > 0 ?
                            <div className="msg">{emailErrors.join(' ,')}</div>
                            : ''
                    }
                </div>
                <div className={`form-group ${emailErrors.length > 0 ? "error" : ""}`}>
                    <label className="label" htmlFor="password">Password</label>
                    <input
                        onChange={
                            isNotFirstSubmit ?
                                e => setPasswordErrors(validatePassword(e.target.value))
                                : undefined
                        }
                        ref={passworRef}
                        className="input"
                        type="password"
                        id="password"
                    />
                    {
                        passwordErrors.length > 0 ?
                            <div className="msg">{passwordErrors.join(' ,')}</div>
                            : undefined
                    }
                </div>
                <button className="btn" type="submit">Submit</button>
            </form>
        </>
    )
}