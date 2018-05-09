targetNumber = 0
totalScore = 0;
wins = 0;
losses = 0;
var redCrystalValue;
var blueCrystalValue;
var yellowCrystalValue;
var greenCrystalValue;

//random number function
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//set target-number
function setTargetNumber() {
    targetNumber = getRandomNumber(19, 120);
    $('#target-number').html(targetNumber)
}
setTargetNumber();

//reset crystal values
function resetCrystalValues() {
    redCrystalValue = getRandomNumber(1, 12);
    blueCrystalValue = getRandomNumber(1, 12);
    yellowCrystalValue = getRandomNumber(1, 12);
    greenCrystalValue = getRandomNumber(1, 12);
    while (blueCrystalValue === redCrystalValue) {
        blueCrystalValue = blueCrystalValue = getRandomNumber(1, 12);
    }
    while (yellowCrystalValue === redCrystalValue || yellowCrystalValue === blueCrystalValue) {
        yellowCrystalValue = yellowCrystalValue = getRandomNumber(1, 12);
    }
    while (greenCrystalValue === redCrystalValue || greenCrystalValue === blueCrystalValue || greenCrystalValue === yellowCrystalValue) {
        greenCrystalValue = greenCrystalValue = getRandomNumber(1, 12);
    }
}

resetCrystalValues();

//red crystal click
$('#crystal-red').click(function() {
    totalScore += redCrystalValue;
    $('#total-score').html(totalScore);

    if (totalScore === targetNumber) {
        wins += 1;
        $('#win-count').html(wins);
        resetCrystalValues();
        setTargetNumber();
        totalScore = 0;
        $('#total-score').html(totalScore);
    }

    if (totalScore >= targetNumber) {
        losses += 1;
        $('#loss-count').html(losses);
        resetCrystalValues();
        setTargetNumber();
        totalScore = 0;
        $('#total-score').html(totalScore);
    }
})

//blue crystal click
$('#crystal-blue').click(function() {
    totalScore += blueCrystalValue;
    $('#total-score').html(totalScore);

    if (totalScore === targetNumber) {
        wins += 1;
        $('#win-count').html(wins);
        resetCrystalValues();
        setTargetNumber();
        totalScore = 0;
        $('#total-score').html(totalScore);
    }

    if (totalScore >= targetNumber) {
        losses += 1;
        $('#loss-count').html(losses);
        resetCrystalValues();
        setTargetNumber();
        totalScore = 0;
        $('#total-score').html(totalScore);
    }
})

//yellow crystal click
$('#crystal-yellow').click(function() {
    totalScore += yellowCrystalValue;
    $('#total-score').html(totalScore);

    if (totalScore === targetNumber) {
        wins += 1;
        $('#win-count').html(wins);
        resetCrystalValues();
        setTargetNumber();
        totalScore = 0;
        $('#total-score').html(totalScore);
    }

    if (totalScore >= targetNumber) {
        losses += 1;
        $('#loss-count').html(losses);
        resetCrystalValues();
        setTargetNumber();
        totalScore = 0;
        $('#total-score').html(totalScore);
    }
})

//green crystal click
$('#crystal-green').click(function() {
    totalScore += greenCrystalValue;
    $('#total-score').html(totalScore);

    if (totalScore === targetNumber) {
        wins += 1;
        $('#win-count').html(wins);
        resetCrystalValues();
        setTargetNumber();
        totalScore = 0;
        $('#total-score').html(totalScore);
    }

    if (totalScore >= targetNumber) {
        losses += 1;
        $('#loss-count').html(losses);
        resetCrystalValues();
        setTargetNumber();
        totalScore = 0;
        $('#total-score').html(totalScore);
    }
})




