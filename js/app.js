// code for the app

$("document").ready(function() {

  function generateTweet(url, quote, author) {

    var newURL = url + quote + " - " + author;
    return newURL;

  }

// on clicking the quote button
$("#generate").on("click", function() {
  var quote = $("#quote"); // load quote element
  var author = $("#author"); // load author element

// get json object using storm quote api
$.getJSON("http://quotes.stormconsultancy.co.uk/random.json",
  function(json){
    // change quote and author to new quote from api
    quote.text(json.quote);
    author.text(json.author);

    // replace pretweet url with new url
    var tweetLink = "http://twitter.com/intent/tweet?text="
     $("#tweet").attr("href", generateTweet(tweetLink, json.quote, json.author));
  });
});

});
