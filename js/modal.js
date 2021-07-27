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
    soureUrl: 'https://github.com/DammyShittu/Portfolio-Project',
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
    soureUrl: 'https://github.com/DammyShittu/Portfolio-Project',
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
    soureUrl: 'https://github.com/DammyShittu/Portfolio-Project',
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
    soureUrl: 'https://github.com/DammyShittu/Portfolio-Project',
  },
};

function createModal() {
  let htmlTxt = `<section id="modal">
                  <div class="modal-menu">
                  <img src="./img/Icon.png" alt="Close" class="modal-close">
                  <h2>Multi-Post Stories</h2>
                  <div class="modal-img">
                    <img src="./img/mobile-snapshot.png" alt="">
                  </div>
                  <div class="modal-body">
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting  ever since the 1500s, when an unknown printer took a galley of type veris lapoa todoe.</p>
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
                  </button>`;
}