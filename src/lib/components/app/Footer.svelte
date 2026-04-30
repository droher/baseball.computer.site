<script lang="ts">
  const year = new Date().getFullYear();
</script>

<footer
  class="footer footer-center bg-base-200 text-base-content/80 px-4 py-6 text-xs gap-2"
>
  <div class="flex flex-wrap items-center justify-center gap-x-4 gap-y-1">
    <span>&copy; {year} David Roher</span>
    <a class="link link-hover" href="/blog">Blog</a>
    <a
      class="link link-hover"
      href="https://github.com/droher/baseball.computer">Source</a
    >
    <a class="link link-hover" href="/rss.xml">RSS</a>
  </div>
  <p class="max-w-2xl">
    Data obtained free of charge from and copyrighted by
    <a class="link link-hover" href="https://www.retrosheet.org">Retrosheet</a>.
    Pre-1901 player stats from
    <a
      class="link link-hover"
      href="http://seanlahman.com/download-baseball-database/"
      >Sean Lahman's Baseball Database</a
    > (CC BY-SA 3.0).
  </p>
</footer>
