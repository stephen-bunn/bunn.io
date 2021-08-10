<template>
  <div class="ResumeContact">
    <div class="ResumeContact_Content mb-4">
      <div class="font-bold">
        Feel free to send me an email if you are looking to contact me about
        recruitment.
      </div>
      I'm available
      <Link to="https://time.is/EDT" target="_blank"> EDT </Link>
      daytime hours and am open to hearing about any opportunities.
    </div>
    <div class="flex flex-col text-lg">
      <div
        v-for="profile in profiles"
        :key="`profile-${profile.network}-${profile.username}`"
        v-tooltip.right="{
          content: `@ ${profile.network}`,
          classes: 'ml-2 px-2 py-1 bg-gray-300 rounded-md text-xs',
        }"
        class="flex max-w-max"
      >
        <component
          :is="profile.iconComponent"
          v-if="profile.iconComponent"
          class="self-center mr-2 w-6 h-6"
        />
        <Icon
          v-else-if="profile.icon"
          :name="profile.icon"
          class="self-center mr-2"
        />
        <Link :to="profile.url" target="_blank">
          {{ profile.username }}
        </Link>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue, { PropOptions, VueConstructor } from 'vue'
import { JsonResume } from '~/plugins/resume/types'
import Link from '~/components/Link.vue'
import Icon from '~/components/Icon.vue'
import DiscordSvg from '~/components/icons/Discord.svg?inline'
import KeybaseSvg from '~/components/icons/Keybase.svg?inline'

export interface ContactProfile extends JsonResume.SocialProfile {
  icon?: string
  iconComponent?: VueConstructor<Vue>
}

export default Vue.extend({
  components: {
    Link,
    Icon,
    DiscordSvg,
    KeybaseSvg,
  },
  props: {
    basics: {
      type: Object,
      required: true,
    } as PropOptions<JsonResume.Basics>,
  },
  computed: {
    emailProfile(): ContactProfile | null {
      return {
        network: 'Email',
        url: `mailto:${this.basics.email}`,
        username: this.basics.email,
        icon: 'mail',
      }
    },
    discordProfile(): ContactProfile | null {
      const profile = this.findProfile('discord')
      return profile
        ? { ...profile, ...{ iconComponent: DiscordSvg } }
        : profile
    },
    keybaseProfile(): ContactProfile | null {
      const profile = this.findProfile('keybase')
      return profile
        ? { ...profile, ...{ iconComponent: KeybaseSvg } }
        : profile
    },
    profiles(): (ContactProfile | null)[] {
      return [
        this.emailProfile,
        this.discordProfile,
        this.keybaseProfile,
      ].filter((profile) => profile)
    },
  },
  methods: {
    findProfile(network: string): JsonResume.SocialProfile | null {
      return (
        this.basics.profiles.find(
          (profile) => profile.network.toLowerCase() === network.toLowerCase()
        ) || null
      )
    },
  },
})
</script>
