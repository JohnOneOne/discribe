$(".btn").on("tap",function(){
	if($("#choose").attr("checked")==false){
		//alert(2)
		$(this).next().css({
			"opacity":"0"
		})
	}else{
		//alert(3)
		$(this).next().css({
			"opacity":"1"
		})
	}
	
})