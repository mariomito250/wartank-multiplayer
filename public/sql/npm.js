function myIcon(str) {
    var a = '<img src="/img/app/bbcode/';
    var b = '.gif" >';


str = str.replace(/\:d/g,	 a + "=)"  + b);
str = str.replace(/\:D/g,	 a + "=D"  + b);
str = str.replace(/\:p/g,	 a + "=D"  + b);

  	return str;
}

function MakeArray(n){
  this.length=n;
  for(var i=1; i<=n; i++) this[i]=i-1;
  return this
}

hex=new MakeArray(16);
hex[11]="A"; hex[12]="B"; hex[13]="C"; hex[14]="D";
hex[15]="E"; hex[16]="F";

function ToHex(x){   // Changes a int to hex (in the range 0 to 255)
  var high=x/16;
  var s=high+"";        //1
  s=s.substring(0,2);   //2 the combination of these = trunc funct.
  high=parseInt(s,10);  //3
  var left=hex[high+1]; // left part of the hex-value
  var low=x-high*16;    // calculate the rest of the values
  s=low+"";             //1
  s=s.substring(0,2);   //2 the combination of these = trunc funct.
  low=parseInt(s,10);   //3
  var right=hex[low+1]; // right part of the hex-value
  var string=left+""+right; // add the high and low together
  return string;
}

function fadeout(text){
stringcolor = '';
  text=text.substring(3,text.length-4);
                         // gets rid of the HTML-comment-tags
  color_d1=255;          // any value in 'begin' 0 to 255
  mul=color_d1/text.length;
  var j=1;
for(i=0;i<text.length;i++){
   color_d1=255*Math.sin(i/(text.length/3));
   // some other things you can try>>
   // "=255-mul*i" to fade out, "=mul*i" to fade in,
   // or try "255*Math.sin(i/(text.length/3))"
   color_h1=ToHex(color_d1);
   color_d2=mul*i;
   color_h2=ToHex(color_d2);
   color_d3=mul*(text.length-i);
   color_h3=ToHex(color_d3);

      j = i;

  if (text.substring(i,i+1) == '&')
  {
        for (j = i+1; j < text.length; j++)
        {
               if (text.substring(j,j+1) == ';') { break; }
        }
        if (j == text.length) { j = i; }
  }

  if (text.substring(i,i+1) == '<')
  {
        for (j = i+1; j < text.length; j++)
        {
               if (text.substring(j,j+1) == '>') { break; }
        }
        if (j == text.length) { j = i; }
  }

   stringcolor += "<FONT COLOR='#"+color_h3+color_h1+color_h2+"' >"+
                  text.substring(i,j+1)+'</FONT>';
         i = j;
}
return stringcolor;
}
////////////////////////////////////////////////////////
////////////////////////////////////////////////////////
$(document).on('click',function(event){
    playSFX("click");
     var button = event.target;
    
 var ducnghia_n = button.id;
if(ducnghia_n =="cvsGame") {
    c_box();
    camdi =0;
    
}

if(ducnghia_n == "messageBox") {
    camdi=1;
}else{
   camdi=0; 
}

if(button.type == "text") {
    camdi=1;
} else
if(button.type == "number") {
    camdi=1;
} else {
camdi=0;
}
 
});



function chatMsg(ct) {
	ct = '<div class="menu list">' + myIcon(ct) + '</div>';
chat_1=	''+ct+''+chat_1+'';

	$("#chatConsole").html(chat_1);

}

function fixloi(ct) {

		ct = '<div class="menu list">' + myIcon(ct) + '</div>';
chat_2=	''+ct+''+chat_2+'';

	$("#fixloi").html(chat_2);
	
}

function chatm(ct) {


		ct = '<div class="menu list">' + myIcon(ct) + '</div>';
chat_3=	''+ct+''+chat_3+'';

	$("#playerList").html(chat_3);
	
}

function chatm0(ct) {
  if(ct.map==mapID) {
	$("#playerList").html(ct + $("#playerList").html());
	
	ct = '<div class="menu list">' + ct.username + ' : ' + ct.noidung + '</div>';
chat_3=	''+ct+''+chat_3+'';

	$("#playerList").html(chat_3);
	
  }
	
}
  ////chat


socket.on("socket_chat", function(ducnghiadzvc)	{
    if(ducnghiadzvc != "msg") {
updateChat(ducnghiadzvc); }

});

///ducnghia
var tatc = 0;
var boxchat = 0;
var tipchung = 0;
var tipmap = 0;
var tipfix = 0;

