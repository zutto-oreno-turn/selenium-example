$out_dir = 'C:\\Users\\koiyamam\\Documents\\GitHub\\regression\\output\\image\\'
$param_path = 'C:\Users\koiyamam\Documents\GitHub\regression\output\param\' + $param + '.json'

$json = ConvertFrom-Json -InputObject (Get-Content $param_path -Raw)

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

# open
$ie.navigate($json.url)
while($ie.busy) {
  Start-Sleep -milliseconds 1000
}
Start-Sleep -Seconds 5

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
$bitmap.Save($out_dir + $param + '-' + $json.now + '.jpg', $jpegCodec, $ep)

$ie.Quit()
$ie = $null
