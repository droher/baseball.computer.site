<script>
  import Github from "../svg/Github.svelte";
  import HamburgerMenu from "../svg/HamburgerMenu.svelte";

  import logo from "$lib/assets/logo-192.png";
</script>

<div class="navbar bg-neutral text-neutral-content min-w-screen">
  <div class="navbar-start">
    <!-- Mobile Menu (Hamburger Icon) -->
    <div class="dropdown">
      <button
        tabindex="0"
        class="btn btn-ghost lg:hidden"
        aria-haspopup="true"
        aria-label="Menu"
      >
        <HamburgerMenu />
      </button>
      <ul
        class="menu menu-sm dropdown-content mt-3 p-2 shadow bg-neutral rounded-box w-52 z-10"
      >
        <li><a href="/query-engine">Query</a></li>
        <li><a href="https://docs.baseball.computer">Docs</a></li>
        <li><a href="/blog">Blog</a></li>
        <li><button>About</button></li>
        <li>
          <a href="https://github.com/droher/baseball.computer">GitHub</a>
        </li>
      </ul>
    </div>

    <!-- Logo -->
    <a
      class="btn btn-ghost gap-2 text-xl normal-case"
      href="/"
    >
      <img src="{logo}" alt="baseball.computer logo" class="h-12 p" />
      <span class="hidden lg:inline font-play">baseball.computer</span>
    </a>
  </div>

  <!-- Regular Menu for Larger Screens -->
  <div class="navbar-center hidden lg:flex">
    <ul class="menu menu-horizontal px-1 text-lg">
      <li><a href="/query-engine">Query</a></li>
      <li><a href="https://docs.baseball.computer">Docs</a></li>
      <li><a href="/blog">Blog</a></li>
      <li><button>About</button></li>
    </ul>
  </div>
  <div class="navbar-end">
    <ul class="menu menu-horizontal">
      <li>
        <a
          href="https://github.com/droher/baseball.computer"
          aria-label="Github"
        >
          <Github />
        </a>
      </li>
    </ul>
  </div>
</div>
