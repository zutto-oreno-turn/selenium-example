# get open ie11
$shell = New-Object -ComObject Shell.Application
$ie = $shell.Windows() |
    Where-Object { $_.Name -eq "Internet Explorer" } |
    Select-Object -First 1

# refresh
$ie.Refresh()
while($ie.busy) {
  Start-Sleep -milliseconds 1000
}
Start-Sleep -Seconds 3
