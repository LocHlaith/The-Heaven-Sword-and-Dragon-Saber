$ErrorActionPreference = 'Stop'

python prepare-images.py
if ($LASTEXITCODE -ne 0) { throw 'Image preparation failed.' }
node generate-content.js
if ($LASTEXITCODE -ne 0) { throw 'Content generation failed.' }
xelatex -interaction=nonstopmode -halt-on-error main.tex
if ($LASTEXITCODE -ne 0) { throw 'First XeLaTeX pass failed.' }
biber main
if ($LASTEXITCODE -ne 0) { throw 'Biber failed.' }
xelatex -interaction=nonstopmode -halt-on-error main.tex
if ($LASTEXITCODE -ne 0) { throw 'Second XeLaTeX pass failed.' }
xelatex -interaction=nonstopmode -halt-on-error main.tex
if ($LASTEXITCODE -ne 0) { throw 'Final XeLaTeX pass failed.' }
$finalName = (-join @(
  [char]0x79D1, [char]0x666E, [char]0x4F5C, [char]0x54C1,
  [char]0x8BF4, [char]0x660E, [char]0x6587, [char]0x6863
)) + '.pdf'
Copy-Item -LiteralPath 'main.pdf' -Destination $finalName -Force

Write-Host "Build complete: paper/$finalName"
