// 'use strict';

// Obtendo qual tipo de imagem source está fornecendo (para lazy load imgs)
const getImgType = function() {
  const img = document.querySelector(".about__img").currentSrc;
  const dot = img.lastIndexOf(".");
  const imgType = img.slice(dot + 1);
  
  return imgType;
};


// State variables
let mobileNavigation = false;
let firstTime = true;
const currentImgType = getImgType();


// General variables
const header = document.querySelector(".header");
const allSections = document.querySelectorAll(".section");
const navList = document.querySelector(".nav__list");
const navLinks = document.querySelectorAll(".nav__link");
const linkContacts = document.querySelector(".nav__link--contacts");
const allWorks = document.querySelectorAll(".work");
const navMobileIcon = document.querySelector(".nav__mobile");
const skillsContainer = document.querySelector(".skills__container");
const upButton = document.querySelector(".upwards__button");
const dropdown = document.querySelector(".dropdown");
const logoLink = document.querySelector(".logo__link");
const imgTargets = document.querySelectorAll(`source[srcset$='${getImgType()}']`);


// Translate variables
const headingHero = document.querySelector(".heading__primary");
const headingText = document.querySelector(".heading__text");
const btnTell = document.querySelector(".btn--tell__more");
const aboutMe = document.querySelector(".heading__secondary--helper-1");
const allParagraphs = document.querySelectorAll(".about__paragraph");
const aboutTexts = document.querySelectorAll(".about__text");
const headingSkills = document.querySelector(".heading__tertiary");
const skillContainerReact = document.querySelector(".skill__container--helper__react");
const headingProjects = document.querySelector(".heading__secondary--helper-2");
const headingProjectsHelper = document.querySelector(".heading--helper");
const workText = document.querySelectorAll(".work__text");
const footerLink = document.querySelector(".footer__link");


const textVariables = [
  navLinks[0],
  navLinks[3],
  headingHero,
  headingText,
  btnTell,
  aboutMe,
  allParagraphs[0],
  allParagraphs[1],
  aboutTexts[0],
  aboutTexts[1],
  headingSkills,
  headingProjects,
  headingProjectsHelper,
  workText[0],
  workText[1],
  footerLink,
];

const textEnglish = textVariables.map(text => text.innerHTML);

const textPortuguese = [
  "Projetos",
  "Contatos",
  `Olá! Me chamo Diego<br>Desenvolvedor front-end`,
  "Programar é resolver problemas, mas resolver problemas nem sempre é programar, correto?",
  "Conte-me mais",
  "Sobre mim",

  "Se a resposta for sim, então é um bom sinal, estou no caminho certo, tomei a iniciativa de aprender JavaScript com o objetivo principal de dar vida a ideias que resolvam problemas, antes de aprender código eu já era um solucionador de problemas.",

  "Estou em transição de carreira, anteriormente empreendedor da área de tecnologia, mas não deixando de lado o que já aprendi até aqui: gestão que o relacionamento com clientes e colaboradores ensina, liderar também é ceder quando necessário, é essencial prezar por um bom ambiente de trabalho, e não menos importante, persistência (obrigado Deus) adquirida na caminhada para me tornar desenvolvedor.",

  "Programando",
  `de Portugal
    <img class='about__flag' src='icons/portugal.svg' alt='Portugal flag icon'/>
  `,
  "Tecnologias que trabalho",
  "Projetos",
  "Passe o mouse para ver mais detalhes",
  "Teste seu conhecimento sobre países e bandeiras, perguntas aleatórias usando a API rest countries. (em desenvolvimento)",
  "Esse projeto está em desenvolvimento, ficará pronto em breve, volte mais tarde e me dê um retorno sobre se gostou.",
  "Hosana nas alturas",
];


//////////////////////////////////////////////
/////////////////// RELOAD ///////////////////
//////////////////////////////////////////////


logoLink.addEventListener("click", () => document.location.reload(true));


//////////////////////////////////////////////////////////////
/////////////////// SCROLL BOTAO TELL MORE ///////////////////
//////////////////////////////////////////////////////////////


btnTell.addEventListener("click", function() {
  allSections[0].scrollIntoView({ behavior: "smooth", block: "start" });
});


///////////////////////////////////////////////////////////
/////////////////// EFEITO HOVER NAVBAR ///////////////////
///////////////////////////////////////////////////////////


const changeColor = function(event, color) {

  // Efeito não deve acontecer no mobile
  if (mobileNavigation) return;

  if (event.target.classList.contains("nav__link")) {
    const link = event.target;
    const siblings = event.target.closest(".nav__list").querySelectorAll(".nav__link");

    siblings.forEach(function(sibling) {
      if (sibling !== link) sibling.style.color = color;
    });

  };

};


