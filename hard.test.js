import { test, it, expect } from "vitest";

import { findBarOfMargaritaNearestInTime } from "./hard.js";

test("barebonesshouldpass", () => {});

test("A log entry exists with the given date", () => {
  const date = "2024-06-06";
  const expected = "Bargo";
  const actual = findBarOfMargaritaNearestInTime(date);
  expect(actual).toBe(expected);
});

test("A log entry exists 1 day after the given date", () => {
  const date = "2024-06-08";
  const expected = "Dalston Superstore";
  const actual = findBarOfMargaritaNearestInTime(date);
  expect(actual).toBe(expected);
});

test("A log entry exists 1 day before the given date", () => {
  const date = "2024-05-25";
  const expected = "The Duke";
  const actual = findBarOfMargaritaNearestInTime(date);
  expect(actual).toBe(expected);
});

test("A log entry exists 1 day after given date but crossing a month boundary", () => {
  const date = "2024-06-01";
  const expected = "The Castle";
  const actual = findBarOfMargaritaNearestInTime(date);
  expect(actual).toBe(expected);
});

test("All log entries come after this date", () => {
  const date = "2021-06-01";
  const expected = "The Old Ship Inn";
  const actual = findBarOfMargaritaNearestInTime(date);
  expect(actual).toBe(expected);
});

test("All log entries come before this date", () => {
  const date = "2027-01-01";
  const expected = "The Nag's Head";
  const actual = findBarOfMargaritaNearestInTime(date);
  expect(actual).toBe(expected);
});

test("Equidistant smallest gap", () => {
  const date = "2024-06-05";
  const expected = "Pixie's Bar";
  const actual = findBarOfMargaritaNearestInTime(date);
  expect(actual).toBe(expected);
});

test("Equidistant non-smallest gap", () => {
  const date = "2024-06-10";
  const expected = "Dalston Superstore";
  const actual = findBarOfMargaritaNearestInTime(date);
  expect(actual).toBe(expected);
});

/*
//had hoped to use this test to guard against invalid date
//but even though some arguments lead to invalid dates
//my function still returns a pub name
//If I leave this test in, I am requiring the coder to implement error handling
//which feels a bit cruel given the timings

test("Invalid date provided", () => {
  const date = Infinity;
  expect(findBarOfMargaritaNearestInTime(date)).toThrowError();
});
*/
