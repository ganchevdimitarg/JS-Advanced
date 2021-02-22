function create(words) {
   let content = document.getElementById('content')
   for (const word of words) {
      let div = document.createElement('div');
      let p = document.createElement('p');
      div.appendChild(p);
      p.style.display = 'none';
      p.textContent = word;
      content.appendChild(div);
   }
   content.addEventListener('click', showString) ;
   function showString(ev) {
      if(ev.target.tagName ==='DIV' || ev.target.tagName ==='P'){
         const p = ev.target.children[0] || ev.target;
         const isVisible = p.style.display === 'block';
         p.style.display = isVisible ? 'none' : 'block';
      }
   }
}


