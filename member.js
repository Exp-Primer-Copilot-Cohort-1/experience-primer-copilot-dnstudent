function skillsMember() {
  console.log('member.js: skillsMember()');
  // var member = document.getElementById('member');
  // var member = document.querySelector('#member');
  var member = document.querySelector('.member');
  console.log(member);
  member.addEventListener('click', function() {
    console.log('member.js: member.addEventListener()');
    var memberSkills = document.querySelector('.member-skills');
    console.log(memberSkills);
    if (memberSkills.classList.contains('member-skills--open')) {
      console.log('member.js: memberSkills.classList.contains()');
      memberSkills.classList.remove('member-skills--open');
    } else {
      console.log('member.js: memberSkills.classList.add()');
      memberSkills.classList.add('member-skills--open');
    }
  });
}