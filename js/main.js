$(document).ready(function() {
    //Конструктор
	$(".block-category").click(function(){
        $(".block-category ").removeClass("active");
        $(this).addClass("active");
        $(".category-slider-nav .active").removeClass("active");
        $(".category-slider-nav").find("[data-parent='" + $(this).data('name') + "']").addClass('active');
        
    });
    
    $(".nav-slide").click(function(){
        $(this).parent().find('.check').removeClass('check');
        $(this).addClass("check");
        $(".block-big-knife img").attr("src", $(this).find(".nav-slide-img").data("big"));
        $(".category-slider-nav .active").removeClass("active");
    });
    
    $(".btn-add-unic-knife").click(function(event){
        event.preventDefault();
        var str = {};
        $(".block-category").each(function(){
            str[$(this).find('.category-name').text().trim()] = $(".category-slider-nav").find("[data-parent='" + $(this).data('name') + "']").find('.check .nav-slide-name').text().trim();
        });
		
		$("body").css("overflow","hidden"); 
		$(".block-popup-form").fadeOut(0);
		$(".overlay").fadeIn(500);
		$(".form-order-unic-knife").fadeIn(500);
        
//        alert(dump(str));
    });
    
    function dump(obj) {
        var out = '';
        
        for (var i in obj) {
            out += i + ": " + obj[i] + "\n";
        }

        return out;
    }
	
	
	if(document.querySelector(".block-review-slider")) {
		$(".block-review-slider").slick({
			slidesToShow: 1,
			dots: true,
			arrows: true,
			autoplay: true,
			autoplaySpeed: 7000
		})
		
		$(".category-slider-for").slick({
			slidesToShow: 1,
			arrows: false
		})
		
		$(".block-category-slider-nav").slick({
			slidesToShow: 3,
			vertical: true,
			responsive: [
				{
					breakpoint: 768,
					settings: {
						slidesToShow: 1,
						vertical: false
					}
				}
			]
		})
	}
	
	
	$('a[href^="#"]').click(function() {
		var target=$(this).attr('href');
		$('html, body').animate({
			scrollTop: $(target).offset().top-100},800);
		return false;
	});

	$(".btn-mobile-menu").click(function() {
		if($("body").css("overflow") == "hidden") {
			console.log("hidden")
			$("body").css("overflow","auto"); 
		} else {
			$("body").css("overflow","hidden"); 
			console.log("ne hidden");
		}
		$(".header-nav ul").slideToggle(500);
		$(this).toggleClass("show-menu");
	})
	
	$(".btn-order-call-js").click(function(event) {
		event.preventDefault();
		$("body").css("overflow","hidden"); 
		$(".block-popup-form").fadeOut(0);
		$(".overlay").fadeIn(500);
		$(".form-order-call").fadeIn(500);
	})
	
//	$(".btn-add-unic-knife").click(function(event) {
//		event.preventDefault();
//		$("body").css("overflow","hidden"); 
//		$(".overlay").fadeIn(500);
//		$(".form-order-unic-knife").fadeIn(500);
//	})
//	
	$(".btn-add-to-basket").click(function(event) {
		event.preventDefault();
		$("body").css("overflow","hidden"); 
		$(".block-popup-form").fadeOut(0);
		$(".overlay").fadeIn(500);
		$(".form-add-to-basket").fadeIn(500);
	})
	
	$(".btn-add-to-basket-in-form").click(function(event) {
		event.preventDefault();
		$(".block-popup-form").fadeOut(0);
		$(".form-more").fadeOut(0);
		$(".form-add-to-basket").fadeIn(500);
	})
	
	$(".btn-get-sale").click(function(event) {
		event.preventDefault();
		$("body").css("overflow","hidden"); 
		$(".block-popup-form").fadeOut(0);
		$(".overlay").fadeIn(500);
		$(".form-order-sale").fadeIn(500);
	})
	
	$(".btn-open-more-js").click(function(event) {
		event.preventDefault();
		$("body").css("overflow","hidden"); 
		$(".block-popup-form").fadeOut(0);
		$(".overlay").fadeIn(500);
		$(".form-more").fadeIn(500);
			
		$('.form-more .slider-big-photos').slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: true,
			fade: true,
			asNavFor: '.slider-nav-photos',
			responsive: [
				{
					breakpoint: 768,
					settings: {
						arrows: false
					}
				}
			]
		});

		$('.form-more .slider-nav-photos').slick({
			slidesToShow: 5,
			slidesToScroll: 1,
			asNavFor: '.slider-big-photos',
			focusOnSelect: true,
			arrows: false,
			responsive: [
				{
					breakpoint: 768,
					settings: {
						slidesToShow: 2,
						arrows: false
					}
				}
			]
		})
	})
	
	$(".overlay .block-popup-form").click(function(event) {
		event.stopPropagation();
	})
	
	$(".overlay").click(function(event) {
		if(event.target != ".block-popup-form") {
			event.stopPropagation();
			$(".overlay").fadeOut(500);
			$(".block-popup-form").fadeOut(500);
			$("body").css("overflow","auto");			
			if($('.form-more').css("display") == "block") {
				$('.form-more .slider-big-photos').slick("unslick");
				$('.form-more .slider-nav-photos').slick("unslick");
			}
		}
	});
	
	$(".close").click(function(event) {
		event.stopPropagation();
		$(".overlay").fadeOut(500);
		$(".block-popup-form").fadeOut(500);
		$("body").css("overflow","auto");
		if($('.form-more').css("display") == "block") {
			$('.form-more .slider-big-photos').slick("unslick");
			$('.form-more .slider-nav-photos').slick("unslick");
		}
	});
	
	$(".btn-back-to-buy-js").click(function(event) {
		event.stopPropagation();
		event.preventDefault();
		$(".overlay").fadeOut(500);
		$(".block-popup-form").fadeOut(500);
		$("body").css("overflow","auto");
	});
	
	function mask() {
		$("input[type='tel']").mask("+7 (999) 999-99-99");
	}
	
	mask();
	
	if(document.querySelector(".more-blocks")) {
		var more_blocks_catalog_node = document.querySelectorAll(".more-blocks-catalog .block");
		var more_blocks_catalog_arr = [more_blocks_catalog_node.length];
		
		for(var i = 0; i < more_blocks_catalog_node.length; i++) {
			more_blocks_catalog_arr[i] = more_blocks_catalog_node.item(i);
			if(i < 8) {
				$(more_blocks_catalog_arr[i]).slideDown(500);
			}
		}
		
		if(more_blocks_catalog_node.length < 9) {
			$(".btn-open-more-blocks-catalog-js").slideUp(0);
		}
		
		$(".btn-open-more-blocks-catalog-js").click(function(event) {
			event.preventDefault();
			for(var i = 0; i < more_blocks_catalog_node.length; i++) {				
				$(more_blocks_catalog_arr[i]).slideDown(500);
			}
			$(this).slideUp(500);
		})	
		
		var more_blocks_sales_node = document.querySelectorAll(".more-blocks.more-blocks-sales .block");
		var more_blocks_sales_arr = [more_blocks_sales_node.length];
		
		for(var i = 0; i < more_blocks_sales_node.length; i++) {
			more_blocks_sales_arr[i] = more_blocks_sales_node.item(i);
			if(i < 8) {
				$(more_blocks_sales_arr[i]).slideDown(500);
			}
		}
		
		if(more_blocks_sales_node.length < 9) {
			$(".btn-open-more-blocks-sales").slideUp(0);
		}
		
		$(".btn-open-more-blocks-js.btn-open-more-blocks-sales").click(function(event) {
			event.preventDefault();
			for(var i = 0; i < more_blocks_sales_node.length; i++) {				
				$(more_blocks_sales_arr[i]).slideDown(500);
			}
			$(this).slideUp(500);
		})
		
		var more_blocks_add_catalog_node = document.querySelectorAll(".more-blocks.more-blocks-add-catalog .block");
		var more_blocks_add_catalog_arr = [more_blocks_add_catalog_node.length];
		
		for(var i = 0; i < more_blocks_add_catalog_node.length; i++) {
			more_blocks_add_catalog_arr[i] = more_blocks_add_catalog_node.item(i);
			if(i < 8) {
				$(more_blocks_add_catalog_arr[i]).slideDown(500);
			}
		}
		
		if(more_blocks_add_catalog_node.length < 9) {
			$(".btn-open-more-add-catalog").slideUp(0);
		}
		
		$(".btn-open-more-blocks-js.btn-open-more-add-catalog").click(function(event) {
			event.preventDefault();
			for(var i = 0; i < more_blocks_add_catalog_node.length; i++) {				
				$(more_blocks_add_catalog_arr[i]).slideDown(500);
			}
			$(this).slideUp(500);
		})
	}
	
	if(document.querySelector(".screen-catalog")) {
		var tabs_node = document.querySelectorAll(".tab");
		var tabs_arr = [tabs_node.length];
		
		for(var i = 0; i < tabs_node.length; i++) {
			tabs_arr[i] = tabs_node.item(i);
		}
		
		var btn_tabs_node = document.querySelectorAll(".btn-tab-js");
		var btn_tabs_arr = [btn_tabs_node.length];
		
		for(var i = 0; i < btn_tabs_node.length; i++) {
			btn_tabs_arr[i] = btn_tabs_node.item(i);
		}
		
		
		btn_tabs_arr.forEach(function(btn, i, btn_tabs_arr) {		
			btn.addEventListener("click", function(event) {
				$(btn_tabs_arr).removeClass("active");
				$(btn).addClass("active")
				$(tabs_arr).slideUp(0);
				$(tabs_arr[i]).slideDown(500);
			})
		})
	}
	
	new WOW().init();
})
