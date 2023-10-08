<script>
    let menu_expanded = false;
</script>

<div class="absolute top-0 w-full z-50 flex h-14 p-2 items-center justify-end">
    <button class="fill-slate-600" on:click={() => menu_expanded = !menu_expanded}>
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColour" d="M12 16c1.1 0 2 .9 2 2s-.9 2-2 2s-2-.9-2-2s.9-2 2-2m0-6c1.1 0 2 .9 2 2s-.9 2-2 2s-2-.9-2-2s.9-2 2-2m0-6c1.1 0 2 .9 2 2s-.9 2-2 2s-2-.9-2-2s.9-2 2-2M6 16c1.1 0 2 .9 2 2s-.9 2-2 2s-2-.9-2-2s.9-2 2-2m0-6c1.1 0 2 .9 2 2s-.9 2-2 2s-2-.9-2-2s.9-2 2-2m0-6c1.1 0 2 .9 2 2s-.9 2-2 2s-2-.9-2-2s.9-2 2-2m12 12c1.1 0 2 .9 2 2s-.9 2-2 2s-2-.9-2-2s.9-2 2-2m0-6c1.1 0 2 .9 2 2s-.9 2-2 2s-2-.9-2-2s.9-2 2-2m0-6c1.1 0 2 .9 2 2s-.9 2-2 2s-2-.9-2-2s.9-2 2-2Z"/></svg>
    </button>
    <div class="relative z-50">
        {#if menu_expanded}
            <div class="absolute right-0 grid grid-cols-2 grid-rows-3 p-4 mt-4 w-96 h-[30rem] min-h-fit shadow-md rounded-lg z-50 bg-white gap-5">
                <section class="outline-black outline outline-2 rounded-lg col-span-2 flex items-center">
                    <img src="/prototype-png.jpg" alt="A prototype picture" class="h-full object-cover aspect-square p-4 rounded-full">
                    <div class="flex-1 h-full p-4">
                        <h5>Hello, Dr. Ahmad</h5>
                        <ul class="text-blue-600">
                            <li>No notifications</li>
                            <li>No applicants</li>
                        </ul>
                    </div>
                </section>
                <a href="/doctor/schedule" class="p-4 outline outline-black outline-2 rounded-lg col-span-1 flex items-center justify-center flex-col">
                        <div class="bg-slate-600 aspect-square rounded-full flex-1 flex justify-center items-center fill-white">
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColour" d="M12 14q-.425 0-.713-.288T11 13q0-.425.288-.713T12 12q.425 0 .713.288T13 13q0 .425-.288.713T12 14Zm-4 0q-.425 0-.713-.288T7 13q0-.425.288-.713T8 12q.425 0 .713.288T9 13q0 .425-.288.713T8 14Zm8 0q-.425 0-.713-.288T15 13q0-.425.288-.713T16 12q.425 0 .713.288T17 13q0 .425-.288.713T16 14Zm-4 4q-.425 0-.713-.288T11 17q0-.425.288-.713T12 16q.425 0 .713.288T13 17q0 .425-.288.713T12 18Zm-4 0q-.425 0-.713-.288T7 17q0-.425.288-.713T8 16q.425 0 .713.288T9 17q0 .425-.288.713T8 18Zm8 0q-.425 0-.713-.288T15 17q0-.425.288-.713T16 16q.425 0 .713.288T17 17q0 .425-.288.713T16 18ZM5 22q-.825 0-1.413-.588T3 20V6q0-.825.588-1.413T5 4h1V2h2v2h8V2h2v2h1q.825 0 1.413.588T21 6v14q0 .825-.588 1.413T19 22H5Zm0-2h14V10H5v10Z"/></svg>
                        </div>
                        Open Complete Schedule
                </a>
                <section class="p-4 outline outline-black outline-2 rounded-lg col-span-1 flex items-center justify-center flex-col cursor-pointer">
                    <div class="bg-slate-600 aspect-square rounded-full flex-1 flex justify-center items-center fill-white">

                    </div>
                    Turn on Blind Mode
                </section>
            </div>
        {/if}

    </div>
</div>