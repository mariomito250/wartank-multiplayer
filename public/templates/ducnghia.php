<?php
define('ROOT', dirname(dirname(__FILE__)) . DIRECTORY_SEPARATOR);
if(isset($_POST)){
foreach($_POST as $index => $value){
if(is_string($_POST[$index])){
if($index != 'msg' AND $index != 'onclick' AND $index != 'text' AND $index != 'url' AND $index != 'cmd' AND $index != 'data0' AND $index != 'data1' AND  $index != 'data2' AND $index !='data3'  AND $index !='users') {
$_POST[$index]=mysql_real_escape_string($_POST[$index]);
}
}
}
}
if(isset($_GET)){
foreach($_GET as $index => $value){
if(is_string($_GET[$index])){
$_GET[$index]=mysql_real_escape_string($_GET[$index]);
}
}
}
function tron($x) {
    return number_format($x);
}

function bug($ducnghia_check){
	$ducnghia_dove=addslashes($ducnghia_check);
	return $ducnghia_dove;
}
function BBCODE($text,$forum = false){
	$text = htmlspecialchars($text);
        $SMILE_FOLD = glob(ROOT.'/style/images/smileys/*.gif', GLOB_BRACE);
        $SMILE_TOTAL = count($SMILE_FOLD);

            for ($i = 0; $i < $SMILE_TOTAL; $i++) {
				$new = basename($SMILE_FOLD[$i]);
				$new = str_replace('.gif','',$new);
				$text = str_replace($new,'<img src="/style/images/smileys/'.$new.'.gif">',$text);
            }
$find = array(
'~\[dam\](.*?)\[/dam\]~s',
'~\[red\](.*?)\[/red\]~s',
'~\[blue\](.*?)\[/blue\]~s',

'~\[b\](.*?)\[/b\]~s',
'~\[i\](.*?)\[/i\]~s',
'~\[u\](.*?)\[/u\]~s',
'~\[color=(.*?)\](.*?)\[/color\]~s',
'~\[url=((?:ftp|https?)://.*?)\](.*?)\[/url\]~s',
'~\[img\](https?://.*?)\[/img\]~s',
'~\[onclick=(.*?)\](.*?)\[/onclick\]~s',
'~\[div](.*?)\[/div\]~s'

);
 $replace = array(
     '<b class="viptxt">$1</b>',
     '<font color="red">$1</font>',
     '<font color="blue">$1</font>',

'<b>$1</b>',
 
'<i>$1</i>',
 
'<span style="text-decoration:underline;">$1</span>',
 
'<span style="color:$1;">$2</span>',
 
'<a href="$1">$2</a>',
 
'<img src="$1" alt="" />',

'<b onclick="$1" class="viptxt">$2</b>',
'<p class="$1"></p>'

 
);
 
// Thay thế
 
return preg_replace($find,$replace,$text);
			
}


function demkytu($kytu,$text){
$chars=str_split($text);
$count=0;
foreach($chars as &$char)
{
    if($char==$kytu)
    {
  $count++;
    }
}
return $count;
}
function smileys($element){
			$SMILE_FOLD = glob(ROOT.'/style/images/smileys/*.gif', GLOB_BRACE);
        $SMILE_TOTAL = count($SMILE_FOLD);
            for ($i = 1; $i < $SMILE_TOTAL; $i++) {
				$new = basename($SMILE_FOLD[$i]);
				$new = str_replace('.gif','',$new);
				$HEADER_modal .= ' '.str_replace($new,'<a href="javascript:smile(\''.$new.'\',\''.$element.'\');"><img src="/style/images/smileys/'.$new.'.gif"></a>',$new);
            }
			return $HEADER_modal;
}
function files($dirname)

{

    $total_files=0;

     

    if(is_dir($dirname))

    {

        $dp=opendir($dirname);

         

        if($dp)

        {

            while(($filename=readdir($dp)) == true)

            {

                if(($filename !=".") && ($filename !=".."))

                {

                    $total_files++;

                }

            }

        }

    }

     

     

    return $total_files;

}

function rand_string($length) {
$chars ="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
$size = strlen($char);
for($i = 0; $i<$length; $i++) {
$str .= $chars[rand(0, $size -1)];
$str=substr(str_shuffle($chars), 0, $length);
}
return$str;
}



function trangbi($id) {
          $tb1=mysql_fetch_array(mysql_query("SELECT * FROM `trangbi` WHERE `id` = '$id'"));
return $tb1;
}



//Tabel welke pokemon level je tegenkomt








function nick($gid){
 return   ducnghia_us($gid);
}

function ducnghia_us($gid){
	$gunner = mysql_fetch_assoc(mysql_query("SELECT * FROM `users` WHERE `id` = $gid"));
$tkm = $gunner;

if(empty($tkm[name])) {$tennv =ucfirst($gunner['username']);}else{ $tennv =ucfirst($gunner['name']);}

if($tkm[admin]==1)  {
    $chuc = 'style="background-image: url(img/2.gif);width:350px;"'; $ma = 'mod'; }
    if($tkm[admin]==2) {
    $chuc = '[GM]'; }
    if($tkm[admin]==3) {
        $chuc .= 'style="background-image: url(img/backround3.gif);width:350px;"';
        $ma = 'admin';
    }

if($tkm[ducnghia_thoigiankhoa] > time()) {
return '<a href="javascript:ttnv('.$gid.')" style="color:#190B07;"><strike>'.$tennv.'</strike></a>'; 
} else {
	return '<b onclick="ttnv('.$gid.')"  class="'.$ma.'" '.$chuc.'>'.$tennv.'</b>'; }
   
	
	
	}
	
	
function ducnghia_usa($gid){
	global $_con;
	$gunner = mysql_fetch_assoc(mysqli_query($_con,"SELECT * FROM `users` WHERE `id` = $gid"));

	return '<b style="color:#E91E63;">'.ucfirst($gunner['username']).'</b>';
   
	
	
	}
	
	function users($gid){
	$gunner = mysql_fetch_assoc(mysql_query("SELECT * FROM `users` WHERE `id` = $gid"));

	return ''.ucfirst($gunner['username']).'';
   
	
	
	}
	










	  
	  





