export default defineNitroPlugin(nitroApp => {
  nitroApp.hooks.hook('content:file:afterParse', file => {
    if (file._extension === 'md') {
      file.year = new Date(file.date).getFullYear()
    }
  })
})
