const API_URL = 'https://thatcopy.pw/catapi/rest/';

const btn = document.getElementById('change-cat');
const img = document.getElementById('cat-img');

//acessando a API
const getCat = async () => {
    const data = await fetch(API_URL)
    .then(res => res.json())
    .catch(e => {if(e){ alert(`Erro: ${e}`); }});

    return data.webpurl;
}

/* acessar a API a cada click de botao */

const loadImg = async () => {
    img.src = await getCat(); 
}

btn.addEventListener('click', loadImg);

/* acessar a API a cada click de botao */


//acessar a API logo quando a pagina carrega
loadImg();