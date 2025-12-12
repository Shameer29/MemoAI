#!/bin/bash

# Ensure we are in the script's directory (frontend)
cd "$(dirname "$0")"

# Check if there are changes
if [ -n "$(git status --porcelain)" ]; then
  echo "📦 Changes detected. Staging files..."
  git add .
  
  echo "📝 Committing changes..."
  # Use the first argument as commit message, or default to "Update"
  MSG="${1:-Update frontend code}"
  git commit -m "$MSG"
  
  echo "🚀 Pushing to GitHub..."
  git push origin main
  
  echo "✅ Done! Changes pushed to https://github.com/Shameer29/MemoAI"
else
  echo "✨ No changes to push."
fi
