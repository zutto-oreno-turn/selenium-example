# get open ie11
$shell = New-Object -ComObject Shell.Application
$ie = $shell.Windows() |
    Where-Object { $_.Name -eq "Internet Explorer" } |
    Select-Object -First 1

# point click
$element = $ie.Document.elementFromPoint($json.click.x, $json.click.y)
$element.click()
while($ie.busy) {
  Start-Sleep -milliseconds 1000
}
Start-Sleep -Seconds 3
