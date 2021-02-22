function lockedProfile() {
    const btns = document.getElementsByTagName('button');
    const radios1 = document.getElementsByName('user1Locked');
    const radios2 = document.getElementsByName('user2Locked');
    const radios3 = document.getElementsByName('user3Locked');
    for (const btn of btns) {
        btn.addEventListener('click', showHideInfo);
    }
    function showHideInfo(ev) {
        let user1 = document.getElementById('user1HiddenFields');
        let user2 = document.getElementById('user2HiddenFields');
        let user3 = document.getElementById('user3HiddenFields');


        view(ev, user1, radios1);
        view(ev, user2, radios2);
        view(ev, user3, radios3);
    }

    function view(event, user, radios) {
        let isDisplay = user.style.display === 'block';
        let isChecked = radios[1].checked;
        if (isChecked) {
            user.style.display = isDisplay ? 'none' : 'block';
            event.target.textContent = isDisplay ? 'Show more' : 'Hide it';
        }
    }
}

// function lockedProfile() {
//     document.getElementById('main').addEventListener('click', (ev) => {
//         if (ev.target.tagName === 'BUTTON'){
//             const profile = ev.target.parentNode;
//             const isLock = profile.querySelector('input[type=radio]:checked').value === 'lock';
//
//             if (isLock){
//                 return;
//             }
//             let div = profile.querySelector('div');
//             let isVisible = div.style.display === 'block';
//             div.style.display = isVisible ? 'none' : 'block';
//
//             ev.target.textContent = !isVisible ? 'Hide it' : 'Show more'
//         }
//     });
// }