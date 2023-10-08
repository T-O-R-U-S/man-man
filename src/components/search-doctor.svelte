<script lang="ts">
    interface Doctor {
        doc_id: string,
        name: string,
        profile_picture: any,
        description: string,
    }

    let doctors: Doctor[] = [];

    let query = "";
    let page_number = 1;

    function search_doctor() {
        fetch("/patient/api/search-doctor", {
            body: JSON.stringify({
                query,
                page_number
            })
        })
    }

    function previous_page() {

    }

    function next_page() {

    }
</script>

<main class="w-full min-h-screen flex flex-col items-center">
    <header class="bg-blue-200 w-full text-center pt-96">
        <h1>Search for a doctor...</h1>
        <input type="text" class="my-52 p-4 text-xl rounded-md outline outline-black" name="search" id="search" placeholder="Search for a doctor..." on:change={search_doctor} bind:value={query}>
    </header>

    <section class="grid grid-cols-1 lg:grid-cols-6 w-full max-w-4xl gap-10 m-4">
        {#each doctors as doctor}
            <div class="aspect-square bg-slate-100 rounded-md m-4">Grid item</div>
        {/each}
    </section>

    {#if query !== ""}
        <nav>
            <button class="p-2 m-2 text-blue-600 underline" on:click={previous_page}>Previous page</button>
            {#if doctors.length !== 0}
                <button class="p-2 m-2 text-blue-600 underline" on:click={next_page}>Next page</button>
            {/if}
        </nav>
    {/if}


</main>