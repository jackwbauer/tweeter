/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

const data = [
  {
    "user": {
      "name": "Newton",
      "avatars": {
        "small":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png",
        "regular": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png",
        "large":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png"
      },
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": {
        "small":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_50.png",
        "regular": "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc.png",
        "large":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_200.png"
      },
      "handle": "@rd" },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  },
  {
    "user": {
      "name": "Johann von Goethe",
      "avatars": {
        "small":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_50.png",
        "regular": "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1.png",
        "large":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_200.png"
      },
      "handle": "@johann49"
    },
    "content": {
      "text": "Es ist nichts schrecklicher als eine tätige Unwissenheit."
    },
    "created_at": 1461113796368
  }
];

function renderTweets(tweets) {
    const $tweetContainer = $('#tweet-container');
    tweets.forEach((tweet) => {
      const tweetElement = createTweetElement(tweet);
      $tweetContainer.append(tweetElement);
    });
  // loops through tweets
    // calls createTweetElement for each tweet
    // takes return value and appends it to the tweets container
}

function createTweetElement(tweet) {
  const $tweet = $('<article>', { class: 'tweet' });  

  const $tweetDiv = $('<div>');
  const $tweetText = $('<p>').text(tweet.content.text);
  $tweetDiv.append($tweetText);

  $tweet.append(createTweetHeader(tweet.user), $tweetDiv, createTweetFooter(tweet.created_at));
  return $tweet;
}

function createTweetHeader(user) {
  const $header = $('<header>');
  const $avatar = $('<img>', { class: 'userIcon' }).attr('src', user.avatars.small);
  const $username = $('<span>', { class: 'username'}).text(user.name);
  const $handle = $('<span>', { class: 'handle' }).text(user.handle);
  $header.append($avatar, $username, $handle);
  return $header;
}

function createTweetFooter(timeCreated) {
  const $footer = $('<footer>');
  const $timestamp = $('<span>').text(`${Math.floor((new Date() - timeCreated) / 86400000)} days`);
  const $heart = $('<i>', { class: 'fas fa-heart fa-lg'});
  const $retweet = $('<i>', { class: 'fas fa-retweet fa-lg'});
  const $flag = $('<i>', { class: 'fas fa-flag fa-lg'});
  $footer.append($timestamp, $heart, $retweet, $flag);
  return $footer;
}

$(() => {
renderTweets(data);
})

$(() => {
  $('#tweet-form').submit(function(event) {
    event.preventDefault();
    const tweetData = $(this).serialize();
    $.post('/tweets', tweetData, () => console.log('success'));
  });
})


// $(function() {
//   var $button = $('new-tweet input');
//   $button.on('click', function() {
//     $button.preventDefault();
//     $.ajax('', { method: 'POST' })
//     .then
//   });
// });