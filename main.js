// async function doFetch(){
//     try {
//         disabledBtn1.disabled = true;
//         loader.innerHTML = "<img src = 'loading-gif-1.png'>";
//         return await fetch("https://moviesmern.herokuapp.com/movies/all")
//         .then(response=>console.log(response));
//     }
//     catch (error) {
//         console.log("error");
//     }
//     finally{
//         disabledBtn1.disabled= false;
//         loader.innerHTML = "<img src ='loading-gif-1.png'";
//     }
// }


// async function makeFetchToAddress(){
//     try{
//         disabledBtn2.disabled = true;
//         loading_div.innerHTML = "<img src = 'https://cssbud.com/wp-content/uploads/2021/08/wave-spinner.gif' />"
//         return await fetch("https://cat-fact.herokuapp.com/facts")
//         .then(res=>console.log(res));
//     }
//     catch(error){
//         console.log("error");
//     }
//     finally{
//         disabledBtn2.disabled= false;
//         loading_div.innerHTML = "<img src = 'https://cssbud.com/wp-content/uploads/2021/08/wave-spinner.gif'/>"
//     }
// }


// async function makeingFetch(){
//     try{
//         disabledBtn3.disabled = true;
//         load_id.innerHTML = "<img src = 'https://memeguy.com/photos/images/-first-gif-i-ever-createdused-it-as-part-of-a-loading-screen-for-a-class-a-while-back-6545.gif'"
//         return await fetch("https://placekeanu.com/200/150")
//         .then(res => div_id.innerHTML = res);
//     }
//     catch(error){
//         console.log("error");
//     }
//     finally{
//         disabledBtn3.disabled = false;
//         load_id.innerHTML = "<img src = 'https://memeguy.com/photos/images/-first-gif-i-ever-createdused-it-as-part-of-a-loading-screen-for-a-class-a-while-back-6545.gif'"

//     }
// }

async function printData(){
    try {
        disabledBtn4.disabled = true;
        loadingId.innerHTML = "<img src = 'https://digitalmonkeynl.github.io/FB-Docs/2.0.2/img/form/loading.gif'"
        return await fetch("https://api.jikan.moe/v4/anime")
        .then(response => response.json());
    }   
    catch (error) {
        console.log(error);
    }
    finally{
        disabledBtn4.disabled = false;
        loadingId.innerHTML = "<img src = 'https://digitalmonkeynl.github.io/FB-Docs/2.0.2/img/form/loading.gif'"

    }
}
printData()
.then(res => res.data)












// async function getData() {
//     try {
//         return await fetch("https://moviesmern.herokuapp.com/movies/all")
//             .then(response => response.json());
//     }
//     catch (error) { }
//     finally { }
// }

// function printToScreen() {
//     getData()
//         .then(result => {
//             result.data.forEach(item =>
//                 moviesList.innerHTML += `<li>${item.movieName}</li> <li><img width:10px; height:10px; src='${item.image}'/></li>`
//             )
//         })
// }

// async function getMovie() {
//     const data = {
//         movie: {
//             image: ImageInput.value,
//             linkToMovie: linkMovieInput.value,
//             movieName: movieNameInput.value,
//             rating: ratingInput.value,
//             synopsis: synopsisInput.value
//         }
//     }
//     try {
//         await fetch("https://moviesmern.herokuapp.com/movies/saveMovie",
//             {
//                 method: "POST",
//                 body: JSON.stringify(data),
//                 headers: {
//                     'Content-Type': 'application/json'
//                 }
//             }
//         )
//     }
//     catch (error) { }
//     finally { }
// }

// function showMovieByName() {
//    try{
//        moviesList.innerHTML = "";
//        clickShow.disabled = true;
//        loading.innerHTML = "<img style = 'width:20vw' src='loading-gif-1.png'/>"
//        getMovie()
//            .then((result) => {
//                result.data.forEach(movieItem =>
//                    movieList.innerHTML += `<li>${movieItem.movieName}</li>`)
//            })
//    }
//    catch(error){console.log(error);}
//    finally{
//     clickShow.disabled = false;
//     loading.innerHTML = ""
//    }
// }

// async function getCityWether(cityName) {
//     const API_KEY = "4ead01ae801c0d4d282ab045ee0e1abf";
//     const BASIC_API = "https://api.openweathermap.org/data/2.5/";
//     try {
//         return await fetch(`${BASIC_API}weather?q=${cityName}&appid=${API_KEY}`)
//             .then(result => result.json());
//     }
//     catch (error) { }
//     finally { }
// }
// function writeCityName() {
//     const cityName = cityNameSelect.value;
//     result_div.innerHTML = "";
    
//     getCityWether(cityName).then(res => console.log(res));
// }