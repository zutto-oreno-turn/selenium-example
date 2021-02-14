# マウス座標取得
[void] [System.Reflection.Assembly]::LoadWithPartialName("System.Windows.Forms") 
Start-Sleep -s 1

$X = [System.Windows.Forms.Cursor]::Position.X
$Y = [System.Windows.Forms.Cursor]::Position.Y

Write-Output "X: $X | Y: $Y"
Read-Host


# マウス座標クリック
[void] [System.Reflection.Assembly]::LoadWithPartialName("System.Drawing") 
[void] [System.Reflection.Assembly]::LoadWithPartialName("System.Windows.Forms") 

$signature=@'
[DllImport("user32.dll",CharSet=CharSet.Auto,CallingConvention=CallingConvention.StdCall)]
public static extern void mouse_event(long dwFlags, long dx, long dy, long cButtons, long dwExtraInfo);
'@

$SendMouseClick = Add-Type -memberDefinition $signature -name "Win32MouseEventNew" -namespace Win32Functions -passThru

# mouse move
[System.Windows.Forms.Cursor]::Position = New-Object System.Drawing.Point(500, 300)
Start-Sleep -s 1

# mouse click
$SendMouseClick::mouse_event(0x00000002, 0, 0, 0, 0); # left down
$SendMouseClick::mouse_event(0x00000004, 0, 0, 0, 0); # left up

Start-Sleep -s 1

# mouse click
# ie11で画面描画中の場合は2回クリックしないといけない場合があります
$SendMouseClick::mouse_event(0x00000002, 0, 0, 0, 0); # left down
$SendMouseClick::mouse_event(0x00000004, 0, 0, 0, 0); # left up

Start-Sleep -s 1