function doichat(idb) {
    boxchat = idb;
    game_chat(boxchat);
   if(idb == 0 && tipchung <= 0) {
       
           chatMsg("<font color='red'>Admin</font> : <b>Vui lòng nói chuyện văn minh, lịch sự.Tuyệt đối không cung cấp tài khoản mật khẩu cho người chơi khác..</b> ");
    tipchung =1;
   } 
   
    if(idb == 1 && tipmap <= 0) {
       
           chatm("<font color='red'>Admin</font> : <b>Chỉ những người chơi trong bản đồ mới thấy bạn chát.</b> ");
    tipmap =1;
   } 
   
   
   if(idb == 3 && tipfix <= 0) {
      
           fixloi("<font color='red'>Admin</font> : <b>Kênh này hiển thị chát riêng tư,tin nhắn từ kênh thế giới v.v </b> ");
    tipfix =1;
   } 
    
}

function chatMessage() {
    cl();
        camdi =0;

    var t = new Date();
    var time = t.toLocaleDateString() + "/" + t.toLocaleTimeString();
    //alert(time);
    var txt = $("#messageBox").val();
     txt2 = txt.split(" ");
     txt3 = txt.split("_");
     if(txt2[0]=="kick") {

    socket.emit("kick", txt2[1]);
                      fixloi("<font color='red'>DucNghia</font> : <b>Đã đuổi người chơi.</b>");
 
     }else   
    
     if(txt2[0]=="quai") {
  addquai();
  } else
     if(txt2[0]=="fix") {

  if(admin==1) {
      admin=0;
  } else {
      admin=1;
  }
}else    
if(txt2[0]=="box") {

 users();
}else    
if(txt2[0]=="pet") {

 pet(txt2[1]);   
}else    
if(txt2[0]=="caidat") {
caidat();    
}else 
if(txt2[0]=="game") {
control();    
}else 
if(txt2[0]=="admin") {
cp();    
}else         
if(txt2[0]=="menux") {
goirong(3);    
}else     
if(txt2[0]=="menu") {
    testo();
}else
    if(boxchat==3) {
 if(txt3[0]=="#") {
     
      $.ajax({
url : '/datalog/modu.php?sua',
type : 'POST',
data : {text : txt3[1]},
success : function(result){

}
});     
 }    else    
         if(txt2[0]=="load") {
    	        	loadMapEvents();

 } else  
  if(txt2[0]=="chat") {
     c(txt2[1])

 } else       
 
   if(txt2[0]=="map") {
     map(txt2[1],30,30,txt2[2])

 } else       
         if(txt2[0]=="admin") {

     admin =1;
 } else      
          if(txt2[0]=="pokemon") {

     mappokemon();
 } else      
         if(txt2[0]=="tao") {

     taodata();
 } else      
   if(txt2[0]=="data") {

     datamap();
 } else      
      if(txt2[0]=="/tat") {
          tatc=1;
           $('#chat_show').toggle('fast','linear');  
	          $('#chat_an').toggle('fast','linear');  
      fixloi("<font color='red'>DucNghia</font> : <b>Ẩn chát thành công.</b>"); } else
 if(txt2[0]=="/gohome") {
     if(tagAlong=="tho") {
              fixloi("<font color='red'>DucNghia</font> : <b>Không thể thực hiện lệnh này</b>");
 
     }else {
     map('t2',30,30,'t2a')
      fixloi("<font color='red'>DucNghia</font> : <b>Bạn đã về nhà.</b>");
     }
     
 } else {
     fixloi("<b><font color='red'>Hệ thống:</font> không thể chát.</b>");
 }
        
    } else {
    
    if(txt.length <1) {
      if(boxchat==0) {
        chatMsg("<b><font color='red'>DucNghia:</font> Xin hãy viết dài hơn.</b>");
} else {
     chatm("<b><font color='red'>DucNghia:</font> Xin hãy viết dài hơn.</b>");
}  
    } else {

    var data = {
        "id": userID,
          "username": userName,
           "mapid": mapID,
            "server": server,
    
        "txt": txt,
        "time": time
    };
    
    $("#messageBox").val("");
    if(boxchat==0) {
        chatMsg(""+userName+": " + txt);

    socket.emit("sendchat", data);
} else {
     chatm(""+userName+": " + txt);

    socket.emit("chatmap", data); 
    updateChat('^2|'+userID+'|'+userName+'|'+txt+'|DUCNGHIA');
}

}
}
}


