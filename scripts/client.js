console.log('Here are all the available people:', people);

$(document).ready(onReady);

function onReady() {
  let randomName = people[Math.floor(Math.random() * people.length - 1)].name;
  $('body').prepend(
    `<h2>Click on: <span class="random-name">${randomName}</span></h2>`
  );
  for (person of people) {
    $('body').append(
      `<div data-name=${person.name}><img src="https://github.com/${person.githubUsername}.png?size=250" alt="Profile image of ${person.name}"></div>`
    );
  }
}
