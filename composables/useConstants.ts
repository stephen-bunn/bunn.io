export const useConstants = () => {
  return {
    displayName: 'Stephen Bunn',
    profilePictureSrc:
      'https://gravatar.com/avatar/02651d15ffdc3bb8e7cb4d20b33b7f1c?s=512',
    profilePictureAlt: 'Portrait of Stephen Bunn',
    repositoryUrl: 'https://github.com/stephen-bunn/bunn.io',
  } as const
}
