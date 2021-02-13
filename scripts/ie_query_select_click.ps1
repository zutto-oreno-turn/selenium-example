function querySelectorForSingle($node, [string]$selector)
{
    [System.__ComObject].InvokeMember("querySelector", [System.Reflection.BindingFlags]::InvokeMethod, $null, $node, $selector)
}

# get open ie11
$shell = New-Object -ComObject Shell.Application
$ie = $shell.Windows() |
    Where-Object { $_.Name -eq "Internet Explorer" } |
    Select-Object -First 1

# query select click
$element = querySelectorForSingle $ie.Document "div[data-nonce='866a69625a']"
$element.click()
while($ie.busy) {
  Start-Sleep -milliseconds 1000
}
Start-Sleep -Seconds 3
