$(document).ready(function() {
    getQuote();

    $("#getQuote").on('click', function (e) {
        e.preventDefault();
        getQuote();
    });

    var quoteText = $(".quote-text").text().trim()
    var quoteAuthor = $(".pull-left").text().trim();

    $(".twitter-share-button").attr('data-text', quoteText + " - " + quoteAuthor);
    $.getScript("https://platform.twitter.com/widgets.js");
})

function getQuote() {
    $.ajax({
        headers: {
          "X-Mashape-Key": "OivH71yd3tmshl9YKzFH7BTzBVRQp1RaKLajsnafgL2aPsfP9V",
          Accept: "application/json",
          "Content-Type": "application/x-www-form-urlencoded"
        },
        url: 'https://andruxnet-random-famous-quotes.p.mashape.com/cat=',
        success: function(response) {
            var r = JSON.parse(response);
            currentQuote = r.quote;
            currentAuthor = r.author;
            $('.quote-text').html(currentQuote);
            $('.pull-left').html(currentAuthor);
        }
    })
}
