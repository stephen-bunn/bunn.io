<script>
  import TheHeader from "$lib/components/TheHeader.svelte"
  import "$lib/styles/base.css"
</script>

<div>
  <TheHeader />
  <main>
    <img
      src="https://gravatar.com/userimage/116117494/4e8ac61d79eda5b5646b51100d18bab9.jpeg?size=512"
      alt="Stephen Bunn Portrait"
    />
  </main>
</div>

<style>
  main {
    max-width: var(--content-width);
    margin: 0 auto;
    padding-top: var(--space-10x);
  }
</style>
