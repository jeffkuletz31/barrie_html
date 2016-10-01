/**
 *   1- Main menu
 *   2- Mobile menu
 *   3- Boostrap Collapse
 *   4- Owl Carousel
 *   5- Magnific Popup
 *   6- Fraction Slider
 *   7- Masonry
 *   8- Single-author-Filter
 *   9- Google Map
 *   10- Validate Form
 *   11- Flickr
 *   12- Portfolio Filter
 *   13- Fix css ie 8
     14- Search Box
 *-----------------------------------------------------------------
 **/

"use strict";


jQuery(document).ready(function(){

var kopa_variable = {
    "contact": {
        "address": "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "marker": "/url image"
    },
    "i18n": {
        "VIEW": "View",
        "VIEWS": "Views",
        "validate": {
            "form": {
                "SUBMIT": "Submit",
                "SENDING": "Sending..."
            },
            "name": {
                "REQUIRED": "Please enter your name",
                "MINLENGTH": "At least {0} characters required"
            },
            "email": {
                "REQUIRED": "Please enter your email",
                "EMAIL": "Please enter a valid email"
            },
            "url": {
                "REQUIRED": "Please enter your url",
                "URL": "Please enter a valid url"
            },
            "message": {
                "REQUIRED": "Please enter a message",
                "MINLENGTH": "At least {0} characters required"
            }
        },
        "tweets": {
            "failed": "Sorry, twitter is currently unavailable for this user.",
            "loading": "Loading tweets..."
        }
    },
    "url": {
        "template_directory_uri":""
    }
};
var map;



/* =========================================================
1. Main Menu
============================================================ */

    Modernizr.load([
      {
        load:  kopa_variable.url.template_directory_uri + 'js/superfish.js',
        complete: function () {

            //Main menu
            jQuery('.main-menu').superfish({
                
            });

        }
      }
    ]);

/* ============================================
2. Mobile-menu
=============================================== */
    Modernizr.load([{
        load: [kopa_variable.url.template_directory_uri + 'js/jquery.navgoco.js'],
        complete: function () {
            jQuery(".main-menu-mobile").navgoco({
                accordion: true
            });
            jQuery(".main-nav-mobile > .pull").click(function () {
                jQuery(".main-menu-mobile").slideToggle("slow");
            });
            jQuery(".caret").removeClass("caret");
        }
    }]);


/* =========================================================
3. Boostrap Collapse
============================================================ */

var panel_titles = jQuery('.panel-title a');
    panel_titles.addClass("collapsed");
    jQuery('.panel-heading.active').find(panel_titles).removeClass("collapsed");
    jQuery('.panel-title a').click(function(){
        jQuery(this).closest('.kopa-accordion-widget').find('.panel-heading').removeClass('active');
        var pn_heading = jQuery(this).parents('.panel-heading');
        if (jQuery(this).hasClass('collapsed')) {
            pn_heading.addClass('active');
        } else {
            pn_heading.removeClass('active');
        }
    });

 /* =========================================================

4. Owl Carousel
============================================================ */

    Modernizr.load([{
        load: [ kopa_variable.url.template_directory_uri + 'js/owl.carousel.js',kopa_variable.url.template_directory_uri + 'js/masonry.pkgd.js',   kopa_variable.url.template_directory_uri + 'js/imagesloaded.js'],
        complete: function () {

            var owl1 = jQuery(".owl-carousel-1");
            owl1.owlCarousel({
                singleItem: true,
                pagination: true,
                slideSpeed: 600,
                transitionStyle : "fade",
                navigationText: false,
                navigation: false,
                autoplay: true,
                afterInit: function(){
                   jQuery(".kopa-home-slider-widget .loading").hide();    
                }
            });

            var owl2 = jQuery(".owl-carousel-2");
            owl2.owlCarousel({
                items : 3,
                itemsDesktop : [1120,3],
                pagination: false,
                slideSpeed: 600,
                navigationText: false,
                navigation: true
            });

            var owl3 = jQuery(".owl-carousel-3");
            owl3.owlCarousel({
                singleItem: true,
                pagination: false,
                navigationText: false,
                navigation: true,
                slideSpeed: 600,
                transitionStyle : "fade"
            });

            var owl4 = jQuery(".owl-carousel-4");
            owl4.owlCarousel({
                items : 3,
                itemsDesktop : [1120,3],
                itemsDesktopSmall : [979,2],
                itemsTablet : [639,1],
                pagination: false,
                slideSpeed: 600,
                navigationText: false,
                navigation: false
            });
            jQuery(".kopa-product-widget .kopa-owl-prev").click(function(){
                owl4.trigger('owl.prev');
            });
            jQuery(".kopa-product-widget .kopa-owl-next").click(function(){
                owl4.trigger('owl.next');
            });

            var owl5 = jQuery(".owl-carousel-5");
            owl5.owlCarousel({
                singleItem: true,
                pagination: false,
                slideSpeed: 600,
                navigationText: false,
                navigation: false
            });
            jQuery(".kopa-time-2-widget .kopa-owl-prev").click(function(){
                owl5.trigger('owl.prev');
            });
            jQuery(".kopa-time-2-widget .kopa-owl-next").click(function(){
                owl5.trigger('owl.next');
            });

            var owl6 = jQuery(".owl-carousel-6");
            owl6.owlCarousel({
                singleItem: true,
                pagination: false,
                slideSpeed: 600,
                navigationText: false,
                navigation: false,
                afterInit: function(){
                    jQuery(".kopa-masonry-carousel-widget .loading").hide();   
                    var jQuerymasonry1 = jQuery('.kopa-masonry-wrap');
                    imagesLoaded(jQuerymasonry1, function () {
                        jQuerymasonry1.masonry({
                            columnWidth: 1,
                            itemSelector: '.ms-item1'
                        });
                        jQuerymasonry1.masonry('bindResize')
                    }); 
                },
                afterUpdate: function(){
                    var jQuerymasonry1 = jQuery('.kopa-masonry-wrap');
                    jQuerymasonry1.masonry();
                }
            });
            jQuery(".kopa-masonry-carousel-widget .kopa-owl-prev").click(function(){
                owl6.trigger('owl.prev');
            });
            jQuery(".kopa-masonry-carousel-widget .kopa-owl-next").click(function(){
                owl6.trigger('owl.next');
            });

            var owl7 = jQuery(".owl-carousel-7");
            owl7.owlCarousel({
                items : 2,
                itemsDesktop : [1160,2],
                itemsDesktopSmall : [979,2],
                itemsMobile: [639, 1],
                pagination: false,
                navigationText: false,
                navigation: true,
                slideSpeed: 600
            });

            var owl8 = jQuery(".owl-carousel-8");
            owl8.owlCarousel({
                items : 5,
                pagination: false,
                navigationText: false,
                navigation: true,
                slideSpeed: 600
            });

            var owl9 = jQuery(".owl-carousel-9");
            owl9.owlCarousel({
                singleItem: true,
                pagination: false,
                slideSpeed: 600,
                navigationText: false,
                navigation: true
            });

            var owl10 = jQuery(".owl-carousel-10");
            owl10.owlCarousel({
                singleItem: true,
                pagination: false,
                navigationText: false,
                navigation: false,
                slideSpeed: 600
            });
            jQuery(".kopa-twitter-widget .kopa-owl-prev").click(function(){
                owl10.trigger('owl.prev');
            });
            jQuery(".kopa-twitter-widget .kopa-owl-next").click(function(){
                owl10.trigger('owl.next');
            });

            var owl11 = jQuery(".owl-carousel-11");
            owl11.owlCarousel({
                singleItem: true,
                pagination: false,
                navigationText: false,
                navigation: true,
                slideSpeed: 600
            });

            var owl12 = jQuery(".owl-carousel-12");
            owl12.owlCarousel({
                items : 3,
                pagination: false,
                navigationText: false,
                navigation: true,
                slideSpeed: 600
            });

            var owl13 = jQuery(".owl-carousel-13");
            owl13.owlCarousel({
                items : 4,
                itemsTablet: [799, 3],
                pagination: false,
                navigationText: false,
                navigation: true,
                slideSpeed: 600
            });

            var owl14 = jQuery(".owl-carousel-14");
            owl14.owlCarousel({
                singleItem: true,
                pagination: true,
                navigationText: false,
                navigation: false,
                autoplay: true,
                slideSpeed: 600
            });

        }   
    }]);

/* =========================================================
5. Magnific Popup
============================================================ */
    Modernizr.load([{
        load: [ kopa_variable.url.template_directory_uri + 'js/jquery.magnific-popup.js'],
        complete: function () {

            jQuery('.kopa-video-popup-widget .popup-icon').magnificPopup({
                iframe: {
                    patterns: {
                        youtube: {
                          index: 'youtube.com/',
                          id: 'v=', 
                          src: 'https://www.youtube.com/embed/%id%?autoplay=1' 
                        }
                    }
                },
                type: 'iframe'
            });
        }   
    }]);


/* ============================================
6. Fraction Slider
=============================================== */


if (jQuery('.kopa-fr-slider-widget').length > 0) {

    Modernizr.load([{
        load: [kopa_variable.url.template_directory_uri + 'js/jquery.fractionslider.js'],
        complete: function () {
            var fr1 = jQuery('.kopa-fr-slider-widget .slider');
            fr1.fractionSlider({
                'fullWidth':            true,
                'controls':             true, 
                'pager':                true,
                'responsive':           true, 
                'dimensions':           "1366,634",
                'increase':             false,
                'pauseOnHover':         true,
                'slideEndAnimation':    false,
                'slideTransitionSpeed' : 400,
                'backgroundSpeed' : 0,
                'timeout' : 100
            });
        }
    }]);
};

/* =========================================================
7. Masonry
============================================================ */

    Modernizr.load([{
        load: [ kopa_variable.url.template_directory_uri + 'js/masonry.pkgd.js',   kopa_variable.url.template_directory_uri + 'js/imagesloaded.js'],
        complete: function () {
            

            var jQuerymasonry2 = jQuery('.kopa-masonry-widget > ul');
            imagesLoaded(jQuerymasonry2, function () {
                jQuerymasonry2.masonry({
                    columnWidth: 1,
                    itemSelector: '.ms-item2'
                });
                jQuerymasonry2.masonry('bindResize')
            });
            var jQuerymasonry3 = jQuery('.kopa-shop-list > ul');
            imagesLoaded(jQuerymasonry3, function () {
                jQuerymasonry3.masonry({
                    columnWidth: 1,
                    itemSelector: '.col-md-4' 
                });
                jQuerymasonry3.masonry('bindResize')
            });
        }
    }]);

/* ============================================
8. Single-author-Filter
=============================================== */

    jQuery('.social-filter > div span').click(function () {
        var list_s = jQuery(this).closest(".social-filter").find("ul");
        console.log(list_s);
        if (list_s.is(":hidden")) {
            list_s.slideDown("slow");
        } else {
           list_s.slideUp();
        }
    });
  
/* =========================================================
9. Google Map
============================================================ */

var map;
if (jQuery('.kopa-map').length > 0) {
    Modernizr.load([{
        load: [ kopa_variable.url.template_directory_uri + 'js/gmaps.js'],
            complete: function () {
          var id_map = jQuery('.kopa-map').attr('id');
          var lat = parseFloat(jQuery('.kopa-map').attr('data-latitude'));
          var lng = parseFloat(jQuery('.kopa-map').attr('data-longitude'));
          var place = jQuery('.kopa-map').attr('data-place');

      map = new GMaps({
          el: '#'+id_map,
          lat: lat,
          lng: lng,
          zoomControl : true,
          zoomControlOpt: {
              style : 'SMALL',
              position: 'TOP_LEFT'
          },
          panControl : false,
          streetViewControl : false,
          mapTypeControl: false,
          overviewMapControl: false
        });
        map.addMarker({
          lat: lat,
            lng: lng,
          title: place
        });
        }
    }]);
};

/* =========================================================
10. Validate Form
============================================================ */

    if (jQuery('.contact-form').length >0) {
        Modernizr.load([
          {
            load:[ kopa_variable.url.template_directory_uri + 'js/jquery.form.js', kopa_variable.url.template_directory_uri + 'js/jquery.validate.js'],
            complete: function () {
                jQuery('.contact-form').validate({
                    // Add requirements to each of the fields
                    rules: {
                        name: {
                            required: true,
                            minlength: 2
                        },
                        email: {
                            required: true,
                            email: true
                        },
                        phone: {
                            required: true,
                            phone: true
                        },
                        message: {
                            required: true,
                            minlength: 10
                        }
                    },
                    // Specify what error messages to display
                    // when the user does something horrid
                    messages: {
                        name: {
                            required: "Please enter your name.",
                            minlength: jQuery.format("At least {0} characters required.")
                        },
                        email: {
                            required: "Please enter your email.",
                            email: "Please enter a valid email."
                        },
                        phone: {
                            required: "Please enter your phone.",
                            url: "Please enter a valid phone."
                        },
                        message: {
                            required: "Please enter a message.",
                            minlength: jQuery.format("At least {0} characters required.")
                        }
                    },
                    // Use Ajax to send everything to processForm.php
                    submitHandler: function(form) {
                        jQuery("#input-submit").attr("value", "Sending...");
                        jQuery(form).ajaxSubmit({
                            success: function(responseText, statusText, xhr, $form) {
                                jQuery("#response").html(responseText).hide().slideDown("fast");
                                jQuery("#input-submit").attr("value", "Submit");
                            }
                        });
                        return false;
                    }
                });
            }
          }
        ]);
    };
    /*** comment form ***/
    if (jQuery('#comments-form').length >0) {
        Modernizr.load([
          {
            load:[ kopa_variable.url.template_directory_uri + 'js/jquery.form.js', kopa_variable.url.template_directory_uri + 'js/jquery.validate.js'],
            complete: function () {
                jQuery('#comments-form').validate({
                    // Add requirements to each of the fields
                    rules: {
                        name: {
                            required: true,
                            minlength: 2
                        },
                        email: {
                            required: true,
                            email: true
                        },
                        phone: {
                            required: true,
                            phone: true
                        },
                        message: {
                            required: true,
                            minlength: 10
                        }
                    },
                    // Specify what error messages to display
                    // when the user does something horrid
                    messages: {
                        name: {
                            required: "Please enter your name.",
                            minlength: jQuery.format("At least {0} characters required.")
                        },
                        email: {
                            required: "Please enter your email.",
                            email: "Please enter a valid email."
                        },
                        phone: {
                            required: "Please enter your phone.",
                            url: "Please enter a valid phone."
                        },
                        message: {
                            required: "Please enter a message.",
                            minlength: jQuery.format("At least {0} characters required.")
                        }
                    },
                    // Use Ajax to send everything to processForm.php
                    submitHandler: function(form) {
                        jQuery("#input-submit").attr("value", "Sending...");
                        jQuery(form).ajaxSubmit({
                            success: function(responseText, statusText, xhr, $form) {
                                jQuery("#response").html(responseText).hide().slideDown("fast");
                                jQuery("#input-submit").attr("value", "Submit");
                            }
                        });
                        return false;
                    }
                });
            }
          }
        ]);
    };

/* =========================================================
11. Flickr
============================================================ */

    if (jQuery('#flickr-feed-1').length > 0) {
        Modernizr.load([{
            load: [ kopa_variable.url.template_directory_uri + 'js/jflickrfeed.js',  kopa_variable.url.template_directory_uri + 'js/imgliquid.js'],
            complete: function () {
                jQuery('#flickr-feed-1 ul').jflickrfeed({
                    limit: 8,
                    qstrings: {
                        id: '78715597@N07'
                    },
                    itemTemplate: 
                        '<li class="flickr-badge-image">' +
                        '<a target="blank" href="{{link}}" title="{{title}}" class="imgLiquid" style="width:78px; height:78px;">' +
                        '<img src="{{image_s}}" alt="{{title}}" />' +
                        '</a>' +
                        '</li>'
                }, function (data) {
                    jQuery('#flickr-feed-1 .imgLiquid').imgLiquid();
                });
            }
        }]);
    }

/* =========================================================
12. Portfolio Filter
============================================================ */

    Modernizr.load([{
        load: [ kopa_variable.url.template_directory_uri + 'js/imagesloaded.js',  kopa_variable.url.template_directory_uri + 'js/jquery.wookmark.js'],
        complete: function () {
                jQuery('.portfolio-list-item').imagesLoaded(function() {
                // Prepare layout options.
                var options = {
                  autoResize: true, // This will auto-update the layout when the browser window is resized.
                  container: jQuery('.portfolio-container'), // Optional, used for some extra CSS styling
                  offset: 0, // Optional, the distance between grid items
                  fillEmptySpace: true // Optional, fill the bottom of each column with widths of flexible height
                };

                // Get a reference to your grid items.
                var handler = jQuery('.portfolio-list-item li'),
                    filters = jQuery('.filters-options li');

                // Call the layout function.
                handler.wookmark(options);

                /**
                 * When a filter is clicked, toggle it's active state and refresh.
                 */
                var onClickFilter = function(event) {
                  var item = jQuery(event.currentTarget),
                      activeFilters = [];

                  if (!item.hasClass('active')) {
                    filters.removeClass('active');
                  }
                  item.toggleClass('active');

                  // Filter by the currently selected filter
                  if (item.hasClass('active')) {
                    activeFilters.push(item.data('filter'));
                  }

                  handler.wookmarkInstance.filter(activeFilters);
                }

                // Capture filter click events.
                filters.click(onClickFilter);
              });

        }
    }]);


   /* =========================================================
13. Fix css ie 8
============================================================ */

    jQuery(".article-list-8 > ul > li:last-child, .bottom-area-1 > .row > .col-md-4 .widget:last-child, .e-heading p:last-child").css("margin-bottom", "0");
    jQuery(".kopa-entry-list > ul > li:last-child .entry-content").css({
        "margin-bottom": "40px",
        "padding-bottom": "0",
        "border-bottom": "none"
    });
    jQuery(".column ul li:nth-child(2n)").css("background", "#e3e3e3");

/* =========================================================
14. Search Box
============================================================ */

    Modernizr.load([{
        load: [ kopa_variable.url.template_directory_uri + 'js/classie.js',  kopa_variable.url.template_directory_uri + 'js/uisearch.js'],
        complete: function () {
            new UISearch( document.getElementById( 'sb-search' ) );
        }
    }]);

/* ============================================
18. Match height
=============================================== */

    if ($('.service-list-1').length > 0) {
    
        Modernizr.load([{
            load: [kopa_variable.url.template_directory_uri + 'js/jquery.matchHeight-min.js'],
            complete: function () {

                var post_1 = $('.service-list-1');
                
                post_1.each(function() {
                    $(this).children('div').matchHeight();
                });
            }
        }]);

    };

    if ($('.article-list-1').length > 0) {
    
        Modernizr.load([{
            load: [kopa_variable.url.template_directory_uri + 'js/jquery.matchHeight-min.js'],
            complete: function () {

                var post_2 = $('.article-list-1').children('ul');
                
                post_2.each(function() {
                    $(this).children('li').matchHeight();
                });
            }
        }]);

    };

    if ($('.article-list-2').length > 0) {
    
        Modernizr.load([{
            load: [kopa_variable.url.template_directory_uri + 'js/jquery.matchHeight-min.js'],
            complete: function () {

                var post_3 = $('.article-list-2').children('div');
                
                post_3.each(function() {
                    $(this).children('div').matchHeight();
                });
            }
        }]);

    };

    if ($('.kopa-our-team-widget').length > 0) {
    
        Modernizr.load([{
            load: [kopa_variable.url.template_directory_uri + 'js/jquery.matchHeight-min.js'],
            complete: function () {

                var post_4 = $('.kopa-our-team-widget').children('ul');
                
                post_4.each(function() {
                    $(this).children('li').matchHeight();
                });
            }
        }]);

    };



});
