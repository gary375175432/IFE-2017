var ipt1=document.getElementById("ipt1")
var p1=document.getElementById("p1")

ipt1.onblur =function(){
	var m=0;
    for(var i=0;i<ipt1.value.length;i++){
              if((ipt1.value[i]>=0x0000 && ipt1.value[i]<=0x00FF))    
            {    
                m = m + 1;    
            }    
            else  
            {    
                m = m + 2;    
            }
    	}    	

		if(ipt1.value==""){
		p1.innerHTML="姓名不能为空";
		p1.style.color="red";
		ipt1.style.borderColor="red";
	}
	else if(m<4||m>16){
		p1.innerHTML="必填，长度为4-16个字符";
		p1.style.color="#999";
		ipt1.style.borderColor="#999";
	}
	else{
		p1.innerHTML="名称格式正确";
		p1.style.color="green";
		ipt1.style.borderColor="green";
	}
}
ipt1.onfocus=function(){
	p1.innerHTML="必填，长度为4-16个字符";
		p1.style.color="#999";
		ipt1.style.borderColor="#999";
}


