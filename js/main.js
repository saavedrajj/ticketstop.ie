$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();   
});

(function($, document, window, viewport){

    var highlightBox = function( className ) {
        $(className).addClass('active');
    }

    var highlightBoxes = function() {


     if( viewport.is("xs") ) {

    }

    if( viewport.is("sm") ) {

    }


    if( viewport.is("md") ) {

    }

    if( viewport.is("lg") ) {

    }
}

    // Executes once whole document has been loaded
    $(document).ready(function() {
        highlightBoxes();
        console.log('Current breakpoint:', viewport.current());
    });

    $(window).resize(
        viewport.changed(function(){
          highlightBoxes();
         console.log('Current breakpoint:', viewport.current());
     })
        );

})(jQuery, document, window, ResponsiveBootstrapToolkit);
