import margarita_log from "./margarita_log.json" with {type: json} 

/**
 * 
 * I love a margarita, and for some years now I've been rating the various specimens I've sampled in different bars.
 * 
 * Life's too short for bad margaritas, so I'd like some help remembering where the good ones came from.
 *
 * Your task is, given the names of two bars, to tell me whether the first bar has better margaritas than the second bar, based on my ratings.
 * You can assume I have never visited a bar more than once. (It's not true, but you can assume it.)
 * If the two bars are equally good, neither bar should be considered better.
 * You will never be asked about a bar I've never been to, or that I've failed to rate.
 * 
 * Your function should return a boolean. 
 * You will need the information provided in my margarita logbook. This is an array of entry objects, each of which has three properties: "date", "bar" and "rating".
 */

export function barOneHasBetterMargaritasThanBarTwo(bar1, bar2, logbook = margarita_log) {
    // start shaking!! 
 }
