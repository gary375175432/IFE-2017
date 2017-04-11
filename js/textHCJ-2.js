var ipt1=document.getElementById("ipt1");
var p1=document.getElementById("p1");
var ipt2=document.getElementById("ipt2");
var p2=document.getElementById("p2");
var ipt3=document.getElementById("ipt3");
var p3=document.getElementById("p3");
var ipt4=document.getElementById("ipt4");
var p4=document.getElementById("p4");
var ipt5=document.getElementById("ipt5");
var p5=document.getElementById("p5");


ipt1.onfocus=function xxx1(){
	p1.innerHTML="必填，长度为4-16个字符";
	p1.style.color="#999";
	ipt1.style.borderColor="blue";
}
ipt2.onfocus=function xxx2(){
    p2.innerHTML="密码由4-16数字和英文组成";
}
ipt3.onfocus=function xxx3(){
    p3.innerHTML="再次输入相同密码";
}


ipt1.onblur =function xxx1(){
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
ipt2.onblur =function (){	
	 if(ipt2.value==""){
		p2.innerHTML="密码不能为空";
		p2.style.color="red";
		ipt2.style.borderColor="red";
	}
	else if(ipt2.value.length<4||ipt2.value.length>16){
		p2.innerHTML="密码由4-16数字和英文组成";
		p2.style.color="#999";
		ipt2.style.borderColor="#999";
	}	
	else{
		p2.innerHTML="密码可用";
		p2.style.color="green";
		ipt2.style.borderColor="green";
	}
}
ipt3.onblur =function (){
	 if(ipt3.value==""){
		p3.innerHTML="再次输入相同密码";
		p3.style.color="red";
		ipt3.style.borderColor="red";
	}
	else if(ipt2.value==ipt3.value){
		p3.innerHTML="";
		p3.style.color="green";
		ipt3.style.borderColor="green";
	}	
}
ipt4.onblur =function (){
	 	if(ipt4.value.indexOf("@")>0 && ipt4.value.indexOf(".com")>0 ){
	 	    p4.style.color="green";
		    ipt4.style.borderColor="green";
		    p4.innerHTML=""; 		
	 	}
	 	else{
            p4.innerHTML="邮箱格式错误"
            p4.style.color="red";
		    ipt4.style.borderColor="red";	
	 	}	 
}
ipt5.onblur =function (){
	 	if(ipt5.value.length!==11 ){
	 		p5.innerHTML="请输入手机号码"
            p5.style.color="red";
		    ipt5.style.borderColor="red";	 	    		
	 	}
	 	else{
            p5.style.color="green";
		    ipt5.style.borderColor="green";
		    p5.innerHTML=""; 	
	 	}
	 
}
btn.onclick=function(){		
	if(p1.innerHTML!=="名称格式正确"||p2.innerHTML!=="密码可用"||p3.innerHTML!==""||p4.innerHTML!==""||p5.innerHTML!==""){
		alert("输入有误")
	}
	
}