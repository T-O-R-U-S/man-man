<script lang="ts">
    // let doctors = await fetch('/hospital/api/view-doctors');
    //
    // doctors = await doctors.json();

    interface Doctor {
        name: string,
        description: string,
        doctor_id?: string // Optional only for prototype purposes, will be used to fetch PFPs later, TODO: Remove optional
    }

    let doctors: Doctor[] = [
        {
            name: "Dr. Ahmed Fawwaz Moursy",
            description: "Specialist orthopedic surgeon Lorem ipsum dolor sit amet, consectetur adipisicing elit. At autem ea error id incidunt itaque maxime nam ratione sunt veritatis?"
        },
        {
            name: "Dr. Ahmed Fawwaz Moursy",
            description: "Specialist orthopedic surgeon Lorem ipsum dolor sit amet, consectetur adipisicing elit. At autem ea error id incidunt itaque maxime nam ratione sunt veritatis?"
        },
        {
            name: "Dr. Ahmed Fawwaz Moursy",
            description: "Specialist orthopedic surgeon Lorem ipsum dolor sit amet, consectetur adipisicing elit. At autem ea error id incidunt itaque maxime nam ratione sunt veritatis?"
        },
        {
            name: "Dr. Ahmed Fawwaz Moursy",
            description: "Specialist orthopedic surgeon Lorem ipsum dolor sit amet, consectetur adipisicing elit. At autem ea error id incidunt itaque maxime nam ratione sunt veritatis?"
        },
    ];
</script>

<main class="w-full flex flex-col items-center">
    <section class="w-full max-w-7xl flex items-center h-full m-4 flex-wrap">
        {#each doctors as doctor}
                <div class="min-h-fit bg-slate-100 h-32 w-full md:w-96 flex rounded-md m-4">
                    <img src="/prototype-png.jpg" alt="Prototype image" class="h-full aspect-square object-cover rounded-l-md">
                    <div class="p-2 text-ellipsis h-full w-fit overflow-hidden">
                        <h5 class="text-ellipsis h-fit w-full">{doctor.name}</h5>
                        <p class="text-ellipsis h-full w-full">{doctor.description}</p>
                    </div>
                </div>
        {/each}
    </section>
</main>