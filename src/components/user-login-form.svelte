<script>
    import {fade} from "svelte/transition";

    let selection = "login";

    let repeat_password = null;
    // This is used to inform the user that the passwords dont match AFTER they have left the input field.
    let repeat_password_alert = null;
    let password = "";
</script>

<main class="outline outline-2 outline-black p-4 rounded-lg shadow-md flex flex-col w-80">

    <div role="radiogroup">
        <input type="radio" name="select-procedure" id="select-login" value="login" bind:group={selection} checked />
        <label for="select-login">Log in</label>
        <input type="radio" name="select-procedure" id="select-signup" value="signup" bind:group={selection} />
        <label for="select-signup">Sign up</label>
    </div>

    <hr class="my-3">

    {#if selection === "login"}
        <h3>Log in to Man.man</h3>
        <form method="POST" action="/patient/api/login">
            <label for="email">
                Enter your email:
            </label>
            <input type="email" name="email" id="email" required>
            <label for="password">
                Enter your password:
            </label>
            <input type="password" name="password" id="password" required>
            <button class="my-4 p-2 outline outline-black outline-2 bg-blue-500 rounded-md">Log in</button>
        </form>
    {:else}
        <h3>Sign up for Man.man</h3>
        <form method="POST" action="/patient/api/signup">
            <label for="full-name">
                Enter your full name:
            </label>
            <input type="text" name="full-name" id="full-name" required>
            <label for="email">
                Enter your email:
            </label>
            <input type="email" name="email" id="email" required>
            <label for="password">
                Enter your password:
            </label>
            <input type="password" name="password" id="password" required bind:value={password}>
            <label for="repeat-password">
                Repeat your password: <br> {#if password !== repeat_password_alert && repeat_password_alert !== null} <span class="text-red-600 font-bold" transition:fade>Please ensure passwords match</span> {/if}
            </label>
            <input type="password" name="repeat-password" id="repeat-password" required bind:value={repeat_password} on:change={() => repeat_password_alert = repeat_password}>
            <button class="my-4 p-2 outline outline-black outline-2 bg-blue-500 rounded-md disabled:bg-gray-500 transition-all" disabled={password !== repeat_password || password === ""}>Sign up</button>
        </form>
    {/if}
</main>

<style>
    form > input[type="text"], input[type="email"], input[type="password"] {
        @apply outline outline-2 outline-black p-2 rounded-md;
    }

    form > label {
        @apply my-2;
    }

    form {
        @apply flex flex-col;
    }
</style>