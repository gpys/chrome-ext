document.addEventListener('DOMContentLoaded', function () {
  fetch('https://corporatebs-generator.sameerkumar.website/', {
    method: 'GET',
    headers: {
      Accept: 'application/json',
    },
  }).then((response) => {
    console.log(response.ok);
    if (response.ok) {
      response.json().then((json) => {
        tweetPrinter(json.phrase);
        goalPrinter(json.phrase);
      });
    }
  });
});

function goalPrinter(goal) {
  document.getElementById('goal').innerHTML = goal;
}

function tweetPrinter(phrase) {
  let convertedString = phrase.replaceAll(' ', '%20');
  document
    .getElementById('tweeter')
    .setAttribute(
      'href',
      `https://twitter.com/intent/tweet?text=${convertedString}`
    );
  console.log(
    `https://twitter.com/intent/tweet?text=${convertedString} target="_blank"`
  );
}