navList.addEventListener("mouseover", function(event) {
  changeColor(event, "#454560");
});


navList.addEventListener("mouseout", function(event) {
  changeColor(event, "#FFF");
});


//////////////////////////////////////////////////////
/////////////////// DROPDOWN MENU ///////////////////
/////////////////////////////////////////////////////


const interactDropdownMenu = function(event) {
  
  // Efeito não deve acontecer no mobile
  // if (mobileNavigation) return;

  // Selecionar elemento dropdown__menu e cor dinâmicamente
  const dropdownMenu = event.currentTarget.querySelector(".dropdown__menu");

  const color = event.type === "mouseover" ? "#454560" : "#fff";

  // Aplicar efeitos
  dropdownMenu.classList.toggle("dropdown__menu--active");

  if (event.target.classList.contains("nav__link--dropdown") ||
      event.target.classList.contains("dropdown__menu")) {
    navLinks.forEach(navLink => navLink.style.color = color);
  };

  // navLinks[0].style.color = navLinks[1].style.color = navLinks[2].style.color = color;

};


// Adicionar efeito
dropdown.addEventListener("mouseover", function(event) {
  interactDropdownMenu(event);
});


// Remover efeito
dropdown.addEventListener("mouseout", function(event) {
  interactDropdownMenu(event);
});


////////////////////////////////////////////////////////////////
/////////////////// STICKY UPWARDS/TRANSLATE ///////////////////
////////////////////////////////////////////////////////////////


const stickyOptions = {
  root: null,
  threshold: 0.7,
};


const rotateUpButton = function (html) {

  // Rodar upwards__button
  upButton.classList.toggle("rotate--first__half");

  // Inserir HTML com pequeno atraso para criar efeito "virar"
  setTimeout(() => upButton.innerHTML = html, 100);

};


const changeIconTo = function(isIntersecting) {
  
  let html;

  // Se não for string, repor bandeira oposto ao que está traduzido
  if (typeof isIntersecting !== "string") {

    if (navLinks[0].textContent === "Projects") {
      html = '<img class="translate__icon" src="icons/portugal.svg" alt="Portugal flag icon"/>';
    };
    
    if (navLinks[0].textContent === "Projetos") {
      html = '<img class="translate__icon" src="icons/uk.svg" alt="United Kingdom flag icon"/>';
    };

  };


  // Se 'isIntersecting' conter string, mudar ícone conforme string
  if (isIntersecting === "english") {
    html = '<img class="translate__icon" src="icons/uk.svg" alt="United Kingdom flag icon"/>';
  };


  if (isIntersecting === "portuguese") {
    html = '<img class="translate__icon" src="icons/portugal.svg" alt="Portugal flag icon"/>';
  };


  // Se não estiver interseccionando, mudar para seta
  if (!isIntersecting) {
    html = '<ion-icon name="caret-up-outline" class="upwards__icon"></ion-icon>';
  };

  rotateUpButton(html);

};


const stickyHeader = function(entries) {
  
  const [entry] = entries;

  // Se primeira vez, não rodar ícone (causa bug de inverter bandeira se carregar página do hero pra baixo)
  if (!firstTime) changeIconTo(entry.isIntersecting);

  // Caso usuário faça F5 no meio da página (para bandeira não ficar ao contrário)
  if (firstTime && !entry.isIntersecting) {
    changeIconTo(entry.isIntersecting);
  };

  // Indicar que se começou a usar a página
  firstTime = false;

};


const headerObserver = new IntersectionObserver(stickyHeader, stickyOptions);
headerObserver.observe(header);


//////////////////////////////////////////////////////
/////////////////// UPWARDS BUTTON ///////////////////
//////////////////////////////////////////////////////


const translateTo = function(language) {

  // Selecionando para qual idioma traduziremos
  const languageArray = language === "portuguese" ? textPortuguese : textEnglish;

  // Traduzindo pseudo class
  skillContainerReact.classList.toggle("skill__container--helper__react--pt");  

  // Executando tradução
  textVariables.forEach((element, index) => element.innerHTML = languageArray[index]);

};


upButton.addEventListener("click", function(event) {

  // Se contiver classe "translate__icon", ou seja função de upwards é traduzir
  if (this.firstElementChild.classList.contains("translate__icon")) {

    // E se bandeira for portuguesa
    if (this.firstElementChild.getAttribute("src").includes("portugal")) {

      translateTo("portuguese");
      
      changeIconTo("english");
      
      // Mudar link de 'hosana in the highest' para link em português
      footerLink.href = "https://www.respostas.com.br/hosana/";
      
    };    

    // E se bandeira for inglesa
    if (this.firstElementChild.getAttribute("src").includes("uk")) {
      
      translateTo("english");
      
      changeIconTo("portuguese");

      // Mudar link de 'hosana in the highest' para link em inglês
      footerLink.href = "https://www.patheos.com/blogs/christiancrier/2015/08/15/what-does-hosanna-mean-a-biblical-definition-of-hosanna/";

    };

  };


  // Se não contiver bandeira fazer scroll para cima
  if (!this.firstElementChild.classList.contains("translate__icon")) {
    header.scrollIntoView({ behavior: "smooth", block: "start" });
  };

});


