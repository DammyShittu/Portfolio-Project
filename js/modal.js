const workProjects = {
  firstProject: {
    title: 'Multi-Post Stories',
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
      imageUrl: '../img/mobile-snapshot.png',
      imageAlt: 'Mobile Snapshot',
    },
    technologies: ['Html', 'Ruby on rails', 'Css', 'Github'],
    seeLive: 'index.html',
    sourceUrl: 'https://github.com/DammyShittu/Portfolio-Project',
  },
  secondProject: {
    title: 'Multi-Post Stories',
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
      imageUrl: '../img/mobile-snapshot.png',
      imageAlt: 'Mobile Snapshot',
    },
    technologies: ['Html', 'Ruby on rails', 'Css', 'Github'],
    seeLive: 'index.html',
    sourceUrl: 'https://github.com/DammyShittu/Portfolio-Project',
  },
  thirdProject: {
    title: 'Multi-Post Stories',
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
      imageUrl: '../img/mobile-snapshot.png',
      imageAlt: 'Mobile Snapshot',
    },
    technologies: ['Html', 'Ruby on rails', 'Css', 'Github'],
    seeLive: 'index.html',
    sourceUrl: 'https://github.com/DammyShittu/Portfolio-Project',
  },
  fourthProject: {
    title: 'Multi-Post Stories',
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
      imageUrl: '../img/mobile-snapshot.png',
      imageAlt: 'Mobile Snapshot',
    },
    technologies: ['Html', 'Ruby on rails', 'Css', 'Github'],
    seeLive: 'index.html',
    sourceUrl: 'https://github.com/DammyShittu/Portfolio-Project',
  },
};

function createCard(project, ind) {
  let htmlTxt = `<li class="work-card project-1">
                  <div class="square ellipse"></div>
                  <div class="card"></div>
                  <aside class="aside-1">
                    <h3>${project.title}</h3>
                    <p>${project.description}</p>
                    <div class="stack-used">
                      <ul>`;
                      for (let i = 0; i < project.technologies.length; i += 1) {
                        htmlTxt += `<li class="stack>${project.technologies[i]}</li>`;
                      }
          htmlTxt += `</ul>
                    </div>
                    <button type="submit">See Project</button>
                  </aside>
                </li>`
}

function createModal(project, ind) {
  let htmlTxt = `<section id="modal">
                  <div class="modal-menu">
                  <img src="./img/Icon.png" alt="Close" class="modal-close">
                  <h2>${project.title}</h2>
                  <div class="modal-img">
                    <img src="${project.image.imageUrl}" alt="${project.image.imageAlt}">
                  </div>
                  <div class="modal-body">
                    <p>${project.description}</p>
                  </div>
                  <div class="stack-used stack-used-1">
                    <ul>
                      <li class="stack">Html</li>
                      <li class="stack">Ruby on Rails</li>
                      <li class="stack">Css</li>
                    </ul>
                  </div>
                  <div class="modal-btn">
                  <button type="submit" class="modalBtn-1">See Live
                    <img src="./img/file.png" alt="">
                  </button>
                  <button type="submit" class="modalBtn-2">See Source
                  <img src="./img/git.png" alt="">
                  </button>
                </section>`;
}