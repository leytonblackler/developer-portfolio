#!/bin/bash

# Since Safari does not currently support the Noto Color Emoji font, emoji
# must instead be rendered as SVGs for cross-browser compatibility.
#
# This script accepts an emoji as input, and handles downloading the corresponding
# SVG for the emoji from the Noto Color Emoji font GitHub repository.

set -e

if [ -z "$1" ]; then
  echo "Usage: ./scripts/download-emoji.sh '👋'"
  exit 1
fi

EMOJI="$1"
OUTPUT_DIR="./public/emoji"
mkdir -p "$OUTPUT_DIR"

# Convert emoji to UTF-32 hex codepoint(s), hyphen-separated, excluding variation selectors (0xFE0F)
HEX=$(python3 -c "print('-'.join(f'{ord(c):x}' for c in '$EMOJI' if ord(c) != 0xfe0f))")
FILENAME="emoji_u$(echo "$HEX" | tr '-' '_').svg"

# URL to the raw SVG file on GitHub
URL="https://raw.githubusercontent.com/googlefonts/noto-emoji/main/svg/$FILENAME"

# Output file path
DEST="$OUTPUT_DIR/$FILENAME"

echo "Downloading $EMOJI ($FILENAME) from $URL..."
curl -sSfL "$URL" -o "$DEST" && echo "Saved to $DEST"