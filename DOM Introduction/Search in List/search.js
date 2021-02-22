function search() {
    const towns = document.querySelectorAll('#towns li');
    const search = document.getElementById('searchText').value;
    let count = 0;
    for (const town of towns) {
        if (town.textContent.toLowerCase().includes(search.toLowerCase()) && search !== '') {
            town.style.fontWeight = 'bold';
            town.style.textDecoration  = 'underline';
            count+=1;
        } else {
            town.style.fontWidth = '';
            town.style.textDecoration  = '';
        }
    }

    document.getElementById('result').textContent = `${count} matches found`;

}