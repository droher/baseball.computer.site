<script lang="ts">
  // https://github.com/spences10/sveltekit-theme-switch-example
  import { onMount } from "svelte";
  import { themeChange } from "theme-change";
  import { themeList } from "../../themeList";

  function capitalizeFirstLetter(str: string) {
    if (!str) return;
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  onMount(() => {
    themeChange(false);
  });
</script>

<select data-choose-theme class="select-bordered select-primary select">
  <option disabled selected>Set Theme 🎨</option>
  {#each themeList as theme}
    <option value={theme}>{capitalizeFirstLetter(theme)}</option>
  {/each}
</select>
