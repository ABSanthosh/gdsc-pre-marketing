import { writable } from "svelte/store";

export const user = writable({
  name: "",
  email: "",
  majorAndYear: "",
  answers: "",
});