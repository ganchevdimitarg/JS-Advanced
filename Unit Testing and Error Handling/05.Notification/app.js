function notify(message) {
  let notification = document.getElementById('notification');
  notification.textContent = message;
  notification.style.display = 'block';
  notification.addEventListener('click', (ev => ev.target.style.display = 'none'));

}