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
      <img class="hero-content h-64" src={logo} alt="baseball.computer logo" />
      <h2 class="text-2xl font-title">A historical database</h2>
      <div class="flex flex-row space-x-2">
        <a class="btn btn-primary" href="/query-engine">Query Now</a>
        <a class="btn btn-info" href="https://docs.baseball.computer"
          >Read the Docs</a
        >
        <a
          class="btn btn-outline"
          href="https://colab.research.google.com/drive/1mIiHVNIySqerqhAS2r0XlYxOer4oAEzP?usp=sharing"
          >Open in Python</a
        >
        <a
          class="btn btn-outline"
          href="https://colab.research.google.com/drive/12OS9h4g1eWwm64oFRlm-fNUKIV3GbqA2?usp=sharing"
          >Open in R</a
        >
      </div>
    </div>
    <!-- Database Purpose -->
    <section class="mb-10">
      <h2 class="text-3xl prose mb-4 font-bold">About The Project</h2>
      <p class="text-lg">
        baseball.computer is a free, open-source database of historical baseball
        statistics and play-by-play data. It builds on top of historical data
        sources and new database technology to provide a novel combination of
        detail, flexibility, and power for baseball analysis. It is currently in
        a preview release, and it will have bugs in data and functionality.
      </p>
    </section>

    <section class="mb-10">
      <h2 class="text-3xl prose mb-4 font-bold">Query From Anywhere</h2>
      <p class="text-lg">
        You can query and visualize data from your browser using the <a
          class="link"
          href="/query-engine">Query Engine</a
        >, or you can use the database inside of any number of programming
        languages (examples in Python and R are provided in the links above).
      </p>
    </section>

    <section class="mb-10">
      <h2 class="text-3xl prose font-bold mb-4">About the Data</h2>
      <p>
        Nearly all of the information in the database is sourced from
        Retrosheet, which is a volunteer-run organization that collects and
        distributes historical baseball data. The data is available for free,
        and only requires the following attribution:
      </p>
      <div class="prose">
      <blockquote>
        <p>
          The information used here was obtained free of charge from and is
          copyrighted by Retrosheet. Interested parties may contact Retrosheet
          at "www.retrosheet.org".
        </p>
      </blockquote>
      </div>

      For player statistics prior to 1901, the database relies on
      <a class="link" href="http://seanlahman.com/download-baseball-database/">
        Sean Lahman's Baseball Database</a
      >, which is released under the Creative Commons Attribution-ShareAlike 3.0
      Unported License. All additional contributions to the data by this project
      are released under the
      <a class="link" href="https://creativecommons.org/licenses/by-sa/4.0/"
        >Creative Commons Attribution-ShareAlike 4.0 International License</a
      >.
    </section>

    <!-- Contact Information -->
    <section>
      <h2 class="text-3xl mb-4 font-bold">About Me</h2>
      <p>I am a data engineer living in New York. 
        If you have any questions or suggestions, feel free to reach out:</p>
      <a href="mailto:david.roher@baseball.computer" class="link"
        >david.roher@baseball.computer</a
      >
    </section>
  </div>
</div>