socket.on("chatall", function (data) {
    var us =  JSON.parse(data);
    
    chatMsg('<b onclick="ttnv('+us.id+')">S'+us.server+'.'+us.username+'</b> : '+us.noidung+' ');
 count_chat++;
         	$("#count_chat").html(count_chat);   

})

socket.on("chat", function (data) {

    chatm0(JSON.parse(data));

})


///online to map
socket.on("nguoichoi", function (data) {
var a = '';
for (var i in data.ducnghia) {
   //nguoichoi.splice(0);
   if(getusers(data.ducnghia[i].id) === null) {
    nguoichoi.push(data.ducnghia[i]);  
   } else {
       getusers(data.ducnghia[i].id).chiso = json(data.ducnghia[i].chiso);
        getusers(data.ducnghia[i].id).mapid = data.ducnghia[i].mapid;
    getusers(data.ducnghia[i].id).x = data.ducnghia[i].x;
        getusers(data.ducnghia[i].id).y = data.ducnghia[i].y;
        getusers(data.ducnghia[i].id).username = data.ducnghia[i].username;

   }
   
			if (data.ducnghia[i].id>=1 && data.ducnghia[i].mapid == mapID  && data.ducnghia[i].id != userID && data.ducnghia[i].icon !="undefined") {
		a+='^'+data.ducnghia[i].id+'|'+data.ducnghia[i].username+'|'+data.ducnghia[i].skin+'|'+data.ducnghia[i].mapid+'|'+data.ducnghia[i].x+'|'+data.ducnghia[i].y+'|'+data.ducnghia[i].direction+'|'+data.ducnghia[i].battle+'|'+data.ducnghia[i].icon+'|'+data.ducnghia[i].viettat+'|'+data.ducnghia[i].pokemon+'|'+data.ducnghia[i].exp+'|'+data.ducnghia[i].xu+'|'+data.ducnghia[i].camxuc+'|'+data.ducnghia[i].chiso+'|'+data.ducnghia[i].co+'|'+data.ducnghia[i].buff+'';		
			}
		}
updateMMOEvents('DUCNGHIA'+a);
});

//updateChat to map

socket.on("datachat", function (data) {
	updateChat('DUCNGHIA^2|'+data.id+'|'+data.username+'|'+data.noidung+'|DUCNGHIA');
});

socket.on("online", function (data) {

online = data;

})


socket.on("kick", function (data) {
outkick(data);
})

