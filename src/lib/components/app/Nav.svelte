<script>
  import ThemeSwitcher from "./ThemeSwitcher.svelte";
</script>

<div class="navbar bg-base-200 min-w-screen">
  <div class="navbar-start">
    <a class="btn-ghost btn gap-2 text-xl normal-case" href="/">
      <span class="font-weiss">Timeball</span>
    </a>
  </div>
  <div class="navbar-end space-x-2">
    <a class="btn btn-ghost" href="/query-engine">Query</a>
    <button class="btn btn-ghost">Doc</button>
    <a class="btn btn-ghost" href="/blog">Blog</a>
    <button class="btn btn-ghost">About</button>
  <div class="hidden">
    <ThemeSwitcher />
    </div>
  </div>
</div>
