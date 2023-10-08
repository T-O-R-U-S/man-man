<script lang="ts">
    import {FocusSelection, selected_point} from "./focus-point.ts";

    export let colour: FocusSelection;
    export let expanded: boolean;
    export let nth: number;

    function select_colour() {
        selected_point.set(colour)
    }
</script>

<div id="outermost" class="aspect-square h-10 absolute rounded-full flex items-center justify-center cursor-pointer transition-all" style:--i={nth} class:active={expanded} on:click={select_colour}>
    <span class="inner bg-gradient-to-b from-{colour}-400 to-{colour}-700 w-full h-full rounded-full flex items-center justify-center">
        <slot>
            <p>U</p>
        </slot>
    </span>
</div>

<style lang="scss">
    #outermost {
        --width: 52vw;
        transition-duration: 0.5s;
        transform-origin: var(--width);
        @media screen and (min-width: 615px) {
            --width: 20rem;
            @apply h-20;
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
        translate: calc(var(--width) * -1) -50%;
        @media screen and (min-width: 615px) {
            translate: calc(var(--width) * -1) -50%;
        }
        transition-delay: calc(0.1s * var(--i));
        transform: rotate(calc((360deg / 5 * var(--i))));
    }
</style>