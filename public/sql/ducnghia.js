var pokemon_data = [
    "sql/function/md5.js",
    "sql/function/cuonghoa.js",
    "sql/function/thoitrang.js",
    "sql/function/trangbi.js",
    "sql/function/used.js",
    "sql/function/dabase.js",
    "sql/function/item.js",
    "sql/char.js",
    "sql/function/game.js",
    "sql/function/db.js",
    "sql/data.js",
    "sql/npm.js",
    "sql/function/kinang.js",
    "sql/function/button.js",
     "sql/function/pokemon.js",

    




];
var vietsub = [];
var huongdan = [];
function taingonngu() {
     $.nghia({
	url : '/data/nhiemvu/ngonngu.json',
	type : 'POST',
	ducnghia : function(data){
	  for(var i=0;i< data.length;i++) {
			 vietsub.push(data[i]);  
			}	  
	  
}
}); 

 $.nghia({
	url : '/data/nhiemvu/huongdan.json',
	type : 'POST',
	ducnghia : function(data){
	  for(var i=0;i< data.length;i++) {
			 huongdan.push(data[i]);  
			}	  
	  
}
});   
}
taingonngu();

function dulieu()
{
    ducnghia.loadfile(pokemon_data,
        function()
        {
            console.log(
                'tai du lieu thanh cong.'
            );

        });
}