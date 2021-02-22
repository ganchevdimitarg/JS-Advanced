function validate() {
    const username = document.getElementById('username');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirm-password');
    const company = document.getElementById('company');
    const companyInfo = document.getElementById('companyInfo');
    const companyNumber = companyInfo.querySelector('input[id="companyNumber"]');
    const valid = document.getElementById('valid');

    document.getElementById('submit').addEventListener('click', validateForm);
    company.addEventListener('change',()=>{
        companyInfo.style.display = company.checked?'block':'none';
    })

    function validateForm(ev) {
        ev.preventDefault();
        let isValidUsername = true;
        let isValidEmail = true;
        let isValidPassword = true;
        let isValidConfirmPassword = true;
        let isValidCompanyNumber = true;
        const validForm = {
            username: (username) => {
                const valid = /^[A-Za-z0-9]{3,20}$/;
                const m = !valid.test(username.value);
                if (!valid.test(username) || username.value.length < 3 || username.value.length > 20) {
                    username.style.borderColor = 'red';
                    isValidUsername = false;
                    return;
                }
                username.style.border = 'none';
                isValidUsername = true;
            },
            password: (password) => validatePassword(password),
            confirmPassword: (confirmPassword) => validatePassword(confirmPassword),
            matchPass: (password, confirmPassword) => {
                if (password.value !== confirmPassword.value || password.value.length === 0 || confirmPassword.value.length === 0) {
                    password.style.borderColor = 'red';
                    confirmPassword.style.borderColor = 'red';
                    isValidPassword = false;
                    return;
                }
                validForm.password(password, isValidPassword);
                validForm.confirmPassword(confirmPassword, isValidConfirmPassword);
            },
            email: (email) => {
                const allowedChar = /@./;
                if (!allowedChar.test(email.value)) {
                    email.style.borderColor = 'red';
                    isValidEmail = false;
                    return;
                }
                email.style.border = 'none';
                isValidEmail = true;
            },
            company: (company) => {
                if (!company.checked) {
                    companyInfo.style.display = 'none';
                    isValidCompanyNumber = false;
                    return;
                }
                companyInfo.style.display = 'inline';
                if (companyNumber.value < 1000 || companyNumber.value > 9999) {
                    companyNumber.style.borderColor = 'red';
                    isValidCompanyNumber = false;
                    return;
                }
                companyNumber.style.border = 'none';
                isValidCompanyNumber = true;
            }
        }
        validForm.company(company);
        validForm.username(username);
        validForm.email(email);
        validForm.matchPass(password, confirmPassword);
        if(isValidUsername && isValidEmail &&  isValidPassword && isValidConfirmPassword && !company.checked) {
            valid.style.display = 'block';
        } else if (isValidUsername && isValidEmail &&  isValidPassword && isValidConfirmPassword && company.checked && isValidCompanyNumber) {
            valid.style.display = 'block';
        } else {
            valid.style.display = 'none';
        }
    }

    function validatePassword(pass, isValid) {
        const allowedChar = /[a-z0-9_]+/;

        if (!pass.value.match(allowedChar) || pass.value.length < 5 || pass.value.length > 15) {
            pass.style.borderColor = 'red';
            isValid = false;
            return;
        }
        pass.style.border = 'none';
        isValid = true;
        return isValid;
    }
}
