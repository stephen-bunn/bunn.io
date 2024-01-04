<script>
  import resume from "$lib/content/resume.json"
  import ResumeBasics from "$lib/components/resume/ResumeBasics.svelte"
</script>

<svelte:head>
  <title>Stephen Bunn &ndash; Resume</title>
</svelte:head>

<ResumeBasics basics={resume.basics} />
