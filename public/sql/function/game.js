
var level_skill = Array(
    0,
    10000,
    50000,
    300000,
    800000,
    1800000,
    3594964,
    6678876,
    9999767,
    12686786,
    20164566,
    36056567,
    40065767,
    50768678,
    60786786,
    70657657,
    800004456
    );

var level_my =  Array(
0,
1000,
2000,
3000,
4000,
5000,
10000,
15000,
45000,
65000,
75000,
95000,
150000,
190000,
234678,
354678,
548799,
659789,
879846,
978984,
1264678,
1649878,
1978988,
2165478,
2657897,
2978989,
3064897,
3698789,
4978989,
5789999,
5977897,
6875466,
6955551,
7988456,
8465468,
9886456,
10979899,
15578999,
19879789,
21456456,
23465464,
29789999,
34657989,
36489799,
40978999,
45789789,
49878799,
51548978,
56978798,
59467899,
65467899,
66789999,
69787988,
75641312,
79456461,
79978999,
84546666,
89455666,
91345656,
92345646,
93464667,
95645646,
97546566,
98787989,
100000000
); 

function onlineupdate() {
     if(mmo.length >=1) {
      mmo.splice(0);
    }
    $.nghia({
	url : '/data/nhiemvu/users.json',
	type : 'POST',
	ducnghia : function(data){
	  for(var i=0;i< data.length;i++) {
			 mmo.push(data[i]);  

			}	  
	  
}
});
}

function taidulieu() {
    if(data_nhiemvu.length >=1) {
      data_nhiemvu.splice(0);
    }
   
     $.nghia({
	url : '/data/nhiemvu/nhiemvu.json',
	type : 'POST',
	ducnghia : function(data){
	  for(var i=0;i< data.nhiemvu.length;i++) {
			 data_nhiemvu.push(data.nhiemvu[i]);  

			}	  
	  
}
});
}



function taidulieu2() {
    if(data_pokemon.length >=1) {
      data_pokemon.splice(0);
    }
     $.nghia({
	url : '/data/nhiemvu/pokemon.json',
	type : 'POST',
	ducnghia : function(data){
	  for(var i=0;i< data.pokemon.length;i++) {
			 data_pokemon.push(data.pokemon[i]);  

			}	  
	 loadimg=1; 
}
});        
}