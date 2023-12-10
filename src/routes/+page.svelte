<script lang="ts">
  import PageHead from "$lib/components/PageHead.svelte";
  import { db } from "$lib/stores";
  import { onMount } from "svelte";

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
  <div class="container mx-auto p-4">
    <div class="hero flex flex-col items-center gap-6">
      <h1 class="hero-content text-center text-4xl md:text-8xl font-title">
        baseball.computer
      </h1>
        <a class="btn btn-primary" href="/query-engine"
          >Query Now</a>
    </div>
    <!-- Database Purpose -->
    <section class="mb-10">
      <h2 class="text-3xl font-bold mb-4">Our Goal</h2>
      <p class="text-lg">

      </p>
    </section>

    <!-- Features of the Database -->
    <section class="mb-10">
      <h2 class="text-3xl font-bold mb-4">Database Features</h2>
      <ul class="list-disc pl-5">
        <li>

        </li>
        <li>

        </li>
        <li>
        </li>
        <!-- Add more features as needed -->
      </ul>
    </section>

    <!-- Navigation and Usage -->
    <section class="mb-10">
      <h2 class="text-3xl font-bold mb-4">Navigating the Database</h2>
      <p>
      </p>
      <ul class="list-disc pl-5">
        <li>

        </li>
        <li>

        </li>
        <li>

        </li>
        <!-- Include more navigation tips as relevant -->
      </ul>
    </section>

    <!-- Contact Information -->
    <section>
      <h2 class="text-3xl font-bold mb-4">Get in Touch</h2>
      <p>If you have any questions or suggestions, feel free to reach out:</p>
      <ul>
        <li>
          Email: <a href="mailto:david.roher@baseball.computer"
            >david.roher@baseball.computer</a
          >
        </li>
        <!-- Add more contact options as needed -->
      </ul>
    </section>
  </div>
</div>
