<script lang="ts">
  import Link from "$lib/components/Link.svelte"
  export let data
</script>

<svelte:head>
  <title>Stephen Bunn - Travel</title>
</svelte:head>

<h1>Travel</h1>
<ul>
  {#each data.posts as post}
    <li><Link href={post.path}>Test</Link></li>
  {/each}
</ul>
