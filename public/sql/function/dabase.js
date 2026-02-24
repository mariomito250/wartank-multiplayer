/*
Tác giả : DucNghia
*/
///canvas///
function setdata(key, value) {
            var expires = new Date();
            expires.setTime(expires.getTime() + (100 * 24 * 60 * 60 * 1000));
            document.cookie = key + '=' + value + ';expires=' + expires.toUTCString();
        }

        function getdata(key) {
            var keyValue = document.cookie.match('(^|;) ?' + key + '=([^;]*)(;|$)');
            return keyValue ? keyValue[2] : null;
        }
        function cookie(key) {
            return getdata(key);
        }
var caidat = {
    ip : '',
    hieuung : cookie('hieuung') !== null ? cookie('hieuung') : 1 ,
    cauhinh : cookie('cauhinh') !== null ? cookie('cauhinh') : 1 , 
    play : cookie('play') !== null ? cookie('cauhinh') : 0 , 
    npc : cookie('npc') !== null ? cookie('npc') : 0 , 
    skill : cookie('skill') !== null ? cookie('skill') : 0 , 
    
    load : 0 , block : 0 , 
    ngonngu : cookie('ngonngu') !== null ? cookie('ngonngu') : 'vi' , 
    mmo : Date.now()};
var socket = io.connect(caidat.ip);
function mahoa(code) {
    return jsonpack.pack(code);
}
function giaima(code) {
    return jsonpack.unpack(code);
}
var userID = '';
var dabase_chat = [];

function settimezone(id) {
    timephp.time = id;
}
var timephp = { time : 0 , load : 0};
function date() {
   
    return timephp.time;

}




function cai_datgame(id) {
    
    if(id==1) {
        if (caidat.hieuung==1)
	{
		caidat.hieuung =0;
}
else
{
		caidat.hieuung =1;

}
    }
    
    if(id==2) {
        if (caidat.cauhinh==1)
	{
		caidat.cauhinh =0;
}
else
{
		caidat.cauhinh =1;

}
    }
    if(id==3) {
        if (caidat.play==1)
	{
		caidat.play =0;
}
else
{
		caidat.play =1;

}
    }
    
    if(id==4) {
        if (caidat.npc==1)
	{
		caidat.npc =0;
}
else
{
		caidat.npc =1;

}
    }
    if(id==5) {
        if (caidat.skill==1)
	{
		caidat.skill =0;
}
else
{
		caidat.skill =1;

}
    }
    setdata('cauhinh',caidat.cauhinh);
    setdata('hieuung',caidat.hieuung);
    setdata('play',caidat.play);
    setdata('npc',caidat.npc);
    setdata('skill',caidat.skill);

    game_hanhtrang(5);
}


function savengonngu() {
  $.nghia({
	url : '/data/vietsub.php',
	type : 'POST',
	data : {duc : JSON.stringify(vietsub)  },
	
ducnghia : function(data){
	    
	  
}
});         
}

function layngonngu(text) {
    for(var c=0;c<vietsub.length;c++) {
      if(vietsub[c].vi == text) {
          return vietsub[c].en;
      } 
     
    }
     return null;
}
function t(text) {
    return vi(text);
}
function hd(text,text2) {
    
 	    huongdan.push({title : text , text : text2 , id : rand(100000,999999)  });

$.nghia({
	url : '/data/huongdan.php',
	type : 'POST',
	data : {duc : JSON.stringify(huongdan)  },
	
ducnghia : function(data){
	    
	  
}
});     


}

var chodich = [];




