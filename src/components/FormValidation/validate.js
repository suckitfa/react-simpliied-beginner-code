export const validateEmail = (email) => {
    const emailErrors = []
    if (!email || email.length === 0) {
        emailErrors.push('Email can not be blank.')
    } else {
        if (email.length &&
            !email.endsWith('@webdevsimplified.com')
        ) {
            emailErrors.push('Email must end in @webdevsimplified.com')
        }
    }


    return emailErrors
}


export const validatePassword = (password) => {
    const passwordErrors = []
    if (!password) {
        passwordErrors.push('Required (Cannot be blank)')
    } else {
        if (!password.length >= 10) {
            passwordErrors.push('Must Be 10 characters or longer')
        }

        if (!password.match(/[a-z]/)) {
            passwordErrors.push('Must include a lowercase letter')
        }

        if (!password.match(/[A-Z]/)) {
            passwordErrors.push('Must include an uppercase letter')
        }

        if (!password.match(/[0-9]/)) {
            passwordErrors.push('Must include a number')
        }
    }

    return passwordErrors
}