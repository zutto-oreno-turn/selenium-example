Param($id, $path)

# init
$ie = New-Object -ComObject InternetExplorer.Application
$ie.Visible    = $true
$ie.StatusBar  = $false
$ie.ToolBar    = $false
$ie.MenuBar    = $false
$ie.AddressBar = $true

# window max
$dll_info = '[DllImport("user32.dll")] public static extern bool ShowWindowAsync(IntPtr hWnd, int nCmdShow);'
Add-Type -MemberDefinition $dll_info -Name NativeMethods -Namespace Win32
[Win32.NativeMethods]::ShowWindowAsync($ie.HWND, 3) | Out-Null

# window active
Add-Type -AssemblyName Microsoft.VisualBasic
$window_process = Get-Process -Name "iexplore" | ? {$_.MainWindowHandle -eq $ie.HWND}
[Microsoft.VisualBasic.Interaction]::AppActivate($window_process.ID) | Out-Null

# open
$ie.navigate('https://www.zutto-oreno-turn.com/')
while($ie.busy) {
  Start-Sleep -milliseconds 1000
}
Start-Sleep -Seconds 3

# capture
Add-Type -AssemblyName System.Drawing, System.Windows.Forms
$jpegCodec = [Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() | Where-Object { $_.FormatDescription -eq "JPEG" }
Start-Sleep -Milliseconds 250
[Windows.Forms.Sendkeys]::SendWait("%{PrtSc}")
Start-Sleep -Milliseconds 250

# save
$bitmap = [Windows.Forms.Clipboard]::GetImage()
$ep = New-Object Drawing.Imaging.EncoderParameters
$ep.Param[0] = New-Object Drawing.Imaging.EncoderParameter ([System.Drawing.Imaging.Encoder]::Quality, [long]100)
$bitmap.Save('./output/' + $path + '-' + $id + '.jpg', $jpegCodec, $ep)

$ie.Quit()
$ie = $null