function ngonngu() {
    giaotiep('What language do you want to choose? You can edit the language in settings when playing games.');
        	$("#npc_menu").html('<b onclick="lau(\'vi\')" class="viptxt nutchat">Tiếng Việt</b><b onclick="lau(\'en\')" class="viptxt nutchat">English</b>');
  
}
function cauinhtrochoi(btn)
{
	if (caidat.cauhinh==1)
	{
		btn.value = "Thấp";
		caidat.cauhinh =0;

	}
	else
	{
		btn.value = "Cao";
		caidat.cauhinh =1;

	}
}
var gameimgload =  [];
 var elem = document.getElementById('cvsGame'),
    elemLeft = elem.offsetLeft,
    elemTop = elem.offsetTop,
    context = elem.getContext('2d'),
    elements = [];
    elem.addEventListener('click', function(event) {
    var x = event.pageX - elemLeft,
        y = event.pageY - elemTop;
    elements.forEach(function(element) {
        if (y > element.top && y < element.top + element.height && x > element.left && x < element.left + element.width) {
            console.log('click id'+element.id);
        }
    });

}, false);
/*
elements.push({
    id : 1,
    colour: '#05EFFF',
    width: 55,
    height: 100,
    top: 50,
    left: 15
});
*/
function checkloadgame(id) {
   for(var k=0;k<gameimgload.length;k++) {
				if( gameimgload[k].img == id ) {
					return gameimgload[k];
				}
			}

return null;
   
}

function check_canvas(id) {
  for(var k=0;k<elements.length;k++) {
				if( elements[k].id == id ) {
					return elements[k];
				}
			}
			return null;       
}

///done
	var charsetLoadedCount = 0;
	var charsets = new Array();

function loadedSprite() {
		charsetLoadedCount++;
	}
function addCharset(imgURL) {
		var newImage = new Image();
		newImage.src = imgURL;
		newImage.onload = loadedSprite;
		charsets.push(newImage);

	}
	
	function game_canvas_key(e) {
	    if(camdi!=1) {
    if(+my.users.pokemon >=1) {
    ///chose skill
    if(e.keyCode == 49 || e.keyCode == 97 && updatekinang(1) !==null) {
      game_chorse(1); 
    }
    if(e.keyCode == 50 || e.keyCode == 98 && updatekinang(2) !==null) {
      game_chorse(2); 
    }
    if(e.keyCode == 51 || e.keyCode == 99 && updatekinang(3) !==null) {
      game_chorse(3); 
    }
    if(e.keyCode == 52 || e.keyCode == 100 && updatekinang(4) !==null) {
      game_chorse(4); 
    }
    if(e.keyCode == 53 || e.keyCode == 101 && updatekinang(5) !==null) {
      game_chorse(5); 
    }
    }
    
    ///done
    ///chorse postion
    if(e.keyCode == 113) {
        timkiem(1);
    }
//chorso enter
    if (e.keyCode == 13) {
        if(my.click.id !==0 && getuser(my.click.id) !== null && my.click.type =="users") {
            pvp(my.click.id);
        } else
        if(my.click.id !==0 && getnpc(my.click.id) !== null && my.click.type =="pokemon") {
            if(+getnpc(my.click.id).hp >=1) {
                att(my.click.id);
              
              
               
            }
            
            else if(+getnpc(my.click.id).idvp >=1) {
                nhatvp(my.click.id);
            }
            
            else if(getnpc(my.click.id).eventData[0].func== "DISPLAY MESSAGE") {
                noichuyen(my.click.id);
            }
             else {
                      keyState.btn1 = true;
 
            }
        } else {
       keyState.btn1 = true;
        }
    }
}
}

document.onkeydown = game_canvas_key;

$.fn.attachDragger = function(){
    var attachment = false, lastPosition, position, difference;
    $( $(this).selector ).on("mousedown mouseup mousemove",function(e){
        if( e.type == "mousedown" ) attachment = true, lastPosition = [e.clientX, e.clientY];
        if( e.type == "mouseup" ) attachment = false;
        if( e.type == "mousemove" && attachment == true ){
            position = [e.clientX, e.clientY];
            difference = [ (position[0]-lastPosition[0]), (position[1]-lastPosition[1]) ];
            $(this).scrollLeft( $(this).scrollLeft() - difference[0] );
            $(this).scrollTop( $(this).scrollTop() - difference[1] );
            lastPosition = [e.clientX, e.clientY];
        }
    });
    $(window).on("mouseup", function(){
        attachment = false;
    });
}

