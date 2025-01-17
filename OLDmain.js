/**
 *
 * I love a margarita, and for some years now I've been trying to drink one in as many parts of the world as I can.
 * 
 * Sometimes I get a bit tipsy and forget where I've been.
 * 
 * Your task is, for any given position on a world map (represented by latitude and longitude), to remind me when I was nearest to that spot with a margarita in my hand.
 * 
 * Write a function that returns the date, as a string in the format yyyy-mm-dd, of the nearest margarita 
 * 
 * 
 * 
 * 
 * Some examples:
 * 
 * getDateOfNearestMargarita(STUFFHERE, STUFFHERE, logbook) should return 20170402, because that was the date I had a margarita in Jerusalem
 *  
 * 
 *  
 * 
 * 
 * 
 * 
 * 
 * 
 */
// export function getDateOfNearestMargarita(longitute, latitude, logbook) {
//     // start shaking!
// }


// I love a margarita, and for some years now I've been trying to drink one in as many parts of the world as I can.
// I want to identify the weak spots in my global margarita coverage, so I can plan my next holiday accordingly.
// Your task is to calculate the "Margarita Proximity" for any given position on a world map (represented by latitude and longitude)
// Write a function that returns the distance (units??) from the point provided to the nearest margarita recorded in my margarita logbook
// export function calculateMargaritaProximity(longitute, latitude, logbook) {
//     // get shaking!
// }


/*
Jerusalem 
GPS Latitude Ref - North
GPS Latitude - 31 deg 46' 52.89"
GPS Longitude Ref - East
GPS Longitude - 35 deg 13' 9.77"

Ukraine
GPS Version ID - 2.3.0.0
GPS Latitude Ref - North
GPS Latitude - 50 deg 27' 5.26"
GPS Longitude Ref - East
GPS Longitude - 30 deg 30' 45.14"



export function findBarOfMargaritaNearestInTime(dateString, logbook = margarita_log) {
    const dateProvided = new Date(dateString);

    let shortestTimeBetween = Infinity;
    let bar, rating, tiedBar, tiedRating;
    for (let entry of logbook) {
        console.log('\n');
        console.log(`Looking at the entry for ${entry.bar}`);
        const dateAtThisBar = new Date(entry.date);
        const timeBetween = Math.abs(dateProvided - dateAtThisBar)/(1000*60*60*24);
         console.log(`shortestTimeBetween is ${shortestTimeBetween}`);
        console.log(`this timeBetween is ${timeBetween}`);
       
        
        if (timeBetween === shortestTimeBetween) {
            console.log(`We have a new equal shortest!`)
            console.log(`Setting tiedBar to ${entry.bar}`);
            tiedBar = entry.bar;
            tiedRating = entry.rating;
        }

        if (timeBetween < shortestTimeBetween) {
            console.log(`We have a new shortest!`)
            console.log(`Setting bar to ${entry.bar}`);
            shortestTimeBetween = timeBetween;
            bar = entry.bar;
            rating = entry.rating;
        } 
    }
    //I would expect this to give the wrong answer for an interim tie, but it doesn't??
    console.log(`The tied bar is ${tiedBar} with a rating of ${tiedRating}`);
    if (tiedBar && tiedRating > rating) {
        console.log(`The tied bar wins!`)
        return tiedBar;
    } else {
        console.log(`Bar ${bar} wins!`);
        return bar;
    }
}
   