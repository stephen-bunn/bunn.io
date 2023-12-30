<script lang="ts">
  import "$lib/styles/base.css"
  const resumeRequest = (async () => await (await fetch("/resume.json")).json())()
</script>

{#await resumeRequest}
  <p>Loading...</p>
{:then resume}
  <img src={resume.basics.image} alt="{resume.basics.name} portrait" />
  <p>{resume.basics.name}</p>
{/await}
