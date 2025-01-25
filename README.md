# bunn.io

My personal site available at [bunn.io](https://bunn.io/).

## Development

Automation is provided through [just](https://github.com/casey/just) recipes.

```bash
# Setup the development environment
just setup

# Spin up the local development server
just serve

# Spin up the local development server and open it up in the default browser
just dev
```

### Building for production

```bash
# Build the site assets to the /build directory
just build

# Build and run a local server for the assets in the /build directory
just preview
```

## Writing

Posts should be created as `{slug}.svx` files within the `/src/routes/posts` directory.
This is where the entry crawler will be able to find dynamically created markdown files (using the `.svx` extension) and appropriately register them for static page generation.

For a post to be considered valid and published it must contain YAML frontmatter entries for both `title` and `published` (ISO8601 UTC).

```yaml
title: My post title
published: 2025-01-25T13:00:00
```
