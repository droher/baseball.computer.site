<script lang="ts">
  export let author: string;
  export let date: string;

  const formattedDate = new Date(date).toLocaleDateString(undefined, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
</script>

<p class="mb-4 text-sm text-gray-700">
  <span class="font-bold mr-4">{author}</span>
  <time class="text-gray-500" datetime={date}>{formattedDate}</time>
</p>
