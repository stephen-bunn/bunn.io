<svelte:options runes />

<script>
  import { CONTACT_EMAIL, SOCIALS, FULL_NAME } from '$lib/constants'
  import Link from '$lib/components/Link.svelte'
</script>

<svelte:head>
  <title>{FULL_NAME} &ndash; Contact</title>
</svelte:head>

<main>
  <h1>Contact</h1>
  <p>
    I'm not <em>really</em> looking at taking on any new projects at the moment. However, I am open to
    offers for career opportunities given they meet my financial needs, lifestyle, and passions well.
  </p>
  <p>
    If you would like to get in touch with me about a position you are offering, please email me at
    <Link href={`mailto:${CONTACT_EMAIL}`} target="_blank">{CONTACT_EMAIL}</Link>.
  </p>
  <hr />
  <p>
    Instead, if you just want to chat about technology and things, you can find me through my
    contact information in <Link href={SOCIALS.linktree.url} target="_blank">Linktree</Link>.
  </p>
</main>

<style>
  p {
    font-size: var(--font-300);
    margin-bottom: var(--space-4x);
  }
</style>
