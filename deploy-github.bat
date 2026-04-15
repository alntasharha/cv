@echo off
cd /d "C:\Users\Dell\OneDrive\Documents\Mes projets\AL"
echo Initialisation du repository Git...
git init
git add .
git config user.email "amani@example.com"
git config user.name "Amani Ntasharha"
git commit -m "Initial commit - CV Amani Ntasharha Albin"
git branch -M main
echo.
echo === INSTRUCTIONS POUR GITHUB ===
echo 1. Creez un nouveau repository sur https://github.com/new
echo 2. Nommez-le: amani-cv
echo 3. NE initialisez PAS avec README (laissez vide)
echo 4. Cliquez sur "Create repository"
echo 5. Copiez les commandes depuis la section "...or push an existing repository"
echo.
pause
