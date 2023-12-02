<script lang="ts">
  import { tweened } from "svelte/motion";
  import { cubicOut } from "svelte/easing";
  import { onMount } from "svelte";

  let hidden = "";

  const stickFigureX = tweened(-100, { duration: 10000, easing: cubicOut });
  const firetruckX = tweened(0, { duration: 10000, easing: cubicOut });

  stickFigureX.set(300);
  firetruckX.set(150);

  onMount(() => {
    setTimeout(() => {
      hidden = "hidden";
    }, 10000);
  });
</script>

<div class="flex justify-start items-top {hidden}">
  <div style="transform: translateX({$stickFigureX}%)">
    <img
      src="stick_figure_transparent.png"
      alt="Rube Waddell"
      class="w-1/4 object-scale-down"
    />
  </div>

  <div class="ml-20" style="transform: translateX({$firetruckX}%)">
    <img
      src="firetruck_transparent.png"
      alt="Firetruck"
      class="w-1/4 object-scale-down"
    />
  </div>
</div>
