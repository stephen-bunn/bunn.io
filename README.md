# bunn.io

Stephen Bunn's personal website.
Available under the domain [bunn.io](https://bunn.io).

## Setup

This project makes use of [just](https://github.com/casey/just) for command execution.

```bash
# Install dependencies
npm install

# Start dev application
just dev
# or npm run dev
```

The site is built and published on commits to the `master` branch via GitHub Actions.

## Building Production

If you are building the application locally for production, you will need to create a `.env.local` file in the root of this project with the following contents:

```bash
CI=false
GITHUB_SERVER_URL=
GITHUB_REPOSITORY=
GITHUB_RUN_ID=
```
