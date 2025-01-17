import margarita_log from "./margarita_log.json" with {type: json} 

/**
 *
 * I love a margarita, and for some years now I've been keeping a log of the various specimens I've sampled in different bars.
 *
 * Your task is, for any given date, to find which bar I was drinking a margarita in on the closest date to the given date, ie the fewest days away.
 * If there is a tie, give me the name of the bar that served me the tastier margarita of the two (the one I gave the higher rating to).
 * You can assume I never drink more than one margarita per day. (It's not true, but you can assume it.)
 *
 * The date will be a valid date provided as a string in the format YYYY-MM-DD. You don't need to worry about time of day or timezones.
 * Your function should return the name of the bar as a string.
 *
 * You will need the information provided in my margarita logbook. This is an array of entry objects, each of which has three properties: "date", "bar" and "rating".
 * 
 * HINT: Date arithmetic is hard! Don't try to do it all yourself... 
 */

export function findBarOfMargaritaNearestInTime(dateString, logbook = margarita_log) { 
    const dateProvided = new Date(dateString);
    for (let entry of logbook) {
        entry.daysFromDateProvided = Math.abs(dateProvided - new Date(entry.date)) / (1000 * 60 * 60 * 24);
    }
    logbook.sort((a, b) => a.daysFromDateProvided - b.daysFromDateProvided);
    if (logbook[1].daysFromDateProvided === logbook[0].daysFromDateProvided
        && logbook[1].rating > logbook[0].rating) {
        return logbook[1].bar;
    }
    return logbook[0].bar;
}

