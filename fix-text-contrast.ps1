# Text-Kontrast-Fix für bessere Lesbarkeit im Dark Mode
# Datum: 2026-02-25

$srcPath = "F:\GTSH_BOS_ROOT\04_PROJEKTE\Websites\Website_Digital_Solutions_Clawdius\src"
$files = Get-ChildItem -Path $srcPath -Recurse -Include "*.jsx" | Where-Object { $_.Name -notlike "*BACKUP*" }

$totalChanges = 0

foreach ($file in $files) {
    $content = Get-Content $file.FullName -Raw -Encoding UTF8
    $original = $content
    
    # Dark Mode Text-Farben heller machen
    # gray-300 -> gray-100 (heller)
    $content = $content -replace 'dark:text-gray-300', 'dark:text-gray-100'
    
    # gray-400 -> gray-200
    $content = $content -replace 'dark:text-gray-400', 'dark:text-gray-200'
    
    # neutral-400 -> neutral-200
    $content = $content -replace 'dark:text-neutral-400', 'dark:text-neutral-200'
    
    # neutral-500 -> neutral-300
    $content = $content -replace 'dark:text-neutral-500', 'dark:text-neutral-300'
    
    if ($content -ne $original) {
        Set-Content -Path $file.FullName -Value $content -Encoding UTF8 -NoNewline
        Write-Output "Text-Kontrast verbessert: $($file.Name)"
        $totalChanges++
    }
}

Write-Output ""
Write-Output "=== FERTIG ==="
Write-Output "Dateien geändert: $totalChanges"
