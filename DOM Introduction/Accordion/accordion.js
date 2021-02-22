function toggle() {
    const btn = document.getElementsByClassName('button')[0];
    const isHidden = document.getElementById('extra');
    if (isHidden.style.display === 'none'){
        isHidden.style.display = 'block';
        btn.textContent = 'Less';
    } else {
        isHidden.style.display = 'none'
        btn.textContent = 'More';
    }
}