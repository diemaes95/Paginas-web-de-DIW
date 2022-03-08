//jQuery time
var current_fs, next_fs, previous_fs; //fieldsets
var left, opacity, scale; //fieldset properties which we will animate
var animating; //flag to prevent quick multi-click glitches

$(".next").click(function(){
	if(animating) return false;
	animating = true;
	
	current_fs = $(this).parent();
	next_fs = $(this).parent().next();
	
	//activate next step on progressbar using the index of next_fs
	$("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");
	
	//show the next fieldset
	next_fs.show(); 
	//hide the current fieldset with style
	current_fs.animate({opacity: 0}, {
		step: function(now, mx) {
			//as the opacity of current_fs reduces to 0 - stored in "now"
			//1. scale current_fs down to 80%
			scale = 1 - (1 - now) * 0.2;
			//2. bring next_fs from the right(50%)
			left = (now * 50)+"%";
			//3. increase opacity of next_fs to 1 as it moves in
			opacity = 1 - now;
			current_fs.css({
        'transform': 'scale('+scale+')',
        'position': 'absolute'
      });
			next_fs.css({'left': left, 'opacity': opacity});
		}, 
		duration: 800, 
		complete: function(){
			current_fs.hide();
			animating = false;
		}, 
		//this comes from the custom easing plugin
		easing: 'easeInOutBack'
	});
});

$(".previous").click(function(){
	if(animating) return false;
	animating = true;
	
	current_fs = $(this).parent();
	previous_fs = $(this).parent().prev();
	
	//de-activate current step on progressbar
	$("#progressbar li").eq($("fieldset").index(current_fs)).removeClass("active");
	
	//show the previous fieldset
	previous_fs.show(); 
	//hide the current fieldset with style
	current_fs.animate({opacity: 0}, {
		step: function(now, mx) {
			//as the opacity of current_fs reduces to 0 - stored in "now"
			//1. scale previous_fs from 80% to 100%
			scale = 0.8 + (1 - now) * 0.2;
			//2. take current_fs to the right(50%) - from 0%
			left = ((1-now) * 50)+"%";
			//3. increase opacity of previous_fs to 1 as it moves in
			opacity = 1 - now;
			current_fs.css({'left': left});
			previous_fs.css({'transform': 'scale('+scale+')', 'opacity': opacity});
		}, 
		duration: 800, 
		complete: function(){
			current_fs.hide();
			animating = false;
		}, 
		//this comes from the custom easing plugin
		easing: 'easeInOutBack'
	});
});

$(".submit").click(function(){
	return false;
})
const image= document.getElementById('myFPImage');
console.log('se inicia el programa');

image.addEventListener('click',cambiaPic);

let num = 0;
function cambiaPic(){
    if(num==0){
        console.log('ha entrado en la opcion '+num);
        image.src = "https://noticias.coches.com/wp-content/uploads/2016/12/reprogramacion-centralita-ecu.jpeg" ;
    
    }
    if(num==1){
        console.log('ha entrado en la opcion '+num);
        image.src = "https://tallermecanicogutierrez.com/wp-content/uploads/reprogramacion-taller-gutierrez.jpg" ;
    
    }
    if(num==2){
        console.log('ha entrado en la opcion '+num);
        image.src = "https://www.digi-tec.es/s/cc_images/cache_2478348005.jpg?t=1541166544" ;
    
    }
    if(num==3){
        console.log('ha entrado en la opcion '+num);
        image.src = "https://th.bing.com/th/id/R.bddd7edab94e3ea769a7dc147e6d1a38?rik=pbb9ICnyrtR5MQ&pid=ImgRaw&r=0";
    
    }
    if(num==4){
        console.log('ha entrado en la opcion  '+num);
        image.src="https://th.bing.com/th/id/R.d125ecf4e5df0b86b9f965f690b2cc4d?rik=BV2n1lcStKMbtQ&pid=ImgRaw&r=0";
        
    }
   
    num++;
    if(num==7){
        num=0;
    }

}