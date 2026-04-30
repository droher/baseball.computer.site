<script lang="ts">
  import { Tween } from "svelte/motion";
  import { cubicOut } from "svelte/easing";
  import { onMount } from "svelte";

  let hidden = $state("");

  const stickFigureX = new Tween(-100, { duration: 10000, easing: cubicOut });
  const firetruckX = new Tween(0, { duration: 10000, easing: cubicOut });

  stickFigureX.target = 300;
  firetruckX.target = 150;

  onMount(() => {
    setTimeout(() => {
      hidden = "hidden";
    }, 8000);
  });
</script>

<div class="flex justify-start items-top {hidden}">
  <div style="transform: translateX({stickFigureX.current}%)">
    <img
      src="/stick_figure_transparent.png"
      alt="Rube Waddell"
      class="w-1/4 object-scale-down"
    />
  </div>

  <div class="ml-20" style="transform: translateX({firetruckX.current}%)">
    <img
      src="/firetruck_transparent.png"
      alt="Firetruck"
      class="w-1/4 object-scale-down"
    />
  </div>
</div>
