// Create your variables here
// ==========================================
let numberOfSeasons=6;
let numberOfEpisodes=6;

let NumberOfTotalEpisodes= numberOfEpisodes * numberOfSeasons;


// ==========================================

let paragraph = document.querySelector("#info");
paragraph.innerText = `${numberOfSeasons} seasons, ${numberOfEpisodes} episodes per season, ${NumberOfTotalEpisodes} Total episodes ` ;