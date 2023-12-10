<script>
  import ThemeSwitcher from "./ThemeSwitcher.svelte";
</script>

<div class="navbar bg-neutral text-neutral-content min-w-screen">
  <div class="navbar-start">
    <!-- Mobile Menu (Hamburger Icon) -->
    <div class="dropdown">
      <button tabindex="0" class="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          ><path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h8m-8 6h16"
          /></svg
        >
      </button>
      <ul
        class="menu menu-sm dropdown-content mt-3 p-2 shadow bg-neutral rounded-box w-52"
      >
        <li><a href="/query-engine">Query</a></li>
        <li><a href="https://docs.baseball.computer">Doc</a></li>
        <li><a href="/blog">Blog</a></li>
        <li><button>About</button></li>
        <li><a href="https://github.com/droher/baseball.computer">GitHub</a></li>
        <!-- Add additional links if needed -->
      </ul>
    </div>

    <!-- Logo or Brand Name -->
    <a class="btn btn-ghost gap-2 text-xl normal-case" href="/">
      <span class="font-title">baseball.computer</span>
    </a>
  </div>

  <!-- Regular Menu for Larger Screens -->
  <div class="navbar-center hidden lg:flex">
    <ul class="menu menu-horizontal px-1 text-lg">
      <li><a href="/query-engine">Query</a></li>
      <li><a href="https://docs.baseball.computer">Doc</a></li>
      <li><a href="/blog">Blog</a></li>
      <li><button>About</button></li>
    </ul>
  </div>
  <div class="navbar-end">
    <ul class="menu menu-horizontal">
      <li>
        <a href="https://github.com/droher/baseball.computer">
          <svg
            height="32"
            width="32"
            viewBox="0 0 16 16"
            version="1.1"
            aria-hidden="true"
          >
            <path
              fill="#FFFFFF"
              d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.69-.01-1.35-2.01.37-2.77-.49-2.95-.94-.11-.23-.59-.94-.1-1.01.49-.07.84.45 1.01.64.57.97 1.48.69 1.84.53.06-.41.22-.69.4-.85-1.78-.2-3.66-.89-3.66-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.03 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.88 3.75-3.67 3.95.23.19.43.57.43 1.15 0 .83-.01 1.5-.01 1.7 0 .21.15.46.55.38C13.71 14.53 16 11.54 16 8c0-4.42-3.58-8-8-8z"
            ></path>
          </svg>
        </a>
      </li>
      <!-- Add additional links if needed -->
    </ul>
  </div>
</div>
