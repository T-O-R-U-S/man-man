import {type Writable, writable} from "svelte/store";

export enum FocusSelection {
    Blue = "blue",
    Yellow = "yellow",
    Orange = "orange",
    Green = "green",
    Purple = "purple"
}

export let selected_point: Writable<FocusSelection> = writable(FocusSelection.Blue);