///////////////////////////////////////////////////////
/////////////////// REVEAL SECTIONS ///////////////////
///////////////////////////////////////////////////////


const revealSection = function(entries, observer) {

  // Getting entry
  const [entry] = entries;
  
  // Se não estiver interseccionando, return
  if (!entry.isIntersecting) return;

  // Removing section--hidden from section
  entry.target.classList.remove("section--hidden");

  // Stop to observe
  observer.unobserve(entry.target);
};


const revealOptions = {
  root: null,
  threshold: 0.2,
};


const sectionObserver = new IntersectionObserver(revealSection, revealOptions);

// Dessa maneira section continua vísivel mesmo com JS desabilitado
allSections.forEach(section => {
  section.classList.add("section--hidden");
  sectionObserver.observe(section);
});


//////////////////////////////////////////////////////////
/////////////////// INFO WORKS SECTION ///////////////////
//////////////////////////////////////////////////////////


const hoverFX = function(event) {

  // Selecting image and info div
  const image = event.target.querySelector(".work__image");
  const infoElement = event.target.querySelector(".work__info");

  // Storing effect into variables
  const blur = event.type === "mouseenter" ? "blur(0.5rem)" : "blur(0)";

  // Applying/removing effects
  image.style.filter = blur;
  infoElement.classList.toggle("hidden");

};


allWorks.forEach(function(work) {

  work.addEventListener("mouseenter", function(event) {
    hoverFX(event);
  });
  
  work.addEventListener("mouseleave", function(event) {
    hoverFX(event);
  });

});


//////////////////////////////////////////////////////////////
/////////////////// DISABLE HOVER EFFECTS ////////////////////
//////////////////////////////////////////////////////////////


// Caso janela já inicie com tamanho menor que 945px, de forma que EL abaixo não entre em ação
if (window.innerWidth < 945) mobileNavigation = true;

const toggleHoverFX = function(event) {

  const windowWidth = event.target.innerWidth;

  mobileNavigation = windowWidth < 945 ? true : false;
  navList.style.transform = windowWidth < 945 ? "translateX(100%)" : "translateX(0)";

  // Repor navMobileIcon quando diminuir janela, aumentar, e depois diminuir novamente
  if (windowWidth < 945) navMobileIcon.name = "menu-outline";
  
  let newText;

  // Texto dinamico Tap << - >> Hover
  if (windowWidth < 945) {

  //   if (navLinks[0].textContent === "Projects") {
  //     newText = headingProjectsHelper.textContent.replace("Hover the mouse", "Tap");
  //   } else {
  //     newText = headingProjectsHelper.textContent.replace("Passe o mouse", "Toque");
  //   };
    
  // } else {

  //   if (navLinks[0].textContent === "Projects") {
  //     newText = headingProjectsHelper.textContent.replace("Tap", "Hover the mouse");
  //   } else {
  //     newText = headingProjectsHelper.textContent.replace("Toque", "Passe o mouse");
  //   };

  };
  
  headingProjectsHelper.textContent = newText;

  /*
  // Tentativa de melhoria no código acima, depois continuarei
  // .replace não retorna false quando nao encontra texto (como esperavámos)
  if (windowWidth < 945) {
    newText = 
      headingProjectsHelper.textContent.replace("Hover the mouse", "Tap") ??
      headingProjectsHelper.textContent.replace("Passe o mouse", "Toque")
    ;
  } else {
    newText =
      headingProjectsHelper.textContent.replace("Tap", "Hover the mouse") ??
      headingProjectsHelper.textContent.replace("Toque", "Passe o mouse")
    ;
  };
  */
  
};


window.addEventListener("resize", function(event) {
  toggleHoverFX(event);
});


//////////////////////////////////////////////////////////
/////////////////// MOBILE NAVIGATION ////////////////////
//////////////////////////////////////////////////////////


navMobileIcon.addEventListener("click", function(event) {
  
  const text = this.name;
  const hyphenPosition = text.indexOf("-");
  const iconType = text.slice(0, hyphenPosition);
 
  // Alterando ícone de forma dinâmica
  this.name = iconType === "menu" ? "close-outline" : "menu-outline";
  
  // E então deslizando navbar também de forma dinâmica
  navList.style.transform = iconType === "menu" ? "translateX(0)" : "translateX(100%)";
  
});


