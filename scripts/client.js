console.log('Here are all the available people:', people);

$(document).ready(onReady);

function onReady() {
  $('body').prepend(`<h2>Click on: </h2>`);
  for (person of people) {
    $('body').append(
      `<div data-name=${person.name}><img src="https://github.com/${person.githubUsername}.png?size=250" alt="Profile image of ${person.name}"></div>`
    );
  }
}
