function validate() {
    let email = document.getElementById('email');
    const pattern = /^\w+@\w+.\w+$/gm;
    email.addEventListener('change', ()=>{
        if (!pattern.test(email.value)){
            email.classList.add('error');
        } else {
            email.removeAttribute('class');
        }
    });
}