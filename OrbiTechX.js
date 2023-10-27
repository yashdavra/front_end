function handleSearch() {
    const searchBox = document.querySelector('.search-box input');
    const searchIcon = document.querySelector('.search-box i');

    searchIcon.addEventListener('click', function () {
        const searchTerm = searchBox.value;
        
        alert('You searched for: ' + searchTerm);
    });

  
    searchBox.addEventListener('keyup', function (event) {
        if (event.key === 'Enter') {
            const searchTerm = searchBox.value;
            
            alert('You searched for: ' + searchTerm);
        }
    });
}

document.addEventListener('DOMContentLoaded', handleSearch);
