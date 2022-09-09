import resume from '~/assets/resume.json'

export const useResume = () => {
  return useState('resume', () => resume)
}