socket.on("outgame", function (data) {
alert('Thoát game');
})


 socket.on('pong', function (data) {
        ping = ""+data+" ms";
        time_connect = Date.now()+20000;

    });
    
    
    
    socket.on('truhp', function (data) {
    
     if(getnpc(data.id) != null) {
         getnpc(data.id).hp = data.hp;
    if(getnpc(data.id).hp <=0) {
     xoanpc(data.id);
    }
     }
    });
    
     socket.on('laykiss', function (data) {
         var kdfjgk45 = data.dame/data.info.hpfull*100;
         var klgltyrty =kdfjgk45*data.info.thuong.split("^")[1];
         if(klgltyrty > data.info.thuong.split("^")[1]) {
             klgltyrty = data.info.thuong.split("^")[1];
         }
         var ieoteroijdfg = rand(klgltyrty,klgltyrty*1.5);
          my.users.exp = +my.users.exp + +ieoteroijdfg;
    my.chiso.exp = +my.chiso.exp + +ieoteroijdfg;
         setdrawn('+'+ieoteroijdfg+'xp');   
         setTimeout(function(){
             if(getnpc(data.info.id) !== null) {
                 
        socket.emit("dichchuyen",{id : data.info.id ,  uid : userID  });	
        
        
        
             }
}, 500);
     });
    socket.on('dame', function (data) {
        if(nhiemvu(my.users.nhiemvu.id) !== null) {
    if(nhiemvu(my.users.nhiemvu.id).ducnghia.loai == "pokemon" && nhiemvu(my.users.nhiemvu.id).ducnghia.pokemon == data.nhom) {
     my.users.nhiemvu.song = +my.users.nhiemvu.song +1;
    }
}

if(+data.hoisinh >= 1800000) {
    chat( ' '+my.users.username+' đã tiêu diệt '+data.name+'. Mọi người đều ngưỡng mộ ','BOSS' ,0);
lichsu(' Tiêu diệt '+data.name+'  ');
    
}

    if(data.thuong.split("^")[2] != undefined) {
    for (var i=0; i<data.thuong.split("^")[2].split(",").length; i++) {
 if(data.thuong.split("^")[2].split(",")[i].split(":")[1] >= rand(1,100)) {
     if(shopvatpham(data.thuong.split("^")[2].split(",")[i].split(":")[0]) !== null) {
   mapvp(data.thuong.split("^")[2].split(",")[i].split(":")[0],1);
   
if(+data.hoisinh >= 1800000) {
lichsu(' Tiêu diệt '+data.name+' rớt '+data.thuong.split("^")[2].split(",")[i].split(":")[0]+'   ');
    
}   
     }
 }
	 }   
    }
if(data.thuong.split("^")[0].split(":")[0] >=0 && data.thuong.split("^")[0].split(":")[0] != undefined) {
    
    if(rand(1,100) <= data.thuong.split("^")[0].split(":")[1]) {
         	var ranexp = rand(data.thuong.split("^")[1],data.thuong.split("^")[1]*1.5);
         	var ranxu = rand(data.thuong.split("^")[0].split(":")[0],data.thuong.split("^")[0].split(":")[0]*1.5);
  my.users.exp = +my.users.exp + +ranexp;
    my.chiso.exp = +my.chiso.exp + +ranexp;

 my.users.xu = +my.users.xu + + ranxu ;
 
           	setdrawn('+'+ranxu+' xu','+'+tron(ranexp)+'xp');
           	if(+data.hoisinh >= 1800000) {

lichsu(' Tiêu diệt '+data.name+' rớt +'+ranxu+' xu','+'+tron(ranexp)+'xp ');
}
    } else {
                 	var ranexp = rand(data.thuong.split("^")[1],data.thuong.split("^")[1]*1.5);
    my.chiso.exp = +my.chiso.exp + +ranexp;

     setdrawn('+'+ranexp+'xp');   
      my.users.exp = +my.users.exp+ +ranexp;

    }
    
}
   
    });
    
    socket.on('kinang', function (data) {
     data = JSON.parse(data);
     var data2 = data.ducnghia;
     if(userID >=1 && +data2.map == +mapID) {
         
         if(data2.idk >=28 && data2.idk <=32) {
             var xxx =0;
             var yyy =0;
         } else {
              var xxx =20;
             var yyy =10;
         }
     if(data2.type=="pokemon") {
          var rtoo = getnpc(data2.id);
          if(rtoo !==null) {
          var cx = (rtoo.X)-xxx;
         var cy = (rtoo.Y)-yyy;
          } else {
               var cx = data2.canvas_x;
         var cy = data2.canvas_y;
          }
     } else {
         if(+data2.id == +userID) {
             cx = userEvent.X - 20;
             cy = userEvent.Y -20; } else {
                 if(getuser(data2.id) !== null) {
         var rtoo = getuser(data2.id);
         var cx = (rtoo.drawPosX)-xxx;
         var cy = (rtoo.drawPosY)-yyy+10;
                 } else {
          var cx = 0-xxx;
         var cy = 0-yyy+10;           
                 }
             }
     }
     
     if(data2.pk=="ok") {
      if(getnpc(data2.npc) !== null) {
         var   mxx = getnpc(data2.npc).X ;
          var    myy = getnpc(data2.npc).Y;   
      }    else
     if(+data2.uid == +userID) {
          var   mxx = userEvent.X ;
          var    myy = userEvent.Y; 
     } 
          else {
              if(getuser(data2.uid) !== null) {
         var mxx = getuser(data2.uid).drawPosX;
         var myy = getuser(data2.uid).drawPosY;
              } else {
            var mxx = 0;
         var myy = 0;      
              }
             } 
        
             
     } else {
         var mxx = 0;
         var myy = 0; 
     }
    
     if(+data2.map == +mapID) {
     players.info.push({
		ten : data2.ten,
		rong : data2.rong,
		cao : data2.cao,
		sohinh : data2.sohinh,
		load :0,
		myx : mxx,
		myy : myy,
		type : data2.type,
		id : data2.id,
		pk : data2.pk,
		max : data2.sohinh,
		thoigian : data2.sohinh,
		tinh : (data2.rong/data2.sohinh),
		canvas_x : cx,
		canvas_y : cy
			});
     }
     }
    });
    
    
    
