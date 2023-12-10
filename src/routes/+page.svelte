<script lang="ts">
  import PageHead from "$lib/components/PageHead.svelte";
  import { db } from "$lib/stores";
  import { onMount } from "svelte";
  import logo from "$lib/assets/logo-192.png";

  // Warm up db connection
  onMount(async () => {
    db.subscribe(() => {});
  });
</script>

<PageHead
  title="Home"
  description="Homepage for baseball.computer: An open historical baseball database."
/>
<div class="grow bg-gradient-to-b from-base-100 to-base-300">
  <div class="container mx-auto p-8 space-y-8">
    <div class="hero flex flex-col items-center gap-6">
      <h1 class="hero-content text-center text-4xl font-play">
        baseball.computer
      </h1>
      <img
        class="hero-content h-64"
        src="{logo}"
        alt="baseball.computer logo"
      />
      <h2 class="text-2xl font-title">A historical database</h2>
      <a class="btn btn-primary" href="/query-engine">Query Now</a>
    </div>
    <!-- Database Purpose -->
    <section class="mb-10">
      <h2 class="text-3xl prose mb-4 font-bold">About The Project</h2>
      <p class="prose text-lg">
        baseball.computer is a free, open-source database of historical baseball
        statistics and play-by-play data. 
      </p>
    </section>

    <!-- Features of the Database -->
    <section class="mb-10">
      <h2 class="text-3xl prose mb-4 font-bold">Technical Features</h2>
      <h3 class="text-xl font-semibold">Query From Anywhere</h3>
      <p class="prose text-lg ">
        You can query the database from your browser using the <a class="link" href="/query-engine">Query Engine</a>.
        <!-- Add more features as needed -->
    </section>

    <!-- Navigation and Usage -->
    <section class="mb-10">
      <h2 class="text-3xl prose font-bold mb-4">Baseball Features</h2>
      <p></p>
      <ul class="list-disc pl-5">
        TKTKTK
        <!-- Include more navigation tips as relevant -->
      </ul>
    </section>

    <!-- Contact Information -->
    <section>
      <h2 class="text-3xl prose mb-4 font-bold">Get in Touch</h2>
      <p>If you have any questions or suggestions, feel free to reach out:</p>
          <a href="mailto:david.roher@baseball.computer" class="link"
            >david.roher@baseball.computer</a>
    </section>
  </div>
</div>
