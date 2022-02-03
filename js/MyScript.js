(function($) {
    $("#my-form-button").on("click",function(e){

            $("#my-form").on('submit', function (e) {
    
              var status = $("#my-form-status");
              e.preventDefault();
              $.ajax({
                type: 'POST',
                url: 'https://formspree.io/f/xyyoepyn',
                dataType: "json",
                data: {
                    email: $("#email").val(),
                    message: $("#messaggio").val()
                }
            }).done(function( data ) {
                status.text("Thanks for your submission!");
                $("#email").val("")
                $("#messaggio").val("")
            }).fail(function( data ) {
                status.text("Oops! There was a problem submitting your form");
                $("#email").val("")
                $("#messaggio").val("")
            });
            
                
        });
    });
})(jQuery);