jQuery(document).ready(function () {
    // run the accordion
    var allPanels = jQuery('.accord-content').hide();
    var heads = jQuery('.accordion header');
    jQuery(heads).on('click', function () {
        $this = jQuery(this);
        $target = $this.parent().find('div.accord-content');
        if (!$target.hasClass('active')) {
            heads.removeClass('selected');
            $this.addClass('selected');
            allPanels.removeClass('active').slideUp();
            $target.addClass('active').slideDown();
            //    rget.removeClass('active').slideUp();
        }
        else{
           $target.removeClass('active').slideUp();

        }
    //     if(!$target.hasClass('active')){
    //       heads.removeClass('selected');
    //       $this.addClass('selected');
    //       allPanels.removeClass('active').slideUp();
    //       $target.addClass('active').slideDown();
    //   }
    });
});
document.addEventListener('DOMContentLoaded', () => {
    // Functions to open and close a modal
    function openModal($el) {
        $el.classList.add('is-active');
    }

    function closeModal($el) {
        $el.classList.remove('is-active');
    }

    function closeAllModals() {
        (document.querySelectorAll('.modal') || []).forEach(($modal) => {
            closeModal($modal);
        });
    }

    // Add a click event on buttons to open a specific modal
    (document.querySelectorAll('.js-modal-trigger') || []).forEach(($trigger) => {
        const modal = $trigger.dataset.target;
        const $target = document.getElementById(modal);

        $trigger.addEventListener('click', () => {
            openModal($target);
        });
    });

    // Add a click event on various child elements to close the parent modal
    (document.querySelectorAll('.modal-background, .modal-close, .modal-card-head .delete, .modal-card-foot .button') || []).forEach(($close) => {
        const $target = $close.closest('.modal');

        $close.addEventListener('click', () => {
            closeModal($target);
        });
    });

    // Add a keyboard event to close all modals
    document.addEventListener('keydown', (event) => {
        if (event.code === 'Escape') {
            closeAllModals();
        }
    });
});


$(document).ready(function () {

    // Check for click events on the navbar burger icon
    $(".navbar-burger").click(function () {

        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        $(".navbar-burger").toggleClass("is-active");
        $(".navbar-menu").toggleClass("is-active");

    });
});
$(function () {
    $(".rslides").responsiveSlides({
        auto: true,             // Boolean: Animate automatically, true or false
        speed: 500,            // Integer: Speed of the transition, in milliseconds
        timeout: 4000,          // Integer: Time between slide transitions, in milliseconds
        pager: false,           // Boolean: Show pager, true or false
        nav: true,             // Boolean: Show navigation, true or false
        random: false,          // Boolean: Randomize the order of the slides, true or false
        pause: false,           // Boolean: Pause on hover, true or false
        pauseControls: true,    // Boolean: Pause when hovering controls, true or false
        prevText: '<i class="fa-solid fa-chevron-left"></i>',   // String: Text for the "previous" button
        nextText: '<i class="fa-solid fa-chevron-right"></i>',       // String: Text for the "next" button
        maxwidth: "",           // Integer: Max-width of the slideshow, in pixels
        navContainer: ".control_r",       // Selector: Where controls should be appended to, default is after the 'ul'
        manualControls: "",     // Selector: Declare custom pager navigation
        namespace: "rslides",   // String: Change the default namespace used
        before: function () { },   // Function: Before callback
        after: function () { }     // Function: After callback
    });
});
$(function () {
    $("#tabs-select").tabs();
});
$(function () {
    $('li.tab').click(function () {
        $('li.tab').removeClass('is-active');
        $(this).addClass('is-active');

        return true;
    });
});

function open_modal() {
    $('li.tab').click(function () {
        $('li.tab').removeClass('is-active');
        $(this).addClass('is-active');

        return true;
    });
}
