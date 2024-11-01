function changeReadMore() {
    const mycontent =
        document.getElementById('mybox1id');
    const mybutton =
        document.getElementById('mybuttonid');

    if (mycontent.style.display === 'none'
        || mycontent.style.display === '') {
        mycontent.style.display = 'block';
        mybutton.textContent = 'Read Less';
    } else {
        mycontent.style.display = 'none';
        mybutton.textContent = 'Read More';
    }
}

