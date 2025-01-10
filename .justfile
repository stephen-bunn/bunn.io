_default: dev

# Initial project setup
setup:
  npm install

# Run the development application
serve:
  npm run dev

# Run and open the development application
dev:
  npm run dev -- --open

# Format and lint the current source
format:
  npm run format
  npm run lint

# Check the current source
check:
  npm run check

# Build the production application
build: format check
  npm run build

# Build and preview the production application
preview: build
  npm run preview -- --open
