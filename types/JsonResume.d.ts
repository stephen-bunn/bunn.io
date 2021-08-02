/**
 * A namespace for the various types utilized for `JsonResume`.
 * Most likely you should be consume a JSON payload using the `JsonResume.Resume` type.
 */
export namespace JsonResume {

  /**
   * Describes a single location.
   */
  export type Location = {
    address: string
    postalCode: string
    city: string
    countryCode: string
    region: string
  }

  /**
   * Describes a single social profile.
   */
  export type SocialProfile = {
    network: string
    username: string
    url: string
  }

  /**
   * Describes basic personal details.
   */
  export type Basics = {
    name: string
    label: string
    picture: string
    email: string
    phone: string
    website: string
    summary: string
    location: Location
    profiles: SocialProfile[]
  }

  /**
   * Describes a single work experience.
   */
  export type Work = {
    company: string
    position: string
    website: string
    startDate: string
    endDate?: string
    summary: string
    highlights: string[]
  }

  /**
   * Describes a single volunteer experience.
   */
  export type Volunteer = {
    organization: string
    position: string
    website: string
    startDate: string
    endDate?: string
    summary: string
    highlights: string[]
  }

  /**
   * Describes a single education experience.
   */
  export type Education = {
    institution: string
    area: string
    studyType: string
    startDate: string
    endDate?: string
    gpa: string
    courses: string[]
  }

  /**
   * Describes a single award.
   */
  export type Award = {
    title: string
    date: string
    awarder: string
    summary: string
  }

  /**
   * Describes a single publication.
   */
  export type Publication = {
    name: string
    publisher: string
    releaseDate: string
    website: string
    summary: string
  }

  /**
   * Describes a single skill.
   */
  export type Skill = {
    name: string
    level?: string
    keywords?: string[]
  }

  /**
   * Describes a single language.
   */
  export type Language = {
    language: string
    fluency: string
  }

  /**
   * Describes a single interest.
   */
  export type Interest = {
    name: string
    keywords?: string[]
  }

  /**
   * Describes a single reference.
   */
  export type Reference = {
    name: string
    reference: string
  }

  /**
   * Describes the whole content of the resume structure.
   */
  export type Resume = {
    basics: Basics
    work: Work[]
    volunteer: Volunteer[]
    education: Education[]
    awards: Award[]
    publications: Publication[]
    skills: Skill[]
    languages: Language[]
    interests: Interest[]
    references: Reference[]
  }
}

