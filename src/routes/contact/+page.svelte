<script>
  import { FIRST_NAME, CONTACT_EMAIL, SOCIALS } from "$lib/utils/constants"
  import Link from "$lib/components/Link.svelte"
</script>

<svelte:head>
  <title>{FIRST_NAME} &ndash; Contact</title>
</svelte:head>

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
  Instead, if you just want to chat about technology and things, you can find me on Mastodon as
  <Link href={SOCIALS.mastodon.url} target="_blank">{SOCIALS.mastodon.name}</Link> or at <Link
    href={SOCIALS.omg.url}
    target="_blank">{SOCIALS.omg.name}@omg.lol</Link
  >.
</p>

<style>
  p {
    font-size: var(--font-300);
    margin-bottom: var(--space-4x);
  }
</style>
