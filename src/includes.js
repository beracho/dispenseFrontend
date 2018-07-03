

function changeClass(i,c){
 if(document.all) document.all(i).className=c;
 else if(document.getElementById)
  document.getElementById(i).className=c; 
}

function changeId(i){

  if (i=='altuno'){
  	document.all('uno').id=i; }
  else if (i=='uno'){
  	document.all('uno').id=i; }
  else{
  	document.all('dos').id=i; }
 
  }
function cambiar(a,y){
	var x;
	
	x=a.substring(0);
	
	if (y=="uno"){
		
		if (x=="2463642324630015") // Card Number
        {
			document.all('uno').id='altdos'}
		else
		{
			document.all('uno').id='altuno'
		}
	}else{
		
			if (x=="2463642324630015"){
			changeId('altdos')
			}
		else
		{
			changeId('dos')
			
		}
	}
}