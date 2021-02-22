function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);
   const search = document.querySelector('#searchField');
   let rows = document.querySelectorAll("tbody tr");

   function onClick() {
      for (const row of rows) {
         if (row.textContent.toLowerCase().includes(search.value.toLowerCase())) {
            row.setAttribute('class', 'select')
         } else {
            row.removeAttribute('class');
         }

      }
   }
}