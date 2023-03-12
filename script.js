let btn = document.querySelector('#btn');
let bdy = document.querySelector("body");
let c = 0;
btn.addEventListener("click", function () {
    if (c % 2 === 0) {
        bdy.style.backgroundColor = "rgb(75, 75, 75)";
        console.log(c);
        c = c + 1;
    }
    else {
        bdy.style.backgroundColor = "rgb(27, 27, 28)";
        console.log(c);
        c = c + 1;
    }

})


const APILINK = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=6b3b29d2079acd46344e9ab8ce42a455&page=1';
const IMG_PATH = "https://image.tmdb.org/t/p/w1280";
const SEARCHAPI = "https://api.themoviedb.org/3/search/movie?&api_key=6b3b29d2079acd46344e9ab8ce42a455&query=";


returndata(APILINK); 
async function returndata(url) {
    // const response = await fetch(url);
    // console.log(response);
    // let data = await response.json();
    // console.log(data.results);
    fetch(url)
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            const res = data.results;
            console.log(res);

            res.forEach(r => {
                
                const outdiv = document.createElement("div");
                const indiv = document.createElement("div");
                const img = document.createElement("img");
                const h3 = document.createElement("h3");

                h3.innerText = `${r.title}`;
                img.src = IMG_PATH + r.poster_path;

                indiv.appendChild(img);
                outdiv.appendChild(indiv);
                outdiv.appendChild(h3);
                bdy.appendChild(outdiv);
                outdiv.setAttribute("id", "content");
                indiv.setAttribute("class", "image");

            })
        })
}

