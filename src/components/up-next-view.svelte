<script>
    import FocusCircle from './focus-circle.svelte'

    let expanded;
</script>

<div class="flex flex-col items-center justify-center">
    <div class:blur={expanded} class="flex flex-col items-center justify-center transition-all">
        <h3>Up next is...</h3>
        <h1 class="m-5">Patient</h1>
    </div>
    <FocusCircle bind:expanded />
</div>