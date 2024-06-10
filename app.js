/* let score = 0; */

let homeScore = 0;
let awayScore = 0;

updateHomeScoreboard();
updateAwayScoreboard();

/* function addScoreByOne() {
    score += 1;
    console.log('This adds one point to the score', score);
    updateHomeScoreboard();
    updateAwayScoreboard();
}

function subtractScoreByOne() {
    score -= 1;
    console.log('This subtracts one point from the score', score);
    updateHomeScoreboard();
    updateAwayScoreboard();
} */

function addHomeScoreByOne() {
    homeScore += 1;
    // console.log('This adds one point to the score', homeScore);
    updateHomeScoreboard();
}

function subtractHomeScoreByOne() {
    homeScore -= 1;
    // console.log('This subtracts one point from the score', homeScore);
    updateHomeScoreboard();
}

function addAwayScoreByOne() {
    awayScore += 1;
    // console.log('This adds one point to the score', awayScore);
    updateAwayScoreboard();
}

function subtractAwayScoreByOne() {
    awayScore -= 1;
    // console.log('This subtracts one point from the score', awayScore);
    updateAwayScoreboard();
}

function updateHomeScoreboard() {
    const homeScoreElem = document.getElementById('homeScore');
    // console.log('Did we change the home score', homeScoreElem);
    if (homeScore < 0) {
        throw new Error("Score can't be negative")
    }
    homeScoreElem.innerText = homeScore;
    declareWinner();
}

function updateAwayScoreboard() {
    const awayScoreElem = document.getElementById('awayScore');
    // console.log('Did we change the away score', awayScoreElem);

    if (awayScore < 0) {
        throw new Error("Score can't be negative")
    }
    awayScoreElem.innerText = awayScore;
    declareWinner();
}

function declareWinner() {
    if (homeScore >= 11 || awayScore >= 11){
        homeScore = 0;
        awayScore = 0;
        window.alert("We have a winner!!!");
        updateAwayScoreboard();
        updateHomeScoreboard();
    }
}