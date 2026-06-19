$ErrorActionPreference = 'Stop'

python prepare-images.py
node generate-content.js
xelatex -interaction=nonstopmode -halt-on-error main.tex
biber main
xelatex -interaction=nonstopmode -halt-on-error main.tex
xelatex -interaction=nonstopmode -halt-on-error main.tex
$finalName = (-join @(
  [char]0x79D1, [char]0x666E, [char]0x4F5C, [char]0x54C1,
  [char]0x8BF4, [char]0x660E, [char]0x6587, [char]0x6863
)) + '.pdf'
Copy-Item -LiteralPath 'main.pdf' -Destination $finalName -Force

Write-Host "Build complete: paper/$finalName"
