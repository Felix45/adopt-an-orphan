const ourTeam = [
  {
    username: 'Leticia Zawadi',
    position: 'Centre Director',
    resume: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    picture: 'assets/images/letticia.jpg',
    alt: 'Zawadi foundation Centre Director',
  },
  {
    username: 'Felix Tubman',
    position: 'Deputy Centre Director',
    resume: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    picture: 'assets/images/felxi.jpg',
    alt: 'Zawadi foundation Deputy Centre Director',
  },
  {
    username: 'Peter Muteti',
    position: 'Finance Officer',
    resume: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    picture: 'assets/images/peter.jpg',
    alt: 'Zawadi foundation Finance Officer',
  },
  {
    username: 'Renee Mwiva',
    position: 'Counsellor',
    resume: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    picture: 'assets/images/renee.jpg',
    alt: 'Zawadi foundation Counsellor',
  },
  {
    username: 'Yohanness Kraph',
    position: 'Counsellor',
    resume: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    picture: 'assets/images/kraph.png',
    alt: 'Zawadi foundation Counsellor',
  },
  {
    username: 'Yvette Joy',
    position: 'International Linkages',
    resume: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    picture: 'assets/images/yvette.jpg',
    alt: 'Zawadi foundation liason officer',
  },
];

const createHeaderSection = (title, content, elClass = 'text-center') => {
  const header = document.createElement(title);
  header.className = elClass;
  header.textContent = content;
  return header;
};

const createButtonSection = () => {
  const toggleButtonSection = document.createElement('div');
  toggleButtonSection.className = 'team-members-expand';
  const toggleButton = document.createElement('a');
  toggleButton.innerHTML = 'MORE <span class=\'fa fa-angle-down fa-lg\'></span>';
  toggleButton.className = 'btn btn-inverse d-flex flex-center';
  toggleButtonSection.appendChild(toggleButton);

  return toggleButtonSection;
};

const teamMembers = (member, index) => {
  const memberRow = document.createElement('div');
  memberRow.className = (index <= 1) ? 'd-flex flex-center team-member' : 'd-none flex-center team-member';

  const imgHolder = document.createElement('div');
  imgHolder.className = 'our-team-profile';

  const profileImg = document.createElement('img');
  profileImg.src = member.picture;
  profileImg.alt = member.alt;

  imgHolder.appendChild(profileImg);
  memberRow.appendChild(imgHolder);

  const detailsDiv = document.createElement('div');
  detailsDiv.className = 'team-member-details';
  const memberName = document.createElement('h3');
  memberName.textContent = member.username;

  const memberPosition = document.createElement('div');
  memberPosition.className = 'team-member-position mb-1';
  memberPosition.innerHTML = `<em><strong>${member.position}</strong></em>`;

  const memberDescription = document.createElement('div');
  memberDescription.className = 'team-member-bio';
  memberDescription.textContent = member.resume;

  detailsDiv.appendChild(memberName);
  detailsDiv.appendChild(memberPosition);
  detailsDiv.appendChild(memberDescription);

  memberRow.appendChild(detailsDiv);

  return memberRow;
};

const ourTeamSection = () => {
  const section = document.createElement('section');
  section.className = 'd-flex flex-column our-team';

  const header = createHeaderSection('h2', 'Our Team','text-center title-underline');
  const headerContainer = document.createElement('div');
  headerContainer.className = 'pos-rel mb-2';
  headerContainer.appendChild(header);
  section.appendChild(headerContainer);

  ourTeam.forEach((member, index) => { section.appendChild(teamMembers(member, index)); });
  document.getElementById('our-team').appendChild(section);

  const toggleButtonSection = createButtonSection();
  section.appendChild(toggleButtonSection);
};
ourTeamSection();
