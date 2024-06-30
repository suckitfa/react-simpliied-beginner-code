import { useMemo, useState } from "react"
import { validateEmail, validatePassword } from './validate'
export default function StateForm() {


    const [password, setPassword] = useState()
    const [email, setEmail] = useState()

    const [isNotFirstSubmit, setIsNotFirstSubmit] = useState(false)

    const passwordErrors = useMemo(() => {
        return isNotFirstSubmit ? validatePassword(password) : []
    }, [isNotFirstSubmit, password])

    const emailErrors = useMemo(() => {
        return isNotFirstSubmit ? validateEmail(email) : []
    }, [isNotFirstSubmit, email])

    const handleSubmit = (e) => {
        e.preventDefault()

        setIsNotFirstSubmit(true)

        const emailResult = validateEmail(email)
        const passwordResult = validatePassword(password)

        if (!emailResult.length && !passwordResult.length) {
            alert('Success')
        }
    }
    return <>
        <form className="form" onSubmit={handleSubmit}>
            <div className={`form-group ${emailErrors.length > 0 ? "error" : ""}`}>
                <label className="label" htmlFor="email">Email</label>
                <input className="input" type="email" id="email" value={email} onChange={e => setEmail(e.target.value)} />
                {emailErrors.length > 0 && (<div className="msg">{emailErrors.join(',')}</div>)}
            </div>
            <div className={`form-group ${passwordErrors.length > 0 ? "error" : ""}`}>
                <label className="label" htmlFor="password">Password</label>
                <input
                    className="input"
                    value={password}
                    type="password"
                    id="password"
                    onChange={e => setPassword(e.target.value)}
                />
                {passwordErrors.length > 0 && (<div className="msg">{passwordErrors.join(',')}</div>)}
            </div>
            <button className="btn" type="submit">Submit</button>
        </form>
    </>
}