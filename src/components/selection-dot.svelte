<script lang="ts">
    import {FocusSelection, selected_point} from "./focus-point.ts";

    export let colour: FocusSelection;
    export let expanded: boolean;
    export let nth: number;

    function select_colour() {
        selected_point.set(colour)
    }
</script>

<div id="outermost" class="aspect-square h-20 absolute rounded-full flex items-center justify-center cursor-pointer transition-all" style:--i={nth} class:active={expanded} on:click={select_colour}>
    <span class="inner bg-gradient-to-b from-{colour}-400 to-{colour}-700 w-full h-full rounded-full flex items-center justify-center">
        <slot>
            <p>U</p>
        </slot>
    </span>
</div>

<style>
    #outermost {
        transition-duration: 0.5s;
        transform-origin: 15rem;
        @media screen and (min-width: 615px) {
            transform-origin: 20rem;
        }
        rotate: 17.5deg;
        top: 50%;
        left: 50%;
    }

    .inner {
        @apply transition-all;
        transform: rotate(calc((-360deg/5) * var(--i)));
        rotate: -17.5deg;
    }

    .active {
        translate: -15rem -50%;
        @media screen and (min-width: 615px) {
            translate: -20rem -50%;
        }
        transition-delay: calc(0.1s * var(--i));
        transform: rotate(calc((360deg / 5 * var(--i))));
    }
</style>