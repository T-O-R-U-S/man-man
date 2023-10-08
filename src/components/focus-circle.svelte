<script lang="ts">
    import FocusPoint from './focus-point.svelte'
    import SelectionDot from './selection-dot.svelte'
    import {FocusSelection} from "./focus-point.ts"

    export let expanded: boolean = false;

    let assigned_icon = {
        "blue": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"32\" height=\"32\" viewBox=\"0 0 24 24\"><path fill=\"currentColour\" d=\"M5 22q-.825 0-1.413-.588T3 20V6q0-.825.588-1.413T5 4h1V3q0-.425.288-.713T7 2q.425 0 .713.288T8 3v1h8V3q0-.425.288-.713T17 2q.425 0 .713.288T18 3v1h1q.825 0 1.413.588T21 6v14q0 .825-.588 1.413T19 22H5Zm0-2h14V10H5v10ZM5 8h14V6H5v2Zm0 0V6v2Zm7 6q-.425 0-.713-.288T11 13q0-.425.288-.713T12 12q.425 0 .713.288T13 13q0 .425-.288.713T12 14Zm-4 0q-.425 0-.713-.288T7 13q0-.425.288-.713T8 12q.425 0 .713.288T9 13q0 .425-.288.713T8 14Zm8 0q-.425 0-.713-.288T15 13q0-.425.288-.713T16 12q.425 0 .713.288T17 13q0 .425-.288.713T16 14Zm-4 4q-.425 0-.713-.288T11 17q0-.425.288-.713T12 16q.425 0 .713.288T13 17q0 .425-.288.713T12 18Zm-4 0q-.425 0-.713-.288T7 17q0-.425.288-.713T8 16q.425 0 .713.288T9 17q0 .425-.288.713T8 18Zm8 0q-.425 0-.713-.288T15 17q0-.425.288-.713T16 16q.425 0 .713.288T17 17q0 .425-.288.713T16 18Z\"/></svg>",
        "orange": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"32\" height=\"32\" viewBox=\"0 0 24 24\"><path fill=\"currentColour\" d=\"M18 19H6v-1.4c0-2 4-3.1 6-3.1s6 1.1 6 3.1M12 7a3 3 0 0 1 3 3a3 3 0 0 1-3 3a3 3 0 0 1-3-3a3 3 0 0 1 3-3m0-4a1 1 0 0 1 1 1a1 1 0 0 1-1 1a1 1 0 0 1-1-1a1 1 0 0 1 1-1m7 0h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2Z\"/></svg>",
        "yellow": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"32\" height=\"32\" viewBox=\"0 0 24 24\"><path fill=\"currentColour\" d=\"M5 19q-.425 0-.713-.288T4 18q0-.425.288-.713T5 17h1v-7q0-2.075 1.25-3.688T10.5 4.2v-.7q0-.625.438-1.063T12 2q.625 0 1.063.438T13.5 3.5v.7q2 .5 3.25 2.113T18 10v7h1q.425 0 .713.288T20 18q0 .425-.288.713T19 19H5Zm7 3q-.825 0-1.413-.588T10 20h4q0 .825-.588 1.413T12 22Z\"/></svg>",
        "purple": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"32\" height=\"32\" viewBox=\"0 0 24 24\"><path fill=\"currentColour\" d=\"M5 21q-.825 0-1.413-.588T3 19V5q0-.825.588-1.413T5 3h14q.825 0 1.413.588T21 5v10l-6 6H5Zm9-2l5-5h-5v5Zm-7-5h5v-2H7v2Zm0-4h10V8H7v2Z\"/></svg>",
        "green": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"32\" height=\"32\" viewBox=\"0 0 24 24\"><path fill=\"currentColour\" d=\"m13.13 14.56l1.43-1.43L21 19.57L19.57 21l-6.44-6.44m4.29-5.73l2.86-2.86C16.33 2 9.93 2 6 5.95c3.91-1.3 8.29-.25 11.42 2.88M5.95 6C2 9.93 2 16.33 5.97 20.28l2.86-2.86C5.7 14.29 4.65 9.91 5.95 6m.02-.04l-.01.01C5.58 9 7.13 12.85 10.26 16L16 10.26c-3.14-3.13-7-4.68-10.03-4.3Z\"/></svg>",
    }
</script>

<div class="aspect-square min-h-[20rem] relative z-0" on:click={() => expanded = !expanded}>
    {#each Object.values(FocusSelection) as colour, index}
        <SelectionDot {colour} nth={index} {expanded}>
            <span class="fill-white">
                {@html assigned_icon[colour]}
            </span>
        </SelectionDot>
    {/each}
    <FocusPoint colour={FocusSelection.Blue} client:load>
        <h3>Nothing scheduled</h3>
    </FocusPoint>
    <FocusPoint colour={FocusSelection.Orange} client:load>
        <h4>You've got.</h4>
        <h3><b>No</b> applicants</h3>
    </FocusPoint>
    <FocusPoint colour={FocusSelection.Yellow} client:load>
        <h4>You've got...</h4>
        <h3><b>No</b> notifications</h3>
    </FocusPoint>
    <FocusPoint colour={FocusSelection.Purple} client:load>
        <h3>No announcements</h3>
    </FocusPoint>
    <FocusPoint colour={FocusSelection.Green} client:load>
        <h2>Keep Calm.</h2>
    </FocusPoint>
</div>