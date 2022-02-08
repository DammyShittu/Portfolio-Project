const workProjects = [
  {
    title: 'TradeIt',
    description: 'TradeIt is a mobile web application where you can manage your budget: you have a list of transactions associated with a category so that you can see how much money you spent and on what.',
    image: {
      imageUrl: './img/tradeit.png',
      imageAlt: 'TradeIt',
    },
    technologies: ['Ruby', 'Rails', 'Bootstrap', 'Github'],
    seeLive: 'https://stormy-lake-50200.herokuapp.com/',
    sourceUrl: 'https://github.com/DammyShittu/TradeIt',
  },
  {
    title: 'Covid19 Metrics',
    description: 'Covid19 Metrics is a single-page application (SPA) that showcases Covid19 data for one hundred and ninety-five(195) countries. The data being showcased was fetched from the Narrativa API. The fetched data is being displayed in cards on the Home page, while data for each country\'s region is being displayed on the Details page. Countries with empty regional data display an informative text to tell users about the unavailable regional data.',
    image: {
      imageUrl: './img/world-screenshot.png',
      imageAlt: 'World Covid19 Cases',
    },
    technologies: ['React', 'Redux', 'Jest', 'CSS'],
    seeLive: 'https://worlds-covid19.netlify.app/',
    sourceUrl: 'https://github.com/DammyShittu/Covid19-Metrics-App',
  },
  {
    title: 'Space Travelers\' Hub',
    description: 'Space Travelers\' Hub is single-paged application (SPA) with 3 subpages, Rockets,Missions and My Profile. Data for rockets and missions pages was fetched from rocket_API and mission_API. This project allows user to do rocket reservation and cancellation. It also allows users to join and leave missions. These actions are reflected on My Profile page. Lastly, Kanban Board was used to collaborate for this project.',
    image: {
      imageUrl: './img/rockets-page.png',
      imageAlt: 'Space Travelers\' Hub',
    },
    technologies: ['React', 'Redux', 'CSS', 'Github'],
    seeLive: 'https://space-hub.netlify.app/',
    sourceUrl: 'https://github.com/DammyShittu/react-spacex',
  },
  {
    title: 'Math Magicians',
    description: 'Math magicians is a web-app for all fans of mathematics. It is a Single Page App (SPA) that allows users to make simple calculations, and read a random math-related quote. It consists of three(3) page sections, "Home", "Calculator", and "Quote". The Home page shows the introdutory message to the app, the Calculator page contains a calculator app where users can perform mathematical operations, while the Quote page display a mathematical quote.',
    image: {
      imageUrl: './img/home.png',
      imageAlt: 'Math Magicians',
    },
    technologies: ['React', 'Redux', 'CSS', 'Jest', 'Github'],
    seeLive: 'https://maths-magicians.netlify.app/',
    sourceUrl: 'https://github.com/DammyShittu/Math-Magicians',
  },
  {
    title: 'Todo List App',
    description: 'Todo List App is an app that helps you keep track of all the activities you need to execute over a period of time. Tasks can be added, marked as completed and deleted. You can edit a task by double clicking on the task title section.',
    image: {
      imageUrl: './img/todo.png',
      imageAlt: 'ToDo List',
    },
    technologies: ['Html', 'CSS', 'JavaScript', 'Webpack'],
    seeLive: 'https://dammyshittu.github.io/ToDo-List-App/',
    sourceUrl: 'https://github.com/DammyShittu/ToDo-List-App',
  },
  {
    title: 'WeSingAfrica Gospel Concert',
    description: 'WeSingAfrica Gospel Concert is a fictional annual worship concert that holds in Africa. This project showcases the Home and About Pages with sections relating to the event\'s programs, previous events gallery and invited guests.',
    image: {
      imageUrl: './img/wesing.png',
      imageAlt: 'Mobile Snapshot',
    },
    technologies: ['HTML', 'CSS', 'JavaScript', 'Github'],
    seeLive: 'https://dammyshittu.github.io/WeSingAfrica-Capstone/',
    sourceUrl: 'https://github.com/DammyShittu/WeSingAfrica-Capstone',
  },
];

// function createCard(project) {
//   let worksText = `<li class="work-card project-1" data-aos="fade-left">
//                   <div class="square ellipse"></div>
//                   <div class="card">
//                   <img src="${project.image.imageUrl}" alt="${project.image.imageAlt}">
//                   </div>
//                   <aside class="aside-1">
//                     <h3>${project.title}</h3>
//                     <p>${project.description}</p>
//                     <div class="stack-used">
//                       <ul>`;
//   for (let i = 0; i < project.technologies.length; i += 1) {
//     worksText += `<li class="stack">${project.technologies[i]}</li>`;
//   }
//   worksText += `</ul>
//                     </div>
//                     <button type="submit" class="project-btn">See Project</button>
//                   </aside>
//                 </li>`;
//   return worksText;
// }

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

// const worksList = document.querySelector('#works ul');
const works = document.querySelector('#modal-div');
function insertHtml() {
  const myWorks = Object.keys(workProjects);
  const myWorksLength = Object.keys(workProjects).length;

  // for (let i = 0; i < myWorksLength; i += 1) {
  //   worksList.innerHTML += createCard(workProjects[myWorks[i]], i);
  // }

  for (let j = 0; j < myWorksLength; j += 1) {
    works.innerHTML += createModal(workProjects[myWorks[j]], j);
  }
}

works.onload = insertHtml();

const mainPage = document.querySelector('#main-page');
const header = document.getElementById('page-header');
const footer = document.getElementById('footer');
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
    footer.style.display = 'none';
  });
});

document.querySelectorAll('.modal-close').forEach((close) => {
  close.addEventListener('click', () => {
    document.querySelectorAll('.modal').forEach((item) => {
      item.style.display = 'none';
    });

    mainPage.style.display = 'block';
    header.style.display = 'flex';
    footer.style.display = 'flex';
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
