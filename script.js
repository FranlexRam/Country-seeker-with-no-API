document.addEventListener('keyup', e =>{
    if (e.target.matches('#buscador')) {
        document.querySelectorAll('.paises').forEach(pais => {
            pais.textContent.toLowerCase().includes(e.target.value) ? pais.classList.remove('filtro') : pais.classList.add('filtro');
        });        
    }
});