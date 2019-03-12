$(document).ready(function() {
//  ======== ANIMATE ON SCROLL ========
	AOS.init();
//	======== SWITHER TABS ========
	switchFeaturesTab();

//  ======== SLICK SLIDER ========
	gallerySlickInit();
	commentsSlickInit();

//  ======== SCROLL TO TOP OF PAGE ========
	scrollToTop();
	

	function switchFeaturesTab() {
		let typesItems       = document.getElementsByClassName('types__item'),
			descriptionItems = document.getElementsByClassName('description__item');

		let typesItemsActive       = "types__item--active",
			descriptionItemsActive = "description__item--active";


		for (let i = 0; i<typesItems.length; i++) {
			typesItems[i].onclick = function() {
				if (!(this.classList.contains("types__item--active"))) {
					for (let i = 0; i<typesItems.length; i++) {
						typesItems[i].classList.remove(typesItemsActive);
						descriptionItems[i].classList.remove(descriptionItemsActive);
					};

					typesItems[i].classList.add(typesItemsActive);
					descriptionItems[i].classList.add(descriptionItemsActive);
				};
			};
		};
	};

	function gallerySlickInit() {
		$('.gallery__slider').slick({
			autoplay:       true,
			swipeToSlide:   true,
			slidesToShow:   3,
			cssEase:       'ease-in-out',
			responsive: [
				{
			        breakpoint: 1199,
			        settings: {
				        slidesToShow: 2
			        }
			    },
			    {
			        breakpoint: 767,
			        settings: {
				        slidesToShow: 1
			        }
			    },
			    {
			        breakpoint: 575,
			        settings: {
				        slidesToShow: 1,
				        arrows: false
			        }
			    },
			]
		});
	};
	function commentsSlickInit() {
		$('.comments__slider').slick({
			// autoplay:     true,
			swipeToSlide: true,
			dots:         true,
			arrows:       false,
			cssEase:     'ease-in-out'
		});
	};
	function scrollToTop() {
		let scrollPosition = window.pageYOffset,
			upToTopBlock   = document.getElementsByClassName('up-to-top');

		window.onscroll = function() {
			scrollPosition = window.pageYOffset;
			if(scrollPosition>=1250) {
				upToTopBlock[0].style.bottom = '10px';
			} else {
				upToTopBlock[0].style.bottom = '-50px';
			};
		};
	}
});