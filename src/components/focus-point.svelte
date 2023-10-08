<script lang="ts">
    import {FocusSelection, selected_point} from "./focus-point.ts";

    export let colour: FocusSelection;
</script>

<div class="aspect-square min-h-[20rem] bg-gradient-to-b from-{colour}-400 to-{colour}-700 rounded-full text-white flex items-center justify-center flex-col cursor-pointer absolute transition-all"
     class:hidden={$selected_point !== colour}
>
    <slot />
</div>