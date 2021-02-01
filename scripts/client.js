console.log('Here are all the available people:', people);

$(document).ready(onReady);

let randomName = people[Math.floor(Math.random() * people.length - 1)].name;

people.sort(function () {
  return 0.5 - Math.random();
});

function onReady() {
  $('body').prepend(
    `<h2>Click on: <span class="random-name">${randomName}</span></h2>`
  );
  $(document).on('click', 'img', checkMatch);
  for (person of people) {
    $('body').append(`
      <div class="person-card">
        <img 
        class="person-image"
        data-name=${person.name} 
        src="https://github.com/${person.githubUsername}.png?size=250" 
        alt="Profile image of ${person.name}">
      </div>
    `);
  }
}

function checkMatch() {
  let firstName = $(this).data('name');
  if (firstName === randomName) {
    alert('You found a match!');
  } else {
    alert('Wrong person, try again.');
  }
}
