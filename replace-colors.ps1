# Farb-Ersetzungs-Script für Grau-Orange Theme
# Datum: 2026-02-25

$srcPath = "F:\GTSH_BOS_ROOT\04_PROJEKTE\Websites\Website_Digital_Solutions_Clawdius\src"
$files = Get-ChildItem -Path $srcPath -Recurse -Include "*.jsx","*.css" | Where-Object { $_.Name -notlike "*BACKUP*" -and $_.Name -notlike "*GRAU-ORANGE*" }

$totalChanges = 0

foreach ($file in $files) {
    $content = Get-Content $file.FullName -Raw -Encoding UTF8
    $original = $content
    
    # Teal zu Orange
    $content = $content -replace 'teal-500', 'orange-500'
    $content = $content -replace 'teal-400', 'orange-400'
    $content = $content -replace 'teal-600', 'orange-600'
    $content = $content -replace 'teal-300', 'orange-300'
    
    # Blue zu Orange (CTAs/Buttons)
    $content = $content -replace 'blue-500', 'orange-500'
    $content = $content -replace 'blue-400', 'orange-400'
    $content = $content -replace 'blue-600', 'orange-600'
    
    # Gray zu Neutral
    $content = $content -replace 'gray-900', 'neutral-900'
    $content = $content -replace 'gray-800', 'neutral-800'
    $content = $content -replace 'gray-700', 'neutral-700'
    $content = $content -replace 'gray-400', 'neutral-400'
    $content = $content -replace 'gray-100', 'neutral-100'
    $content = $content -replace 'gray-50', 'neutral-50'
    
    if ($content -ne $original) {
        Set-Content -Path $file.FullName -Value $content -Encoding UTF8 -NoNewline
        Write-Output "Geändert: $($file.Name)"
        $totalChanges++
    }
}

Write-Output ""
Write-Output "=== FERTIG ==="
Write-Output "Dateien geändert: $totalChanges"
