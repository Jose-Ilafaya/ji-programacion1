export default class Anime{
    constructor(){

    }
    async obtenerCatalogo(){
        const datos = await fetch("https://api.jikan.moe/v3/search/anime?q=evangelion")
        const json = await datos.json();
        const catalogo = json.results;
        let array_catalogo= [];
        catalogo.forEach(element => {
            let item = `
            <div class="card col-6 mb-3 mt-3">
                <img src="${element.image_url}" class="card-img-top">
                <div class="card-body">
                    <h5 class="card-title">${element.title}</h5>
                    <p class="card-text">${element.synopsis}</p>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">Episodes ${element.episodes}</li>
                    <li class="list-group-item">Score ${element.score}</li>
                    <li class="list-group-item">Type ${element.type}</li>
                </ul>
            </div>
            `
            array_catalogo.push(item)

        });
        document.getElementById("catalogo").innerHTML = array_catalogo.join('')
    }
}