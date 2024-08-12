const allPCards = document.querySelectorAll('.cards .card > p');
const allCards = document.querySelectorAll('.cards .card');



allPCards.forEach( p => {
    p.setAttribute('element-height' , p.offsetHeight);
    p.style.height = '0px';
    if (document.querySelector('table') != null) {
        document.querySelector('table').style.display = 'none';
    }
})

document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', () => {
        if (card.querySelector('p ').style.height != `0px`) {
            card.querySelector('p ').style.height = 0;
            document.querySelector('table').style.display = 'none';
        } else {
            card.querySelectorAll('p , table').forEach(p => {
                p.style.height = p.getAttribute('element-height') + 'px';
                if (p.style.display == 'none') {
                    document.querySelector('table').style.display = 'table';
                }
            })
        }
    })
})