#!/bin/sh

git add .
git commit -m "Aktualizacja całej apki"
git push -u origin

# Switch to the component directory
cd ./src/components/componentsWidgetSide

# Add and commit changes in the component repository
git add .
git commit -m "Aktualizacja Komponentu"

# Push changes to the component repository
git push -f gitorigin
