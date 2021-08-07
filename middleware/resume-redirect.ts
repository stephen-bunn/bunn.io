import { Middleware } from '@nuxt/types'

const resumeRedirect: Middleware = ({ redirect }) => {
  redirect('/resume')
}

export default resumeRedirect
