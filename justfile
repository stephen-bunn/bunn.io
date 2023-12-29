_default: dev

# Run the development application
dev:
  npm run dev -- --open

# Format and lint the current source
format:
  npm run format
  npm run lint

# Build the production application
build:
  @just format
  npm run build

# Build and preview the production application
preview:
  @just build
  npm run preview -- --open
