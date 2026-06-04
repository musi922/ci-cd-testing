#!/bin/bash
BRANCH=$(git rev-parse --abbrev-ref HEAD)
echo "Branch: $BRANCH"

if [[ "$BRANCH" =~ ^(main|release|develop)$ ]]; then
  echo "Permanent branch - validation skipped."
  exit 0
fi

if ! echo "$BRANCH" | grep -qP '^(feature|hotfix)/BTP-[0-9]+-[a-z0-9-]+$'; then
  echo ""
  echo "Branch-Name ungultig: $BRANCH"
  echo "Erwartet: feature/BTP-XX-beschreibung oder hotfix/BTP-XX-beschreibung"
  echo "Beispiele:"
  echo "  feature/BTP-42-entstoerung-ticket-ui"
  echo "  hotfix/BTP-201-null-pointer-prod"
  echo ""
  exit 1
fi

echo "Branch-Name gultig."