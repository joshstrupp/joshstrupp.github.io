$(document).ready(function() {
        $(".fancybox").fancybox();
    });

$(document).ready(function() {
    $('#fullpage').fullpage({
        //Navigation
        menu: false,
        anchors:['firstSlide', 'secondSlide', 'thirdSlide', 'fourthSlide', 'fifthSlide', 'sixthSlide', 'seventhSlide', 'eigthSlide'],
        navigation: false,
        navigationPosition: 'right',
        navigationTooltips: ['firstSlide', 'secondSlide'],
        slidesNavigation: true,
        slidesNavPosition: 'bottom',

        //Scrolling
        css3: true,
        scrollingSpeed: 700,
        autoScrolling: true,
        fitToSection: true,
        scrollBar: false,
        easing: 'easeInOutCubic',
        easingcss3: 'ease',
        loopBottom: true,
        loopTop: false,
        loopHorizontal: true,
        continuousVertical: false,
        normalScrollElements: '#element1, .element2',
        scrollOverflow: false,
        touchSensitivity: 15,
        normalScrollElementTouchThreshold: 5,

        //Accessibility
        keyboardScrolling: true,
        animateAnchor: true,
        recordHistory: true,

        //Design
        controlArrows: true,
        verticalCentered: true,
        resize : false, 
        sectionsColor: ['#fff', '#3E606F', '#FCFFF5', '#D1DBBD', '#91AA9D', '#193441', '#11232B', '#04080A'],
        paddingTop: '0',
        paddingBottom: '10px',
        fixedElements: '#header, .footer',
        responsive: 0,

        //Custom selectors
        sectionSelector: '.section',
        slideSelector: '.slide',

        //events
        onLeave: function(index, nextIndex, direction){},
        afterLoad: function(anchorLink, index){},
        afterRender: function(){},
        afterResize: function(){},
        afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex){},
        onSlideLeave: function(anchorLink, index, slideIndex, direction){}
    });
});

$(function () {
  var w = $(window);
  w.scroll(function () {
    if (w.scrollTop() !== 0) {
      $(".d").removeClass("visible");
      return;
    }
    
    $(".d").addClass("visible");
  });
  
  $(".d").addClass("visible");
  
});

//Hover over img in #section2 (films), darken img background and add title and description text
