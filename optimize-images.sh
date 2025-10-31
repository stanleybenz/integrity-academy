#!/bin/bash
# Image optimization script using sips (macOS built-in)

cd "$(dirname "$0")"

echo "Optimizing hero images..."
for img in assets/images/hero/*.jpg; do
    if [ -f "$img" ]; then
        sips -Z 1920 "$img" > /dev/null 2>&1
        echo "  Optimized: $(basename "$img")"
    fi
done

echo "Optimizing facility images..."
for img in assets/images/facilities/*.jpg assets/images/facilities/*.JPG; do
    if [ -f "$img" ]; then
        sips -Z 1280 "$img" > /dev/null 2>&1
        echo "  Optimized: $(basename "$img")"
    fi
done

echo "Optimizing nursery images..."
for img in assets/images/nursery/*.jpg assets/images/nursery/*.JPG; do
    if [ -f "$img" ]; then
        sips -Z 1280 "$img" > /dev/null 2>&1
        echo "  Optimized: $(basename "$img")"
    fi
done

echo "Optimizing sports images..."
for img in assets/images/sports/*.jpg; do
    if [ -f "$img" ]; then
        sips -Z 1280 "$img" > /dev/null 2>&1
        echo "  Optimized: $(basename "$img")"
    fi
done

echo "Optimizing leadership portraits..."
for img in assets/images/leadership/*.jpg assets/images/leadership/*.JPG; do
    if [ -f "$img" ]; then
        sips -Z 800 "$img" > /dev/null 2>&1
        echo "  Optimized: $(basename "$img")"
    fi
done

echo "Done! All images optimized for web."

