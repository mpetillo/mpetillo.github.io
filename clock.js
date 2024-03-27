//returns array of positions starting with hand one, hours on the clockface, and number of hands on the clock
function getRandomNumber(x, skipBy) {
    return 1 + Math.floor(Math.random() * Math.floor(x / skipBy)) * skipBy;
}

function hands(numhands, numhours, movementplans){
    let positions = [];
    console.log(numhands, numhours, movementplans)
    for (let i = 0; i < numhands; i++) {
        positions.push(getRandomNumber(numhours, 1));
    }
    let initialState = [...positions];
    for (let numrepeats = 0; numrepeats < getRandomNumber(10, 1); numrepeats++){
        for (let i = 0; i < numhands; i++){
            for (let j = i; j < numhands; j++){
                initialState[i] -= movementplans[j][i];
                if (initialState[i] <= 0) initialState[i] += numhours
            }
        }
    }
    return {
        fpositions: positions,
        ipositions: initialState
    }
}

function clockdevelopment(difficulty){
    let clockhours; let clockhands; var movementplans;
     //movementplans should move from the lowest forward (for example 1, 12, 123, etc)
    if (difficulty < 1.0){
        clockhours = 8; clockhands = 1; movementplans = [[1]];
    }
    else if (difficulty < 2.0){
        clockhours = 8; clockhands = 2; movementplans = [[4], [2, 4]];
    }
    else if (difficulty < 3.0){
        clockhours = 8; clockhands = 2; movementplans = [[2], [1,2]];
    }
    else if (difficulty < 4.0){
        clockhours = 12; clockhands = 2; movementplans = [[6], [3,6]];
    }
    else if (difficulty < 5.0){
        clockhours = 12; clockhands = 2; movementplans = [[2], [1,2]];
    }
    else if (difficulty < 6.0){
        clockhours = 8; clockhands = 3; movementplans = [[4], [2,4], [1,2,4]];
    }
    else if (difficulty < 7.0){
        clockhours = 12; clockhands = 3; movementplans = [[6], [3,6], [1,3,6]];
    }
    else if (difficulty < 8.0){
        clockhours = 12; clockhands = 3; movementplans = [[3], [2,3], [1,2,3]];
    }
    else if (difficulty < 9.0){
        clockhours = 12; clockhands = 4; movementplans =[[6], [3,6], [2,3,6], [1,2,3,6]];
    }

    
    const temp = hands(clockhands, clockhours, movementplans)
    return {
        finalpositions: temp.fpositions,
        initpositions: temp.ipositions,
        hours: clockhours, 
        hands: clockhands,
        movementlist: movementplans
    }; 
}
//so this *should* generate positions starting with hand one, and moving forward
function generateButtons(){
    content = ''
    for (let i = 0.9; i < 9.0; i += 1){
        content += `
        <button type="button" onclick="generate_scenario(${i})"> Difficulty ${i}</button>`
    }
    document.getElementById("buttons").innerHTML = content;
}


//...so matthew needed to write some shit out to figure out the code. 
//ignore everything below. i needed it to process my thoughts. it worked!

//FIVE POSSIBILITIES
//8 hours, 1 hand - 0 <= x < 2
//8 hours, 2 hands - 2 <= x < 4
//8 hours, 3 hands = 4 <= x < 5.5
//12 hours, 2 hands 5.5 <= x < 7
//12 hours, 3 hands 7 <= x <= 8.9
//12 hours, 4 hands 9 <= x
//We worry up to 8.9
//2.0 is normal
//One hand - hand can move one hour
//two hands easy - hand one can move a half of the clock, hand two moves a half of the clock and moves hand one a quarter of the clock
//two hands hard - hand one can move a quarter of the clock, hand two moves a quarter of the clock and moves hand one an hour
//three hands eight hours/three hands twelve hours easy - hand one can move a half of the clock, hand two can move a half and moves hand one a quarter, hand three moves a half, moves hand two a quarter, and moves hand one one hour
//three hands twelve hours hard - hand one can move a quarter of the clock, hand two can move three hours and move hand one two hours, and hand three can move three hours, move hand two hours, and move hand one one hour
//four hands - hand one can move half the clock, hand two can move half and move hand one a quarter, hand three can move half, move hand two a quarter, and move hand three two hours, hand four moves half, moves hand three a quarter, moves hand two two hours, and moves hand one one hour.
//hand one - 2/4/6/8, 1-8, 3/6/9/12, 1-12
//hand two - 4/8, 2/4/6/8, 6/12, 3/6/9/12, 1-12
//hand three - 4/8, 6/12, 3/6/9/12
//hand four - 6/12

//one hand - hand one[1..8]
//two hand eight hours easy - hand one[2,4,6,8], hand two[4,8]
//two hand eight hours hard - hand one[1..8], hand two[2,4,6,8]
//two hand twelve hours easy - hand one[3,6,9,12], hand two[6,12]
//two hand twelve hours hard - hand one [1..12], hand three[3,6,9,12]
//three hand eight hours - hand one[1..8], hand two[2,4,6,8], hand three[4,8]
//three hand twelve hour easy - hand one[1..12], hand two[3,6,9,12], hand three[6,12]
//three hand twelve hour hard - hand one[1..12], hand two[1..12], hand three [3,6,9,12]
//four hand twelve hour - hand one [1..12], hand two [1..12], hand three [3,6,9,12], hand four [6,12]
//so what it looks like is we need to allow for an optional skip