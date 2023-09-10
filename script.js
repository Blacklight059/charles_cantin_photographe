$(document).ready(function(){

    $(newFunction()).click(function(){
        var value = $(this).attr('data-filter');
        
        if(value == "all")
        {
            //$('.filter').removeClass('hidden');
            $('.filter').show('1000');
        }
        else
        {
//            $('.filter[filter-item="'+value+'"]').removeClass('hidden');
//            $(".filter").not('.filter[filter-item="'+value+'"]').addClass('hidden');
            $(".filter").not('.'+value).hide('3000');
            $('.filter').filter('.'+value).show('3000');
            
        }
    });
    
    if ($(".filter-button").removeClass("active")) {
$(this).removeClass("active");
}
$(this).addClass("active");


	function newFunction() {
		return ".filter-button";
	}
});
        /* paste this line in verbatim */
        window.formbutton=window.formbutton||function(){(formbutton.q=formbutton.q||[]).push(arguments)};
        /* customize formbutton below*/     
        formbutton("create", {
          action: "https://formspree.io/f/xgejyblg",
          title: "Comment puis-je vous aider",
          fields: [
            { 
              type: "email", 
              label: "Email:", 
              name: "email",
              required: true,
              placeholder: "your@email.com"
            },
            {
              type: "textarea",
              label: "Message:",
              name: "message",
              placeholder: "What's on your mind?",
            },
            { type: "submit" }      
          ],
          styles: {
            button: {
                backgroundColor: "#7EA16B",
            },
          }
        });