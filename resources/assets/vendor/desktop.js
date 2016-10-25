//$(document).ready(function(){
//      resizeDiv();
//  });
//
//  
//  function resizeDiv() {
//      vpw = $(window).width(); 
//      vph = $(window).height(); 
//      $('.fullheight, #newWrapper').css({'height':'800px'});
//      
//      $('#colContent').css({'top': '800px'});
//  }
//
//
//
//




 $(window).on('load', function () {
     if ($(this).width() > 767) {
     
//     window.onresize = function(event) {
//         resizeDiv();
//     }
//     
//     
     var easing = '';
     
     
     $('#email').click(function () {
     	
     	$('#dropdown').animate({height:'95%'}, 600);
     	
     
     });
     
     
     $('#emailBack').click(function () {
     	
     	$('#dropdown').animate({height:'15px'}, 400);
     
     });
     
      
     
     	$("#twitterIcon").hover(function() {
         		
          			$(this).stop().animate({right:'-50px'}, 200, easing);  
          			$("#lnIcon").stop().animate({right:'0'}, 200, easing);  
          			$("#fbIcon").stop().animate({right:'33px'}, 200, easing); 
          			  			
          		},function() {
          			$("#lnIcon").stop().animate({right:'-130px'}, 100, easing); 
          				$(this).stop().animate({right:'-190px'}, 100, easing); 
          				$("#fbIcon").stop().animate({right:'-80px'}, 100, easing); 
         	
          		});
     
           $("#lnIcon").hover(function() {
           	
           			$(this).stop().animate({right:'50px'}, 200, easing);
           			$("#fbIcon").stop().animate({right:'95px'}, 200, easing);     			
           		},function() {
           			
           				$(this).stop().animate({right:'-130px'}, 100, easing);  
           			$("#fbIcon").stop().animate({right:'-80px'}, 100, easing); 
           		});
           		
           $("#fbIcon").hover(function() {
           			$('.fb-follow').css('display', 'initial');
           			$(this).stop().animate({right:'70px'}, 200, easing);     			
           		},function() {
           			$('.fb-follow').css('display', 'none');
           				$(this).stop().animate({right:'-80px'}, 100, easing);  
           
           		});
     
     



     $('#colContent, #colBack').css('display', 'none');
     		$('.fb-follow').css('display', 'none');

          $('.in-page').css('display', 'none');

          $('.mainColumn').addClass("columnHover");





         	$("#colBack").click(function () {
         		$('#col1').css({'background-image':'url(images/bg2.jpg)'});
         		$('#col2').css({'background-image':'url(images/bg5.jpg)'});
         		$('#col3').css({'background-image':'url(images/bg4.jpg)'});
         		$('#col4').css({'background-image':'url(images/bg1.jpg)'});
         		$('#col5').css({'background-image':'url(images/bg3.jpg)'});
         		$(".mainColumn").animate({width:'20%'}, 1300, '',function(){
         		     $('.mainColumn').addClass("columnHover");
         		  });
       			$('.hide-in-page').css('display', 'block');
       			$('#colContent, #colBack').css('display', 'none');
       			$('#colContent').css({width:0});
//       			 resizeDiv();
       			 $('#dropdown').animate({height:'15px'}, 400, '');
         	});



         $("#col1, #col2, #col3, #col4, #col5").click(function () {
         		$('.mainColumn').removeClass("columnHover");
         		$('#newWrapper').css({height: '1300px'});
         	});

         	$("#col1").click(function () {
         		$(this).css({'background-image':'url(images/bg2_blur.jpg)'});
         		$(this).animate({width:'100%'}, 1900, '');
         		$("#col2, #col3, #col4, #col5").animate({width:'0'}, 1900, '');
				$('#col1 .hide-in-page, #col2Content, #col3Content, #col4Content, #col5Content').css('display', 'none');
				$('#colContent, #col1Content, #colBack').css('display', 'block');
				$('#colContent').animate({width:'100%'}, 1900, '');


         	});

         	$("#col2").click(function () {
         		$(this).css({'background-image':'url(images/bg5_blur.jpg)'});
         		$(this).animate({width:'100%'}, 400, '');
         		$("#col1, #col3, #col4, #col5").animate({width:'0'}, 400, '');
         		$('.colBg').stop().animate({opacity:1}, 300, '');
$('#col2 .hide-in-page, #col1Content, #col3Content, #col4Content, #col5Content').css('display', 'none');
$('#colContent, #col2Content, #colBack').css('display', 'block');
$('#colContent').animate({width:'100%'}, 1900, '');

         	});

         	$("#col3").click(function () {
         		$(this).css({'background-image':'url(images/bg4_blur.jpg)'});
         		$(this).stop().animate({width:'100%'}, 400, '');
         		$("#col1, #col2, #col4, #col5").stop().animate({width:'0'}, 400, '');
         		$('.colBg').stop().animate({opacity:1}, 300, '');
				$('#col3 .hide-in-page, #col1Content, #col2Content, #col4Content, #col5Content').css('display', 'none');
				$('#colContent, #col3Content, #colBack').css('display', 'block');
				$('#colContent').animate({width:'100%'}, 1900, '');
         	});

         	$("#col4").click(function () {
         		$(this).css({'background-image':'url(images/bg1_blur.jpg)'});
         		$(this).stop().animate({width:'100%'}, 400, '');
         		$("#col1, #col2, #col3, #col5").stop().animate({width:'0'}, 400, '');
         		$('.colBg').stop().animate({opacity:1}, 300, '');
         		$('#col4 .hide-in-page, #col1Content, #col2Content, #col3Content, #col5Content').css('display', 'none');
         		$('#colContent, #col4Content, #colBack').css('display', 'block');
         		$('#colContent').animate({width:'100%'}, 1900, '');
         	});

         	$("#col5").click(function () {
         		$(this).css({'background-image':'url(images/bg3_blur.jpg)'});
         		$(this).stop().animate({width:'100%'}, 400, '');
         		$("#col1, #col2, #col3, #col4").stop().animate({width:'0'}, 400, '');
         		$('.colBg').stop().animate({opacity:1}, 300, '');
   				$('#col5 .hide-in-page, #col1Content, #col2Content, #col3Content, #col4Content').css('display', 'none');
   				$('#colContent, #col5Content, #colBack').css('display', 'block');
   				$('#colContent').animate({width:'100%'}, 1900, '');
         	});


         		function preload(images) {
         		    if (document.images) {
         		        var i = 0;
         		        var imageArray = new Array();
         		        imageArray = images.split(',');
         		        var imageObj = new Image();
         		        for(i=0; i<=imageArray.length-1; i++) {
         		            //document.write('<img src="' + imageArray[i] + '" />');// Write to page (uncomment to check images)
         		            imageObj.src=imageArray[i];
         		        }
         		    }
         		}



     } else {



  $('.fb-follow').css('display', 'none');
        $('.in-page').css('display', 'none');
		$('#colBack').css('display', 'none');
		$('#colContent').css('display', 'block');

        
     }
 });
	     		
	