socket.on('laypokemon', function (data) {

       for (var i=0; i<data.length; i++) {
		var npcid = data[i];
		if(getnpc(npcid.id) ==null && mapID == npcid.map  && npcid.id) {
		    if(userID==1) {
		        var nameer = '['+npcid.nhom+']'+t(npcid.name)+'';
		    } else {
		        var nameer = t(npcid.name);
		    }
		      events.push(new gameEvent({ 
            "id": npcid.id,
            "name": nameer,
            "x": npcid.x,
            "y": npcid.y,
            "type": "Action Button",
            "style": npcid.img,
            "bosss": 1,
 
            "direction": 0,
            "movement": "Slow Random",
            "hp": npcid.hp,
            "hpfull": npcid.hpfull,
            "level": npcid.level,
            "tancong" : npcid.tancong,
		 "giap" : npcid.giap,
		 "chimang" : npcid.chimang,
             "time": 0,
              "msg": 0,
            "script": [
                {
                    "line": 1,
                    "function": "attack",
                    "arguments": {
                        "@cdata": "80"
                    }
                }
            ],
            "chuanhan": "0",
            "danhan": "0",
            "hoanthanh": "0",
            "quest": 0
        }));  
		        
    	}
       }

    });
     socket.on('dichchuyen', function (data) {
        if(getnpc(data.id) !== null) {
            if(getusers(data.uid) !== null) {
                if(getnpc(data.id).dctt > date()) {
                    return false;
                }
            getnpc(data.id).dctt = date()+15000; 
            getnpc(data.id).mapPosition.X = +getusers(data.uid).x +1;
            getnpc(data.id).mapPosition.Y = +getusers(data.uid).y+1;
            
  var hu_my = kinang(35);
        players.info.push({
		ten : hu_my.img,
		rong : hu_my.rong,
		cao : hu_my.cao,
		sohinh : hu_my.sohinh,
		load :0,
		
		thoigian : hu_my.sohinh,
		tinh : (hu_my.rong/hu_my.sohinh),
		canvas_x : getnpc(data.id).mapPosition.X,
		canvas_y : getnpc(data.id).mapPosition.Y
			});

            }
            
        }

     });
     
    
    
    
    
    
     socket.on('damepvp', function (data) {

     if(userID >=1) {
     if(data.id == userID) {
         
         if(+my.chiso.hp > +data.dame) {
         my.chiso.hp = +my.chiso.hp - +data.dame;
              setdrawn('-'+data.dame+'');   
    } else {
             my.chiso.hp =0;
        socket.emit("gietnguoi",{id : userID ,  uid : data.uid  });		
         
         }
         ketnoi();
     }
     
     
     }
    });
    
    socket.on('gietnguoi', function (data) {
     if(userID >=1) {
     if(data.uid == userID) {
         ///pvp////
  if(my.users.co ==7) {
      if(my.users.dosat = undefined) {
          my.users.dosat =1;
      } else {
          my.users.dosat = +my.users.dosat+1;
      }
  }
         
         if(my.pk.id >0 && my.pk.id == data.id && my.pk.time > date()) {
        xu(my.pk.cuoc*1.9);
        
     chat(''+getusers(userID).username+' chiến thắng  '+getusers(my.pk.id).username+' nhận được '+my.pk.cuoc*1.9+' xu  ','TG','0');
        lichsu(''+getusers(userID).username+' chiến thắng  '+getusers(my.pk.id).username+' nhận được '+my.pk.cuoc*1.9+' xu  ');
        my.pk.id = 0;
        my.pk.cuoc = 0; 
        my.users.co =0;
         }
      
          
     }
     
     if(data.id == userID) {
         /// bị giết////
         if(my.users.dosat >=1) {
             my.users.dosat =+my.users.dosat -1;
         }
         
         if(my.users.dosat >=10) {
             lichsu('Điểm đồ sát lớn hơn 10 nên bị mất '+(my.users.xu/100*1)+' xu. , '+(my.users.exp/100*1)+', 5% xp pokemon  ');
             my.users.xu = +my.users.xu - (+my.users.xu/100*1);
             my.users.exp = +my.users.exp - (+my.users.exp/100*1);
              my.users.exp = +my.users.exp - (+my.users.exp/100*1);
           if(+my.users.pokemon >=1) {
               my.chiso.exp = +my.chiso.exp - (+my.chiso.exp/100*1);
           }
             
         }
         
         if(my.kethu === undefined ) {
        my.kethu = [];
    }
    if(my.kethu.length <=0) {
        my.kethu.push({ id : data.id , name : getusers(data.id).username , skin : getusers(data.id).skin , thoigian : ''+new Date().getHours()+':'+new Date().getMinutes()+':'+new Date().getSeconds()+' '+new Date().getDate()+'/'+new Date().getMonth()+'/'+new Date().getFullYear()+' ' , tg : Date.now()  });     
    }
       for(i=0;i<my.kethu.length;i++) {
           if(my.kethu[i].id == data.id ) {
               my.kethu[i].thoigian = ''+new Date().getHours()+':'+new Date().getMinutes()+':'+new Date().getSeconds()+' '+new Date().getDate()+'/'+new Date().getMonth()+'/'+new Date().getFullYear()+' ';
               my.kethu[i].tg = Date.now();
           } else {
               my.kethu.push({ id : data.id , name : getusers(data.id).username , skin : getusers(data.id).skin , thoigian : ''+new Date().getHours()+':'+new Date().getMinutes()+':'+new Date().getSeconds()+' '+new Date().getDate()+'/'+new Date().getMonth()+'/'+new Date().getFullYear()+' ' , tg : Date.now()  });     
           }
        
       }
     }
     
    if(+my.chiso.hp <=0) {
        my.pk.id = 0;
        my.pk.cuoc = 0;  
        if(my.users.co == 1) {
            my.users.co =0;
        }
     }
     
     }
    });
    
    
     socket.on('moipvp', function (data) {
     if(userID >=1) {
     
     if(data.nguoinhan == userID && getusers(data.nguoimoi) !== null) {
         if(+my.users.level <5) {
             return false;
         }
         giaotiep(' '+getusers(data.nguoimoi).username+' muốn mời bạn thách đấu với mức cược  '+data.cuoc+' xu. ');
         $("#npc_menu").html('<b onclick="pvp_dongy('+data.nguoimoi+','+data.cuoc+')" class="viptxt nutchat">Đồng ý</b>');

     }
     
     
     }
    });
    
    socket.on('dongypvp', function (data) {
     if(userID >=1) {
     chat(''+getusers(data.nguoimoi).username+' thách đấu  '+getusers(data.nguoinhan).username+' với mức cược '+data.cuoc+' xu  ','TG','0');
    if(data.nguoimoi == userID) {
        xu(-data.cuoc);
        game_co(1);
        my.pk.id = data.nguoinhan;
        my.pk.cuoc = data.cuoc;
        my.pk.time = date()+300000;
        ketnoi();
        lichsu(''+getusers(data.nguoimoi).username+' thách đấu  '+getusers(data.nguoinhan).username+' với mức cược '+data.cuoc+' xu ');
    }
    
    if(data.nguoinhan == userID) {
                lichsu(''+getusers(data.nguoimoi).username+' thách đấu  '+getusers(data.nguoinhan).username+' với mức cược '+data.cuoc+' xu ');

        xu(-data.cuoc);
        game_co(2);
        my.pk.id = data.nguoimoi;
        my.pk.cuoc = data.cuoc;
                my.pk.time = date()+900000;
ketnoi();
    }
     
     
     }
    });
    
    socket.on('chatthegioi', function (data) {
     if(userID >=1) {
     if(data.id ==0) {
     dabase_chat.push( { type : data.type , msg : data.msg   });
     } else if(data.id == userID) {
              dabase_chat.push( { type : data.type , msg : data.msg   });

     }
     
     }
    });
   
   socket.on('xoavp', function (data) {
     if(getnpc(data.id) != null) {
     xoanpc(data.id);
    }
    });
    
    
    
    socket.on('itemtomap', function (data) {
	
		if(getnpc(data.id) ==null && mapID == data.map  && data.id && shopvatpham(data.idvp) !== null) {
		   
		      events.push(new gameEvent({ 
            "id": data.id,
            "name": shopvatpham(data.idvp).ten,
            "x": data.x,
            "y": data.y,
            "type": "Action Button",
            "style":shopvatpham(data.idvp).img+".png",
            "direction": 0,
            "idvp" : data.idvp,
            "movement": "Still",
            "hp": 0,
            "hpfull": 0,
            "level": shopvatpham(data.idvp).level,
            "tancong" : npcid.tancong,
		 "giap" : npcid.giap,
		 "chimang" : npcid.chimang,
             "time": 0,
              "msg": 0,
            "script": [
                {
                    "line": 1,
                    "function": "item",
                    "arguments": {
                        "@cdata": "80"
                    }
                }
            ],
            "chuanhan": "0",
            "danhan": "0",
            "hoanthanh": "0",
            "quest": 0
        }));  
		        
    	}
       

    });
    
    
    socket.on('donenhat', function (data) {
   
   if(data.uid == userID) {
       if(data.code !=1) {
           setdrawn('Không phải của bạn',0);
       } else {
           if(shopvatpham(data.idvp) !== null) {
              setdrawn(''+shopvatpham(data.idvp).ten+'*'+data.soluong+'',0); 
       vatpham(data.idvp,data.soluong);
             lichsu('Nhặt '+shopvatpham(data.idvp).ten+'*'+data.soluong+' từ đất. ');
  
           }
       }
   }
   
    });
    
    socket.on('loadquai', function (data) {
   
   addquai();
   
    });
    
    socket.on('pokeball', function (data) {
    if(data.uid == userID) {
       c_box();
        if(+data.info.hp <=0) {
            giaotiep('Không tìm thấy mục tiêu.');
            return false;
        }
        if(my.users.dabat === undefined) {
            if(+data.info.hoisinh >= 10000) {
                giaotiep('Bạn là tân binh nên không thể bắt BOSS');
                return false;
            }
            my.users.dabat =1;
             setdrawn('Bắt thành công');
                     vatpham(data.idvp,-1);
mypokemon(addpkm(data.info.img.split(".")[0])).chiso.pokeball=+data.idvp;
///update///
if(nhiemvu(my.users.nhiemvu.id) !== null) {
    if(nhiemvu(my.users.nhiemvu.id).ducnghia.loai == "bat") {
     my.users.nhiemvu.song = +my.users.nhiemvu.song +1;
    }
}
///update///
return false;
        }
        
        vatpham(data.idvp,-1);
lichsu('Bắt pokemon mất '+shopvatpham(data.idvp).ten+'*1 ');
     if(getnpc(data.info.id) !== null) {
        var hu_my = kinang(32);
        players.info.push({
		ten : hu_my.img,
		rong : hu_my.rong,
		cao : hu_my.cao,
		sohinh : hu_my.sohinh,
		load :0,
		
		thoigian : hu_my.sohinh,
		tinh : (hu_my.rong/hu_my.sohinh),
		canvas_x : (getnpc(data.info.id).X)-0,
		canvas_y : (getnpc(data.info.id).Y)-0
			});
   	socket.emit("kinang",{
	    id : data.info.id,
	    map : mapID,
	    idk : 32,
	    type : "pokemon",
	    canvas_x : (getnpc(data.info.id).X)-20,
		canvas_y : (getnpc(data.info.id).Y)-10,
		ten : hu_my.img,
		rong : hu_my.rong,
		cao : hu_my.cao,
		sohinh : hu_my.sohinh,
		load :0,
		thoigian : hu_my.sohinh,
		tinh : (hu_my.rong/hu_my.sohinh)
	
			}); 
        
        
             }
    
    var tile1 = +data.info.hpfull/+data.info.hp*1;
    if(tile1 >=60) {
        tile1 =40;
    }
    
    if(rand(1,100)  <=  +tile1+shopvatpham(data.idvp).tile){
        setdrawn('Bắt thành công');
        
mypokemon(addpkm(data.info.img.split(".")[0])).chiso.pokeball=+data.idvp;
if(nhiemvu(my.users.nhiemvu.id) !== null) {
    if(nhiemvu(my.users.nhiemvu.id).ducnghia.loai == "bat") {
     my.users.nhiemvu.song = +my.users.nhiemvu.song +1;
    }
}
    } else {
        setdrawn('Bắt hụt');
    }
        
        
    }
   });
    
    socket.on('ban_1', function (data) {
   
   if(data.nguoimua == userID) {
       if(getuser(data.nguoiban) !== null) {
       giaotiep(' '+getuser(data.nguoiban).name+' muốn bán cho bạn vật phẩm '+shopvatpham(data.idvp).ten+'*'+data.soluong+' với giá '+data.ruby+' ruby và '+data.xu+' xu. Bạn có đồng ý không ?  ');
          $("#npc_menu").html('<b onclick="dongymua('+data.idvp+','+data.soluong+','+data.xu+','+data.ruby+','+data.nguoiban+')" class="viptxt nutchat">Đồng ý</b>');
      
       
       }
   }
   
   
    });
    
    
    socket.on('ban_2', function (data) {
   
   if(data.nguoiban == userID) {
       if(getuser(data.nguoimua) !== null) {
       
       if(+soluong(data.idvp).soluong < data.soluong) {
           return false;
       }

    socket.emit("ban_3",data);		
 
       }
   }

    });
    
    socket.on('ban_3', function (data) {
   
   if(data.nguoiban == userID) {
       vatpham(data.idvp,-data.soluong);
      xu(data.xu);
      ruby(data.ruby);
      giaotiep('Bán thành công. Bạn nhận được '+data.xu+' xu,'+data.ruby+' ruby ');
      lichsu('Bán '+shopvatpham(data.idvp)+'*'+data.soluong+'  nhận được : '+data.xu+' xu,'+data.ruby+' ruby từ '+data.nguoimua+'  ');
   }
   if(data.nguoimua == userID) {
       vatpham(data.idvp,data.soluong);
      xu(-data.xu);
      ruby(-data.ruby);
      giaotiep('Mua thành công, bạn nhận được : '+shopvatpham(data.idvp).ten+'*'+data.soluong+' ');
            lichsu('Mua '+shopvatpham(data.idvp)+'*'+data.soluong+'   mất : '+data.xu+' xu,'+data.ruby+' ruby từ '+data.nguoiban+'  ');

   }

    });
    
    
    socket.on('pokemon_1', function (data) {
   
   if(data.nguoimua == userID) {
       if(getuser(data.nguoiban) !== null) {
       giaotiep(' '+getuser(data.nguoiban).name+' muốn bán cho bạn pokemon  với giá '+data.ruby+' ruby và '+data.xu+' xu. <br> Chỉ số PokeMon : <br> + '+data.info.chiso.ten+'  ');
          $("#npc_menu").html('<b onclick="dongymua2('+data.idpkm+','+data.xu+','+data.ruby+','+data.nguoiban+')" class="viptxt nutchat">Đồng ý</b>');
      
       
       }
   }
   
   
    });
    
    socket.on('pokemon_2', function (data) {
   
   if(data.nguoiban == userID) {
       if(getuser(data.nguoimua) !== null) {
       
       if(mypokemon(data.idpkm) === null) {
           
           return false;
       }
    socket.emit("pokemon_3",{idpkm : data.idpkm ,  nguoiban : data.nguoiban , nguoimua : data.nguoimua , xu : data.xu , ruby : data.ruby, info : mypokemon(data.idpkm)  });		
 
       }
   }

    });
    
    socket.on('pokemon_3', function (data) {
   
   if(data.nguoiban == userID) {
      xu(data.xu);
      ruby(data.ruby);
      xoapokemon(data.idpkm);
      giaotiep('Bán thành công. Bạn nhận được '+data.xu+' xu,'+data.ruby+' ruby ');
   }
   if(data.nguoimua == userID) {
      xu(-data.xu);
      ruby(-data.ruby);
       my.pokemon.push(data.info);
      giaotiep('Mua thành công.Bạn nhận được pokemon. ');
   }

    });
    
    
    socket.on('buff', function (data) {
   if(data.type == "pokemon") {
       if(getnpc(data.id) !== null) {
          
          for(var k=0;k<getnpc(data.id).buff.length;k++) {
				if( getnpc(data.id).buff[k].buff == data.buff ) {
					return false;
				}
			}
  getnpc(data.id).buff.push({ time : date()+ +data.time , buff : data.buff , tacdung : data.tacdung , timetacdung : 0 , load :0 , uid : data.uid  });
       }
       
   } else
   
   if(data.type == "users") {
    
   
       if(data.id == userID) {
          
          for(var k=0;k<my.buff.length;k++) {
				if( my.buff[k].buff == data.buff ) {
					return false;
				}
			}
			 

  my.buff.push({ time : date()  + +data.time , buff : data.buff , tacdung : data.tacdung , timetacdung : 0 , load :0 , uid : data.uid  });
       } else {
           if(getuser(data.id) !== null) {
  
  for(var k=0;k<getuser(data.id).buff.length;k++) {
				if( getuser(data.id).buff[k].buff == data.buff ) {
					return false;
				}
			}
			 

  getuser(data.id).buff.push({ time : date()  + +data.time , buff : data.buff , tacdung : data.tacdung , timetacdung : 0 , load :0 , uid : data.uid  });         
           
           
       }
       

   }
   }
   
   

    });
    
    socket.on('ngonngu', function (data) {
   
   if(layngonngu(data.vi) !== null) {
        return false;
    }
    
   	    vietsub.push({vi : data.vi , en : data.en });
  
 
      

    });
