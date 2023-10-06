<script lang="ts">
    import FocusPoint from './focus-point.svelte'
    import SelectionDot from './selection-dot.svelte'
    import {FocusSelection} from "./focus-point.ts";

    export let expanded: boolean = false;
</script>

<div class="aspect-square min-h-[20rem] relative" on:click={() => expanded = !expanded}>
    {#each Object.values(FocusSelection) as colour, index}
        <SelectionDot {colour} nth={index} {expanded} />
    {/each}
    <FocusPoint colour={FocusSelection.Blue} client:load>
        <h4>Scheduled for...</h4>
        <h2>12:45 PM</h2>
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
        <h4>Scheduled for...</h4>
        <h2>12:45 PM</h2>
    </FocusPoint>
    <FocusPoint colour={FocusSelection.Green} client:load>
        <h4>Scheduled for...</h4>
        <h2>12:45 PM</h2>
    </FocusPoint>
</div>