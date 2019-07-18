var displayWikipediaData = function() {

    var $linksElement = $('#links');
    var searchString = $('#searchString').val();
    var wikipediaUrl = "https://en.wikipedia.org/w/api.php?action=opensearch&search=" + searchString + "&format=json&callback=wikiCallback";

    $.ajax({ 
        url: wikipediaUrl,
        dataType: "jsonp",
        jsonp: "callback",
        success: function(response) {
            var linkLists = response[1];
            //do something -- output the results of the Wikipedia data onto the screen

            linkLists.forEach(function(item) {
                var url = 'https:/en.wikipedia.org/wiki/' + item;
                $linksElement.append('<li> <a href="' + url + '">' + item + '</a></li>');

                return url;     
            })

        }

    });

    return false;

}

$('#form').submit(displayWikipediaData);