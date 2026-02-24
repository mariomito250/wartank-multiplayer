<?PHP
if(isset($_GET[login])) {
  header('Content-Type: application/json;charset=utf-8');  
   $taikhoan = $_POST[taikhoan];
    $matkhau = $_POST[matkhau];
    $users = 'nguoichoi/'.$taikhoan.'.json';

if(!file_exists($users)){
echo 1;
} else
{
 $a = file_get_contents($users);
 $b = json_decode($a);
 if($b->users->matkhau != md5($matkhau)) {
     echo 2;
 } else {
 echo $a;
 }
}
}
if(isset($_GET[regchoi])) {
    $taikhoan = $_POST[taikhoan];
    $matkhau = $_POST[matkhau];
$users = 'nguoichoi/'.$taikhoan.'.json';

if (!preg_match('/^[a-z0-9]{3,15}$/', $taikhoan)) {
    $msg = 'Tài khoản của bạn phải phải từ 3-15 kí tự,và chỉ được dùng chữ thường,không kí tự đặc biệt,in hoa. ';
} else

if (!preg_match('/^[a-z0-9]{3,15}$/', $matkhau)) {
    $msg = 'Mật khẩu của bạn phải phải từ 3-15 kí tự,và chỉ được dùng chữ thường,không kí tự đặc biệt,in hoa. ';
}
else
if(file_exists($users)){
$msg = 'Tài khoản đã tồn tại ! vui lòng thử tài khoản khác.';
}else{
 
 $my->users->id = rand(100000,999999999);
 $my->users->username = 'newplay'.rand(100000,999999).'';
 $my->users->skin = 'GreenRed.png';
  $my->users->amthanh = '1';

 $my->users->taikhoan = $taikhoan;
 $my->users->viettat = '';
 $my->users->matkhau = md5($matkhau);
 $my->users->pokemon = '';
 $my->users->nhiemvu->id='1';
 $my->pokemon = [];
 $my->setkinang = [];
  $my->vatpham = [];
 $my->users->xu = '0';
 $my->users->ruby='0';
 $my->users->level='0';
 $my->users->{'exp'} = '0';
 $my->users->expmax='0';
 $my->users->co = '0';
 $my->click = '{}';
  $my->buff = '{}';
  $my->pk = '{}';
$my->ruong = [];
$my->khodo->ruong = 10;
$my->khodo->kho = 20;
$my->camdi=0;
$my->camdanh=0;
$my->auto = [];
$my->buff = [];
$my->trangbi = [];
$my->thoitrang = [];
$my->nhatvatpham = [];
$my->users->thucan->ducnghia  =1;
$my->users->thoitrang='GreenRed.png';
$my->lichsu = [];
$my->qua->id = 1;

 $my->users->x = '18';
 $my->users->y = '17';
 $my->users->map = '1';
 $my->users->mapname = 'vi';
 $my->save->x = '18';
 $my->save->y = '17';
 $my->save->map = 'vi';
 $my->chiso->hp = '0';
 $json = json_encode($my);
$index = fopen('nguoichoi/'.$taikhoan.'.json', 'w' );
fwrite ($index, $json);
fclose ($index);
 $msg = 'Đăng kí thành công. Chúc bạn chơi game vui vẻ.';
}
$ab[ducnghia] = $msg;
echo json_encode($ab);
}