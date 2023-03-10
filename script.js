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



let apikey = "6b3b29d2079acd46344e9ab8ce42a455";
let url = "https://api.themoviedb.org/3/movie/550?api_key=6b3b29d2079acd46344e9ab8ce42a455"

async function getData(url) {
    const response = await fetch(url);
    console.log(response);
    let data = await response.json();
    console.log(data);
}

getData(url);