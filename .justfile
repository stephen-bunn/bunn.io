_default: dev

env := '''
CI=false
GITHUB_RUN_ID=""
GITHUB_SERVER_URL=""
GITHUB_REPOSITORY=""
'''

# Write the default environment variables to .env
setup-env:
  @echo "{{BOLD}}Writing .env"
  @echo "{{env}}" > .env

# Initial project setup
setup: setup-env
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

# Preview the production application
preview:
  npm run preview -- --open
