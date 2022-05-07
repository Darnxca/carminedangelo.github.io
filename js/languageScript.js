(function($) {
    var userLang = navigator.language || navigator.userLanguage; 
    var language;

    userLang = (userLang != "en-EN" && userLang != "it-IT") ? "en-EN" : userLang
    $.ajax({ 
        url:  'language/' +  userLang + '.json', 
        dataType: 'json', async: false, dataType: 'json', 
        success: function (lang) { language = lang}
    }).done(function( data ) {

        //blocco menù
        setMenuField()

        $("#name").html(language.name)

        $("#about").html(language.about)
        //Blocco education
        setEducationField()

        $("#contact2").html(language.contatti)
        $("#mess").html(language.messaggio)
        
    });
    
    function setMenuField(){
        $("#ed1").html(language.ed)
        $("#pro1").html(language.progetti)
        $("#con1").html(language.contatti)
    }


    function setEducationField(){
        $("#ed").html(language.ed)
        $("#sup").html(language.data_sup)
        $("#titolo_sup").html(language.titolo_sup)
        $("#igs").html(language.igs)
        $("#tri").html(language.data_tri)
        $("#titolo_tri").html(language.titolo_tri)
        $("#mag").html(language.data_mag)
        $("#titolo_mag").html(language.titolo_mag)
    }
})(jQuery);