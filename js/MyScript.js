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

    setSkill()

    function setSkill(){

        const array = ["Java", "JavaScript","PHP","CSS","Python","Flutter","Dart","C","C++","jQuery",
                        "MATLAB","Android","LaTeX", "Microsoft Office","Node.js","React","MySQL","HTML5"];

        const skill = array.sort((a, b) => {
            return a.localeCompare(b, undefined, {sensitivity: 'base'});
        });

        $("#skills").append("<ul>");

        var i = 0;
        
        skill.forEach(x => {
            $("#skills").append("<li>"+x+"</li>");
            i++;
            if (i % 7 == 0) $("#skills").append("</ul><ul>");
        });
        
        $("#skills").append("</ul>");
        
    }
})(jQuery);