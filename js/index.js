var $a1=$(".a1");
var $tubiao=$('.tubiao>li:first-child');
var $block=$('.small_nav ul');
var $blockLi=$('.small_nav ul>li');
var $body=$("body");
var ch=$(window).innerHeight();
$tubiao.click(function(){
	if($a1.attr("id")){
		$a1.removeAttr("id");
		$block.css({"height":"44px","overflow":"hidden"});
		$body.css({overflow:""});
	}else{
		$a1.attr("id","active");
		$block.css("height",ch);
		$blockLi.css({"height":"44px","border-bottom":"1px solid #ccc"}).eq(0).css("margin-top","20px");
		$body.css({height:ch,overflow:" hidden"})
	}
})



var $lie=$(".lie");
var $xiaL=$(".footer .wenzi .lie div ul");
var $smJia=$(".sm-jia");
var flas=1;
$lie.click(function(){
	var index=$(this).index();
	if(flas==1){
		flas=2;
		$xiaL.eq(index).css({display:"block"});
		/*$smJia.eq(index).css({"transform":"rotate(90deg)"});*/
	}else{
		flas=1;
		$xiaL.eq(index).css({display:"none"});
		
	}
	/*if($xiaL.eq(index).attr("display","none")){
		$xiaL.eq(index).css({display:"block"});
	}elseif($xiaL.eq(index).attr("display","block")){
		alert(1)
		$xiaL.eq(index).css({display:"none"});
	}*/
	
})
/*if($xiaL.attr("display","none")){
	$lie.click(function(){
		var index=$(this).index();
		alert(1)
		$xiaL.eq(index).css({display:"block"});
	})
}
if($xiaL.attr("display","blick")){
	$lie.click(function(){
		var index=$(this).index();
		alert(2)
		$xiaL.eq(index).css({display:"none"});
	})
}*/