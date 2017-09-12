/* js document */
window.onload = function (){
	mx.app.tab();
	mx.app.change();
	mx.app.hideAlert();
};

var mx = {};

mx.tools = {};
mx.tools.getByClass = function (oParent,sClass){
	var arr = [];
	var aEle = oParent.getElementsByTagName('*');
	var re = new RegExp('\\b'+sClass+'\\b');
	for(var i=0;i<aEle.length;i++){
		if(aEle[i].className.search(re) != -1){
			arr.push(aEle[i]);
		}
	}
	
	return arr;
};

mx.app = {};

mx.app.hideAlert = function(){

	var oFloat = mx.tools.getByClass(document,'floats')[0];
	var oPopUp = mx.tools.getByClass(document,'pop_up')[0];
	
	setTimeout(function (){
		oFloat.style.display = 'block';
		oPopUp.style.display = 'block';
		
		setTimeout(function (){
			oFloat.style.display = 'none';
			oPopUp.style.display = 'none';
		},1000);	
	},500);
	
	
};

mx.app.change = function (){
	var aInp = document.getElementsByTagName('input');
	
	for(var i=0;i<aInp.length;i++){
		aInp[i].onmouseover = aInp[i].onclick = function (){
			this.className = 'active';
		}
		aInp[i].onmouseout = function (){
			this.className = '';
		}
	}
}

mx.app.tab = function(){
	var oMenu = document.getElementById('menu');
	var aLi = oMenu.getElementsByTagName('li');
	var oPc = mx.tools.getByClass(oMenu,'pc_span')[0];
	var oMobile = mx.tools.getByClass(oMenu,'mobile_span')[0];
	
	var oMiddlePcDiv = document.getElementById('middle_pcDiv');
	var oMiddleMobileDiv = document.getElementById('middle_mobileDiv');
	var oBottomPcDiv = document.getElementById('bottom_pcDiv');
	var oBottomMobileDiv = document.getElementById('bottom_mobileDiv');
	var oRulesPcDiv = document.getElementById('rules_pcDiv');
	var oRulesMobileDiv = document.getElementById('rules_mobileDiv');
	
	oPc.onclick = function (){
		
		for(var i=0;i<aLi.length;i++){
			aLi[i].className = '';
		}
		aLi[0].className = 'pc';
		
		oMiddlePcDiv.style.display = 'block';
		oMiddleMobileDiv.style.display = 'none';
		oBottomPcDiv.style.display = 'block';
		oBottomMobileDiv.style.display = 'none';
		oRulesPcDiv.style.display = 'block';
		oRulesMobileDiv.style.display = 'none';
	}
	
	oMobile.onclick = function (){
		
		for(var i=0;i<aLi.length;i++){
			aLi[i].className = '';
		}
		aLi[1].className = 'mobile';
		
		oMiddlePcDiv.style.display = 'none';
		oMiddleMobileDiv.style.display = 'block';
		oBottomPcDiv.style.display = 'none';
		oBottomMobileDiv.style.display = 'block';
		oRulesPcDiv.style.display = 'none';
		oRulesMobileDiv.style.display = 'block';
	}
	
	
	
}
