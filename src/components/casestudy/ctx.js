import { writable } from "svelte/store";
export const filterctx = writable({
    filter: null,
    industry:null,
    service:null
});