// Recolher barra ao interagir com ela
navList.addEventListener("click", function(event) {
  
  // Efeito deve acontecer somente no mobile
  if (!mobileNavigation) return;

  if (event.target.classList.contains("nav__link")) {

    const link = event.target;

    // Se clicar em qualquer outro
    if (link !== linkContacts) {
      navList.style.transform = "translateX(100%)";
      navMobileIcon.name = "menu-outline";
    };

  };

});


////////////////////////////////////////////////////////
/////////////////// RECOLHER NAVBAR ////////////////////
////////////////////////////////////////////////////////


const recallOptions = {
  root: null,
  threshold: 0.8,
};


// Recolher mobile nav bar quando ela sair de vista (ao fazer scroll)
const recallMobilenav = function(entries) {

  // Efeito deve acontecer somente no mobile
  if (!mobileNavigation) return;

  const [entry] = entries;

  if (!entry.isIntersecting) {
    navList.style.transform = "translateX(100%)";
    navMobileIcon.name = "menu-outline";
  };

};


const recallObserver = new IntersectionObserver(recallMobilenav, recallOptions);
recallObserver.observe(header);


////////////////////////////////////////////////////////
/////////////////// SKILLS COLOR FX ////////////////////
////////////////////////////////////////////////////////


const skillContainerFX = function (event) {

  // Efeito não deve acontecer no mobile
  if (mobileNavigation) return;

  if (event.target.classList.contains("skill__container")) {
    
    // Selecting skill container
    const skillContainer = event.target;
    
    // FX variables
    const transformQtt = event.type === "mousemove" ? "translateY(-6%)" : "translateY(0)";
    const backgroundColor = event.type === "mousemove" ? "var(--color--main)" : "inherit";
    const skillTitleColor = event.type === "mousemove" ? "var(--color--white)" : "inherit";

    const skillLogo = skillContainer.querySelector(".skill__logo");
    const skillTitle = skillContainer.querySelector(".skill__title");
    let logoColor;
    

    if (skillLogo.name.includes("javascript")) {
      logoColor = event.type === "mousemove" ? "#f0db4f" : "inherit";
    };

    if (skillLogo.name.includes("css")) {
      logoColor = event.type === "mousemove" ? "#2965f1" : "inherit";
    };
    
    if (skillLogo.name.includes("react")) {
      logoColor = event.type === "mousemove" ? "#61DBFB" : "inherit";
    };
    
    if (skillLogo.name.includes("html5")) {
      logoColor = event.type === "mousemove" ? "#f06529" : "inherit";
    };

    skillContainer.style.transform = transformQtt;
    skillContainer.style.backgroundColor = backgroundColor;
    skillTitle.style.color = skillTitleColor;
    skillLogo.style.color = logoColor;

  };

};


skillsContainer.addEventListener("mousemove" ,function(event) {
  // Aplicar efeito
  skillContainerFX(event);
});


skillsContainer.addEventListener("mouseout", function(event) {

  const mouseIsOnLogoOrTitle = 
    event.toElement?.classList.contains("skill__logo") ||
    event.toElement?.classList.contains("skill__title")
  ;
  
  // Se mouse sair e não estiver no logo, nem no title
  if (!mouseIsOnLogoOrTitle) {
    // Desfazer efeito
    skillContainerFX(event);
  };
    
});


///////////////////////////////////////////////////////
/////////////////// LAZY LOAD IMGS ////////////////////
///////////////////////////////////////////////////////


const loadImg = function(entries, observer) {
  
  // Nota: 
  // Estou usando forEach abaixo ao invés de destructuring porque quando intercetionObserver chega nas imagens sample, as recebia todas de uma só vez numa array dentro de entries, fazendo com que const [entry] = [imagem1, imagem2], causando bug de só trocar src da primeira imagem.
  // Futuramente tentar fazer com dom traversing ou outra técnica porque se forem muitas imagens forEach pode causar problemas de performance no app.
  
  entries.forEach(entry => {

    if (!entry.isIntersecting) return;

    const newSrc = entry.target
      .getAttribute("srcset")
      .replace("-lazy", "")
    ;

    // Alterando para imagem em resolução completa
    entry.target.srcset = newSrc;

    // Só alterar remover classe 'lazy__img' depois que imagem carregar
    entry.target.addEventListener("load", () => {
      entry.target.classList.remove("lazy__img");
    });

    // Para de observar elemento
    observer.unobserve(entry.target);

  });

};

const loadImgOptions = {
  root: null,
  threshold: 0,
  rootMargin: mobileNavigation ? '250px' : "50px",
};

const imgObserver = new IntersectionObserver(loadImg, loadImgOptions);


imgTargets.forEach(function(img) {
  img.classList.add("lazy__img");
  imgObserver.observe(img);
});





// "THAT'S ALL FOLKS!" //

