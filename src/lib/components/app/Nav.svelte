<script>
  import ThemeSwitcher from "./ThemeSwitcher.svelte";
</script>

<div class="navbar bg-base-200">
  <div class="flex-1">
    <a class="btn-ghost btn gap-2 text-xl normal-case" href="/">
      <span class="sm:hidden">T</span>
      <span class="hidden sm:block font-weiss">Timeball</span>
    </a>
  </div>
  <div class="flex-auto space-x-2">
    <a class="btn btn-info" href="/query-engine">Query Engine</a>
    <button class="btn btn-info">Database Documentation</button>
    <a class="btn btn-info" href="/blog">Blog</a>
    <button class="btn btn-info">About</button>
    <ThemeSwitcher />
  </div>
</div>
