<script lang="ts">
    import {z} from "zod";

    let email: string = "";
    let password: string = "";

    let email_invalid: boolean = false;

    const Email = z.string().email();

    function is_email(): boolean {
        let result = Email.safeParse(email).success;
        email_invalid = !result;
        return result
    }
</script>

<div class="p-8 outline outline-black rounded-md w-96 flex flex-col items-center relative min-h-fit">
    <h2 class="py-8">Log in</h2>
    <hr class="w-full" />
    <form action="/doctor/api/login" class="flex flex-col">
        <label for="email" class="text-2xl font-bold my-4 text-left w-full">Email</label>
        <input type="email" name="email" id="email" bind:value={email} on:change={is_email} class="transition-all" class:outline-4={email_invalid} class:outline-red-600={email_invalid} class:outline-black={email_invalid}>
        <label for="password" class="text-2xl font-bold my-4 text-left w-full">Password</label>
        <input type="password" name="password" id="password" bind:value={password} class="outline-black">
        <button class="bg-blue-500 disabled:bg-gray-500 transition-all w-40 py-2 px-1 rounded-md mx-auto text-white font-bold outline outline-black mt-5" disabled={!email || !password || email_invalid}>Log in</button>
    </form>
</div>

<style lang="scss">
    input {
      &[type="email"],&[type="password"] {
        @apply outline outline-1 rounded-md p-2 text-xl
      }
    }
</style>