$(document).ready(function(){
 $("#box_center").attachDragger();
  $("#ducnghia_menu_giaotiep").attachDragger();
  $("#ducnghia_giaotiep").attachDragger();
  $("#ducnghia_npc").attachDragger();


});


function vi(text) {
    if(vietsub.length<=0) {
     //   khach();
    }
    if(timephp.time <=0) {
     $.nghia({
	url : '/data/time.php',
	type : 'POST',
ducnghia : function(data){
	timephp.time =    data;
}
});        
    }
    if(caidat.ngonngu == 'vi') {
        return text;
    }
    if(text.length <=1) {
        return '...';
    }
    if(layngonngu(text) !== null) {
        return layngonngu(text);
    }
     
     for(var c=0;c<chodich.length;c++) {
      if(chodich[c].vi == text) {

          return text;
      } 
     
    }
         chodich.push({vi : text });

 $.nghia({
	url : 'http://translateapi.howtofixthis.com/',
	type : 'GET',
	data : {text : text , sourceLanguage : 'vi' , targetLanguage : 'en'  },
ducnghia : function(data){
    if(layngonngu(text) === null) {
 	    vietsub.push({vi : text , en : data.translateText   });
 	      socket.emit("ngonngu",{  vi : text , en : data.translateText  });	
 	 
 	       	    savengonngu();

for(var c=0;c<chodich.length;c++) {
      if(chodich[c].vi == text) {
          	chodich.splice(c, 1);
      } 
     
    }
}
	  return data.translateText;
}
});   
return text;

}

var maychu = {
    exp : 1,
    xu : 1,
    active : 1,
    notice : t('Chào mừng bạn tới PokeMon Biến hình ! Chúc bạn chơi game vui vẻ.'),
    faillogin : 'Không thể kết nối tới máy chủ ! Xin vui lòng kiểm tra dữ liệu Wifi/3G/4G',
    tip : '<br> Hoàn tất bảo trì ! Khắc phục server giảm từ 300 ping => 20-50 ping. <br> + Cập nhật nạp thẻ tại menu hoặc NPC Cướp Biển <br> + Cập nhật vật phẩm tẩy tiềm năng cho pokemon <br> + Cập nhật vật phẩm tẩy điểm kĩ năng cho pokemon <br> Tất cả điều bán tại shop <Br> Cập nhật fix lỗi load lại trang ! <br> Kết thúc bảo trì cập nhật một số tính năng như : <Br> - Ẩn hiệu ứng kĩ năng <br> - Ẩn người chơi khác <Br> - Fix lag <br> Trưa nay sẽ thử nghiệm tính năng vòng quay <br> Chúc các bạn chơi game vui vẻ.<BR> <br> <font color="red"></b>NẾU BẠN NHẬP ĐÚNG TÀI KHOẢN, MẬT KHẨU MÀ VẪN KHÔNG ĐĂNG NHẬP ĐƯỢC XIN HÃY GỬI TIN NHẮN CHO <a href="//fb.com/ducnghiast">ADMIN</a> ĐỂ ĐƯỢC HỖ TRỢ.</font></b> ',
    tiplogin : 'Các bạn là người chơi mới : hãy mở RƯƠNG ĐỒ => CÀI ĐẶT => HƯỠNG DẪN TÂN THỦ để hiểu hơn nhé.<br>Để đổi tên vui lòng vào Hành Trang => Cài đặt => Đổi tên<br>Để xem cách bắt pokemon Vui lòng click vào đây : <a href="https://youtu.be/W7itu5tff44">https://youtu.be/W7itu5tff44</a> <iframe width="auto" height="auto" src="https://www.youtube.com/embed/W7itu5tff44" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
};

