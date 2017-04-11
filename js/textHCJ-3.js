var ipt1=document.getElementById("ipt1");
var ipt2=document.getElementById("ipt2");
var div1=document.getElementById("div1");
var div2=document.getElementById("div2");
var slt1=document.getElementById("slt1");
var slt2=document.getElementById("slt2");

ipt1.onclick=function(){
    div1.style.opacity="1";
    div2.style.opacity="0";
    div2.style.zIndex="-1";  
}
ipt2.onclick=function(){
    div1.style.opacity="0";
    div2.style.opacity="1";
    div2.style.zIndex="1";
}
slt1.onchange=function(){
	var x=slt1.value;
	  if(x=="1"){  
        slt2.innerHTML = "<option>一</option><option>一</option><option>一</option>";  
    }
    else if (x=="2"){  
        slt2.innerHTML = "<option>二</option><option>二</option><option>二</option>";  
    }
    else{  
        slt2.innerHTML = "<option>三</option><option>三</option><option>三</option>";  
    }
}