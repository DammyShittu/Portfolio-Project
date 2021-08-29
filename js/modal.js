const workProjects = [
  {
    title: 'WeSingAfrica Gospel Concert',
    shortDescription: 'WeSingAfrica Gospel Concert is a fictional annual worship concert that holds in Africa. This project showcases the Home and About Pages with sections relating to the event\'s programs, previous events gallery and invited guests.',
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an 
    unknown printer took a galley of type and scrambled it to make a type specimen book. 
    It has survived not only five centuries, but also the leap into electronic typesetting, 
    remaining essent, Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an 
    unknown printer took a galley of type and scrambled it to make a type specimen book. 
    It has survived not only five centuries, but also the leap into electronic typesetting, 
    remaining essent`,
    image: {
      imageUrl: './img/wesing.png',
      imageAlt: 'Mobile Snapshot',
    },
    technologies: ['HTML', 'CSS', 'JavaScript', 'Github'],
    seeLive: 'https://dammyshittu.github.io/WeSingAfrica-Capstone/',
    sourceUrl: 'https://github.com/DammyShittu/WeSingAfrica-Capstone',
  },
  {
    title: 'Todo List App',
    shortDescription: 'Todo List App is an app that helps you keep track of all the activities you need to execute over a period of time. Tasks can be added, marked as completed and deleted. You can edit a task by double clicking on the task title section.',
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an 
    unknown printer took a galley of type and scrambled it to make a type specimen book. 
    It has survived not only five centuries, but also the leap into electronic typesetting, 
    remaining essent, Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an 
    unknown printer took a galley of type and scrambled it to make a type specimen book. 
    It has survived not only five centuries, but also the leap into electronic typesetting, 
    remaining essent`,
    image: {
      imageUrl: './img/todo.png',
      imageAlt: 'ToDo List',
    },
    technologies: ['Html', 'Css', 'JavaScript', 'Webpack'],
    seeLive: 'https://dammyshittu.github.io/ToDo-List-App/',
    sourceUrl: 'https://github.com/DammyShittu/ToDo-List-App',
  },
  {
    title: 'Awesome Books',
    shortDescription: 'Awesome Books App is a Single-Page Application(SPA) that allows you to add books by typing in the book title and author name.',
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an 
    unknown printer took a galley of type and scrambled it to make a type specimen book. 
    It has survived not only five centuries, but also the leap into electronic typesetting, 
    remaining essent, Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an 
    unknown printer took a galley of type and scrambled it to make a type specimen book. 
    It has survived not only five centuries, but also the leap into electronic typesetting, 
    remaining essent`,
    image: {
      imageUrl: './img/awesome-books.png',
      imageAlt: 'Awesome Books',
    },
    technologies: ['Html', 'Css', 'JavaScript', 'Github'],
    seeLive: 'https://dammyshittu.github.io/Awesome-Books/',
    sourceUrl: 'https://github.com/DammyShittu/Awesome-Books',
  },
  {
    title: 'Multi-Post Stories',
    shortDescription: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.',
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an 
    unknown printer took a galley of type and scrambled it to make a type specimen book. 
    It has survived not only five centuries, but also the leap into electronic typesetting, 
    remaining essent.`,
    image: {
      imageUrl: './img/mobile-snapshot.png',
      imageAlt: 'Mobile Snapshot',
    },
    technologies: ['Html', 'Ruby on rails', 'Css', 'Github'],
    seeLive: 'index.html',
    sourceUrl: 'https://github.com/DammyShittu/Portfolio-Project',
  },
];

function createCard(project) {
  let worksText = `<li class="work-card project-1">
                  <div class="square ellipse"></div>
                  <div class="card">
                  <img src="${project.image.imageUrl}" alt="${project.image.imageAlt}">
                  </div>
                  <aside class="aside-1">
                    <h3>${project.title}</h3>
                    <p>${project.shortDescription}</p>
                    <div class="stack-used">
                      <ul>`;
  for (let i = 0; i < project.technologies.length; i += 1) {
    worksText += `<li class="stack">${project.technologies[i]}</li>`;
  }
  worksText += `</ul>
                    </div>
                    <button type="submit" class="project-btn">See Project</button>
                  </aside>
                </li>`;
  return worksText;
}

function createModal(project) {
  let worksText = `<section class="modal">
  <div class="modal-menu">
                  <img src="./img/Icon.png" alt="Close" class="modal-close">
                  <h4>${project.title}</h4>
                  <div class="modal-img">
                    <img src="${project.image.imageUrl}" alt="${project.image.imageAlt}">
                  </div>
                  <div class="modal-body">
                    <p>${project.description}</p>
                  </div>
                  <div class="stack-used stack-used-1">
                  <ul>`;
  for (let i = 0; i < project.technologies.length; i += 1) {
    worksText += `<li class="stack">${project.technologies[i]}</li>`;
  }
  worksText += `</ul>
                </div>
                  <div class="modal-btn">
                  <button type="submit" class="modalBtn"><a href="${project.seeLive}" target="_blank">See Live
                    <img src="./img/file.png" alt="See Live Icon" class="button-img"></a>
                  </button>
                  <button type="submit" class="modalBtn"><a href="${project.sourceUrl}">See Source
                  <img src="./img/git.png" alt="See Source Icon" class="button-img"></a>
                  </button>
                  </div>
                  </div>
                </section>`;

  return worksText;
}

const worksList = document.querySelector('#works ul');
const works = document.querySelector('#modal-div');
function insertHtml() {
  const myWorks = Object.keys(workProjects);
  const myWorksLength = Object.keys(workProjects).length;

  for (let i = 0; i < myWorksLength; i += 1) {
    worksList.innerHTML += createCard(workProjects[myWorks[i]], i);
  }

  for (let j = 0; j < myWorksLength; j += 1) {
    works.innerHTML += createModal(workProjects[myWorks[j]], j);
  }
}

worksList.onload = insertHtml();

const mainPage = document.querySelector('#main-page');
const header = document.getElementById('page-header');
const modal = document.querySelectorAll('.modal');

document.querySelectorAll('.project-btn').forEach((open, index) => {
  open.addEventListener('click', () => {
    modal.forEach((item, i) => {
      if (index === i) {
        item.style.display = 'block';
      }
    });
    mainPage.style.display = 'none';
    header.style.display = 'none';
  });
});

document.querySelectorAll('.modal-close').forEach((close) => {
  close.addEventListener('click', () => {
    document.querySelectorAll('.modal').forEach((item) => {
      item.style.display = 'none';
    });

    mainPage.style.display = 'block';
    header.style.display = 'flex';
  });
});

// Change Order Of Project Images With Odd Indexes
// This code has been left intentionally to address the issue of project image order.
// const cards = document.querySelectorAll('.card');
// cards.forEach((card, index) => {
//   if (index === 0 || index % 2 === 0) {
//     card.style.order = '0';
//   } else {
//     card.style.order = '1';
//   }
// });
