
$('.search-button').click(function () {
    alert("Button clicked");


})       //triggering event to the search-button class

var displayWikipediaData = function() {
    $.ajax({ 
        url:
        success: function(response) {
            //do something
            console.log("Yay! Success! Our ajax request worked!")

        }


    })

}
