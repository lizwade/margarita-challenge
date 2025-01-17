import { test, it, expect } from "vitest";

import { barOneHasBetterMargaritasThanBarTwo } from "./main.js";

test("barebones", () => {});

test.for([
  ["Dalston Superstore", "The Bell", true],
  ["The Goose", "Bargo", false],
])("Straightforward cases", ([bar1, bar2, expected]) => {
  expect(barOneHasBetterMargaritasThanBarTwo(bar1, bar2)).toBe(expected);
});

test.for([
  ["The Castle", "The Nag's Head", false],
  ["The Nag's Head", "The Castle", false],
])("Ratings are equal", ([bar1, bar2, expected]) => {
  expect(barOneHasBetterMargaritasThanBarTwo(bar1, bar2)).toBe(expected);
});

//ERROR HANDLING TESTS - SKIPPED TO MAKE THE KATA SIMPLER
test.skip.for([
  ["The Village", "The Nag's Head"],
  ["The Nag's Head", "The Village"],
])("Bar not in logbook", ([bar1, bar2]) => {
  expect(() => barOneHasBetterMargaritasThanBarTwo(bar1, bar2)).toThrowError();
});

test.skip.for([
  ["The Halfway House", "The Nag's Head"],
  ["The Nag's Head", "The Halfway House"],
])("Null rating", ([bar1, bar2]) => {
  expect(() => barOneHasBetterMargaritasThanBarTwo(bar1, bar2)).toThrowError();
});
