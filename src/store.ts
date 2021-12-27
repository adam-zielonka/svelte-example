import { derived, writable } from "svelte/store";

export const counters = writable<number[]>([0]);

export const sum = derived(counters, $counters =>
  $counters.reduce((a, b) => a + b, 0)
);

export const canAddMoreCounters = derived(
  counters,
  $counters => $counters.length < 4
);

export const updateCounter = (index: number, delta: number) => {
  counters.update(counters => {
    counters[index] += delta;
    return counters;
  });
};

export const setCounter = (index: number, value: number) => {
  counters.update(counters => {
    counters[index] = value;
    return counters;
  });
};

export const addCounter = () => {
  counters.update(counters => [...counters, 0]);
};

export const deleteCounter = (index: number) => {
  counters.update(counters => {
    counters.splice(index, 1);
    return counters;
  });
};
