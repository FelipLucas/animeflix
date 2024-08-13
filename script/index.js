//slider
let slideWrapper = document.querySelector(".slide-item1");
let slideWrapperTwo = document.querySelector(".slide-item2");
let slideWrapperThree = document.querySelector(".slide-item3");

let principalSlide = document.querySelector(".div-principal");
let principalSlideTwo = document.querySelector(".div-principal2");
let principalSlideThree = document.querySelector(".div-principal3");

let buttonSlideWrapper = document.querySelector(".bi-circle-fill-one");
let buttonSlideWrapperTwo = document.querySelector(".bi-circle-fill-two");
let buttonSlideWrapperThree = document.querySelector(".bi-circle-fill-three");

let overlaySlideWrapper = document.querySelector(".overlay-principal");
let overlaySlideWrapperTwo = document.querySelector(".overlay-principal.two");
let overlaySlideWrapperThree = document.querySelector(".overlay-principal.three");

let idadeClassificacao18 = document.querySelector(".idade-classi");
let idadeClassificacao14 = document.querySelector(".idade-classi2");
let idadeClassificacao12 = document.querySelector(".idade-classi3");

buttonSlideWrapperTwo.addEventListener("click", () => {
  slideWrapperTwo.style.transform = "translateX(-100%)";

  principalSlide.style.display = "none";
  overlaySlideWrapper.style.display = "none";
  idadeClassificacao18.style.display = "none";

  buttonSlideWrapperTwo.classList.add("active");
  buttonSlideWrapper.classList.remove("active");

  setInterval(() => {
    buttonSlideWrapper.addEventListener("click", () => {
      slideWrapperTwo.style.transform = "translateX(100%)";

      principalSlide.style.display = "block";
      principalSlideTwo.style.display = "none";

      overlaySlideWrapper.style.display = "block";

      idadeClassificacao18.style.display = "block";

      buttonSlideWrapper.classList.add("active");
      buttonSlideWrapperTwo.classList.remove("active");

      setTimeout(() => {
        window.location.reload();
      }, 1500);
    });
  }, 100);
});

buttonSlideWrapperThree.addEventListener("click", () => {
  slideWrapperThree.style.transform = "translateX(-200%)";

  principalSlideTwo.style.display = "none";
  principalSlide.style.display = "none";

  overlaySlideWrapperTwo.style.display = "none";
  overlaySlideWrapper.style.display = "none";
  idadeClassificacao18.style.display = "none";
  idadeClassificacao14.style.display = "none";

  buttonSlideWrapperThree.classList.add("active");
  buttonSlideWrapperTwo.classList.remove("active");
  buttonSlideWrapper.classList.remove("active");

  setInterval(() => {
    buttonSlideWrapper.addEventListener("click", () => {
      slideWrapperThree.style.transform = "translateX(200%)";

      principalSlide.style.display = "block";
      principalSlideThree.style.display = "none";

      overlaySlideWrapper.style.display = "block";

      idadeClassificacao12.style.display = "none";
      idadeClassificacao18.style.display = "block";

      buttonSlideWrapper.classList.add("active");
      buttonSlideWrapperThree.classList.remove("active");

      setTimeout(() => {
        window.location.reload();
      }, 1500);
    });
  }, 100);

  setInterval(() => {
    buttonSlideWrapperTwo.addEventListener("click", () => {
      slideWrapperThree.style.transform = "translateX(100%)";

      principalSlideTwo.style.display = "block";
      principalSlideThree.style.display = "none";

      overlaySlideWrapperTwo.style.display = "block";

      idadeClassificacao12.style.display = "none";
      idadeClassificacao14.style.display = "block";

      buttonSlideWrapperTwo.classList.add("active");
      buttonSlideWrapperThree.classList.remove("active");

      setTimeout(() => {
        window.location.reload();
      }, 2000);
    });
  }, 100);
});

const sliderAuto = setInterval(() => {
  slideWrapperTwo.style.transform = "translateX(-100%)";
  principalSlide.style.display = "none";
  overlaySlideWrapper.style.display = "none";
  buttonSlideWrapperTwo.classList.add("active");
  buttonSlideWrapper.classList.remove("active");
  idadeClassificacao18.style.display = "none";

  setInterval(() => {
    buttonSlideWrapper.addEventListener("click", () => {
      slideWrapperTwo.style.transform = "translateX(100%)";

      principalSlide.style.display = "block";
      principalSlideTwo.style.display = "none";

      overlaySlideWrapper.style.display = "block";

      idadeClassificacao18.style.display = "block";

      buttonSlideWrapper.classList.remove("active");
      buttonSlideWrapperTwo.classList.add("active");

      setTimeout(() => {
        window.location.reload();
      }, 2000);
    });
  }, 100);
}, 5000);

const sliderAutoTwo = setInterval(() => {
  slideWrapperThree.style.transform = "translateX(-200%)";
  principalSlideTwo.style.display = "none";
  overlaySlideWrapperTwo.style.display = "none";
  idadeClassificacao14.style.display = "none";
  idadeClassificacao14.style.display = "none";
  buttonSlideWrapperThree.classList.add("active");
  buttonSlideWrapperTwo.classList.remove("active");

  setInterval(() => {
    buttonSlideWrapper.addEventListener("click", () => {
      slideWrapperThree.style.transform = "translateX(200%)";

      principalSlide.style.display = "block";
      principalSlideThree.style.display = "none";

      overlaySlideWrapper.style.display = "block";

      idadeClassificacao18.style.display = "block";
      idadeClassificacao12.style.display = "none";

      buttonSlideWrapper.classList.add("active");
      buttonSlideWrapperThree.classList.remove("active");

      setTimeout(() => {
        window.location.reload();
      }, 2000);
    });
  }, 100);

  setInterval(() => {
    buttonSlideWrapperTwo.addEventListener("click", () => {
      slideWrapperThree.style.transform = "translateX(100%)";

      principalSlideTwo.style.display = "block";
      principalSlideThree.style.display = "none";

      overlaySlideWrapperTwo.style.display = "block";

      idadeClassificacao12.style.display = "none";
      idadeClassificacao14.style.display = "block";

      buttonSlideWrapperTwo.classList.add("active");
      buttonSlideWrapperThree.classList.remove("active");

      setTimeout(() => {
        window.location.reload();
      }, 2000);
    });
  }, 100);
}, 10000);

const sliderAutoThree = setInterval(() => {
  window.location.reload();
}, 15000);

//abrir caracteristicas filmes
let hoverMoves = document.querySelector(".div-slides img");
let hoverMoveInformations = document.querySelector(".div-click-movie");

let hoverMovesTwo = document.querySelector(".div-slides2 img");
let hoverMoveInformationsTwo = document.querySelector(".div-click-movie2");

let hoverMovesThree = document.querySelector(".div-slides3 img");
let hoverMoveInformationsThree = document.querySelector(".div-click-movie3");

let hoverMovesFour = document.querySelector(".div-slides4 img");
let hoverMoveInformationsFour = document.querySelector(".div-click-movie4");

let heart = document.querySelector(".bi-heart");
let heartFill = document.querySelector(".bi-heart-fill");

hoverMoves.addEventListener("mouseover", () => {
  hoverMoveInformations.style.display = "flex";
  hoverMoves.style.scale = "1.3";
  hoverMovesTwo.style.scale = "1.3";
  hoverMovesTwo.style.scale = "1.0";
});
hoverMoveInformations.addEventListener("mouseover", () => {
  hoverMoveInformations.style.display = "flex";
  hoverMoves.style.scale = "1.3";
});

hoverMoves.addEventListener("mouseout", () => {
  hoverMoveInformations.style.display = "none";
});
hoverMoveInformations.addEventListener("mouseout", () => {
  hoverMoves.style.scale = "1";
  hoverMoveInformations.style.display = "none";
});

hoverMovesTwo.addEventListener("mouseover", () => {
  hoverMoveInformationsTwo.style.display = "flex";
  hoverMovesTwo.style.scale = "1.3";
  hoverMoves.style.scale = "1.0";
  hoverMovesThree.style.scale = "1.0";
});
hoverMoveInformationsTwo.addEventListener("mouseover", () => {
  hoverMoveInformationsTwo.style.display = "flex";
  hoverMovesTwo.style.scale = "1.3";
});

hoverMovesTwo.addEventListener("mouseout", () => {
  hoverMoveInformationsTwo.style.display = "none";
});
hoverMoveInformationsTwo.addEventListener("mouseout", () => {
  hoverMovesTwo.style.scale = "1";
  hoverMoveInformationsTwo.style.display = "none";
});
hoverMovesThree.addEventListener("mouseover", () => {
  hoverMoveInformationsThree.style.display = "flex";
  hoverMovesThree.style.scale = "1.3";
  hoverMovesTwo.style.scale = "1.0";
  hoverMovesFour.style.scale = "1.0";
});
hoverMoveInformationsThree.addEventListener("mouseover", () => {
  hoverMoveInformationsThree.style.display = "flex";
  hoverMovesThree.style.scale = "1.3";
});

hoverMovesThree.addEventListener("mouseout", () => {
  hoverMoveInformationsThree.style.display = "none";
});
hoverMoveInformationsThree.addEventListener("mouseout", () => {
  hoverMovesThree.style.scale = "1";
  hoverMoveInformationsThree.style.display = "none";
});

hoverMovesFour.addEventListener("mouseover", () => {
  hoverMoveInformationsFour.style.display = "flex";
  hoverMovesFour.style.scale = "1.3";
  hoverMovesThree.style.scale = "1.0";
});
hoverMoveInformationsFour.addEventListener("mouseover", () => {
  hoverMoveInformationsFour.style.display = "flex";
  hoverMovesFour.style.scale = "1.3";
});

hoverMovesFour.addEventListener("mouseout", () => {
  hoverMoveInformationsFour.style.display = "none";
});
hoverMoveInformationsFour.addEventListener("mouseout", () => {
  hoverMovesFour.style.scale = "1";
  hoverMoveInformationsFour.style.display = "none";
});

heart.addEventListener("click", () => {
  heartFill.style.display = "block";
  heart.style.display = "none";
});
heartFill.addEventListener("click", () => {
  heartFill.style.display = "none";
  heart.style.display = "block";
});

/*menu*/
var menu = document.querySelector("header");
var notification = document.querySelector(".bi-bell");
var notificationFill = document.querySelector(".bi-bell-fill");
var arrowDown = document.querySelector(".bi-caret-down-fill");
var arrowUp = document.querySelector(".bi-caret-up-fill");
var imageLog = document.querySelector(".div-header-perfil img");

const menuColor = setInterval(() => {
  if (window.scrollY > 10) {
    menu.style.background = "#000000";
  } else {
    menu.style.background = "transparent";
  }

  notification.addEventListener("click", () => {
    notification.style.display = "none";
    notificationFill.style.display = "block";
  });

  notificationFill.addEventListener("click", () => {
    notification.style.display = "block";
    notificationFill.style.display = "none";
  });
}, 50);

const menuPerfil = setInterval(() => {
  arrowDown.addEventListener("click", () => {
    arrowDown.style.display = "none";
    arrowUp.style.display = "block";
  });
  arrowUp.addEventListener("click", () => {
    arrowDown.style.display = "block";
    arrowUp.style.display = "none";
  });

  imageLog.addEventListener("click", () => {
    arrowDown.style.display = "none";
    arrowUp.style.display = "block";
  });
}, 50);

//seacrh
let searchDiv = document.querySelector(".div-search");
let searchButton = document.querySelector(".bi-search");
let searchInput = document.querySelector("#isearch");
let closeSearch = document.querySelector(".bi-x");

const searchOpen = setInterval(() => {
  searchButton.addEventListener("click", () => {
    searchDiv.style.width = "170px";
    searchDiv.style.border = "1px solid #fff";
    searchInput.style.zIndex = "3";
    closeSearch.style.display = "block";
  });

  closeSearch.addEventListener("click", () => {
    searchDiv.style.width = "25px";
    searchDiv.style.border = "none";
    searchInput.style.zIndex = "-4";
    closeSearch.style.display = "none";
  });
}, 50);

//perfil
let perfilOpen = document.querySelector(".div-header-perfil img");
let perfil = document.querySelector(".div-perfs-log");
let closerLog = document.querySelector(".second-x");

let imagePerfil = document.querySelector(".img-perfil-choose");
let imagePerfilSearch = document.querySelector(".img-perfil-search");
let choosePefilImage = document.querySelector(".choose-images");

let imagesChooseOne = document.querySelector(".img-choose-images1");
let imagesChoosePerfilSrc = imagesChooseOne.src;

let imagesChooseTwo = document.querySelector(".img-choose-images2");
let imagesChooseTwoSrc = imagesChooseTwo.src;

let imagesChooseThree = document.querySelector(".img-choose-images3");
let imagesChooseThreeSrc = imagesChooseThree.src;

let imagesChooseFour = document.querySelector(".img-choose-images4");
let imagesChooseFourSrc = imagesChooseFour.src;

let imagesChooseFive = document.querySelector(".img-choose-images5");
let imagesChooseFiveSrc = imagesChooseFive.src;

let imagesChooseSix = document.querySelector(".img-choose-images6");
let imagesChooseSixSrc = imagesChooseSix.src;

let arrowClosePerfil = document.querySelector(".bi-chevron-double-left");

const openPerfil = setInterval(() => {
  perfilOpen.addEventListener("click", () => {
    perfil.style.display = "block";
  });
  arrowDown.addEventListener("click", () => {
    perfil.style.display = "block";
  });

  arrowUp.addEventListener("click", () => {
    perfil.style.display = "none";
  });

  closerLog.addEventListener("click", () => {
    perfil.style.display = "none";
    arrowUp.style.display = "none";
    arrowDown.style.display = "block";
    choosePefilImage.style.display = "none";
  });

  imagePerfil.addEventListener("click", () => {
    choosePefilImage.style.display = "flex";
  });

  imagesChooseOne.addEventListener("click", () => {
    imagePerfil.src = imagesChoosePerfilSrc;
    imagePerfilSearch.src = imagesChoosePerfilSrc;
  });
  imagesChooseTwo.addEventListener("click", () => {
    imagePerfil.src = imagesChooseTwoSrc;
    imagePerfilSearch.src = imagesChooseTwoSrc;
  });
  imagesChooseThree.addEventListener("click", () => {
    imagePerfil.src = imagesChooseThreeSrc;
    imagePerfilSearch.src = imagesChooseThreeSrc;
  });
  imagesChooseFour.addEventListener("click", () => {
    imagePerfil.src = imagesChooseFourSrc;
    imagePerfilSearch.src = imagesChooseFourSrc;
  });
  imagesChooseFive.addEventListener("click", () => {
    imagePerfil.src = imagesChooseFiveSrc;
    imagePerfilSearch.src = imagesChooseFiveSrc;
  });
  imagesChooseSix.addEventListener("click", () => {
    imagePerfil.src = imagesChooseSixSrc;
    imagePerfilSearch.src = imagesChooseSixSrc;
  });
  arrowClosePerfil.addEventListener("click", () => {
    choosePefilImage.style.display = "none";
  });
}, 50);

//top 10
let imageTop10 = document.querySelector(".div-img-top-10 img");
let paraghTop10 = document.querySelector(".div-img-top-10 p");

let imageTop10Two = document.querySelector(".div2-img-top-10 img");
let paraghTop10Two = document.querySelector(".div2-img-top-10 p");

let imageTop10Three = document.querySelector(".div3-img-top-10 img");
let paraghTop10Three = document.querySelector(".div3-img-top-10 p");

let imageTop10Four = document.querySelector(".div4-img-top-10 img");
let paraghTop10Four = document.querySelector(".div4-img-top-10 p");

let imageTop10Five = document.querySelector(".div5-img-top-10 img");
let paraghTop10Five = document.querySelector(".div5-img-top-10 p");

imageTop10.addEventListener("mouseover", () => {
  paraghTop10.style.display = "block";
});
imageTop10.addEventListener("mouseout", () => {
  paraghTop10.style.display = "none";
});

imageTop10Two.addEventListener("mouseover", () => {
  paraghTop10Two.style.display = "block";
});
imageTop10Two.addEventListener("mouseout", () => {
  paraghTop10Two.style.display = "none";
});

imageTop10Three.addEventListener("mouseover", () => {
  paraghTop10Three.style.display = "block";
});
imageTop10Three.addEventListener("mouseout", () => {
  paraghTop10Three.style.display = "none";
});

imageTop10Four.addEventListener("mouseover", () => {
  paraghTop10Four.style.display = "block";
});
imageTop10Four.addEventListener("mouseout", () => {
  paraghTop10Four.style.display = "none";
});

imageTop10Five.addEventListener("mouseover", () => {
  paraghTop10Five.style.display = "block";
});
imageTop10Five.addEventListener("mouseout", () => {
  paraghTop10Five.style.display = "none";
});

//categories
let body = document.querySelector('body');
let categories = document.querySelector('.section-categories');
let linkCategories = document.querySelector('.a-categoria-nav');

let categoriesAction = document.querySelector('.p-action');
let categoriesContentAction = document.querySelector('.div-images-categories');

let categoriesAdventure = document.querySelector('.p-adventure');
let categoriesContentAdventure = document.querySelector('.div-images-categories2');

let categoriesComedy = document.querySelector('.p-comedy');
let categoriesContentComedy = document.querySelector('.div-images-categories3');

let categoriesFiction = document.querySelector('.p-fiction');
let categoriesContentFiction = document.querySelector('.div-images-categories4');

let categoriesHorror = document.querySelector('.p-horror');
let categoriesContentHorror = document.querySelector('.div-images-categories5');

let categoriesTitle = document.querySelector('.title-categories');

let closerCategoriesBtn = document.querySelector('.div-closer-btn');

let formularyAction = document.querySelector('.action-categories-formulary');
let formularyAdventure = document.querySelector('.adventure-categories-formulary');
let formularyComedy = document.querySelector('.comedy-categories-formulary');
let formularyFiction = document.querySelector('.fiction-categories-formulary');
let formularyHorror = document.querySelector('.horror-categories-formulary');

linkCategories.addEventListener('click', () =>{
  body.style.overflow = 'hidden';
  categories.style.display = 'flex';
  categories.classList.add('animation-categories');
  
  categoriesAction.classList.add('focus-categories');
  categoriesAdventure.classList.remove('focus-categories');
  categoriesComedy.classList.remove('focus-categories');
  categoriesFiction.classList.remove('focus-categories');
  categoriesHorror.classList.remove('focus-categories');

  perfil.style.display = 'none';
  categoriesContentAction.style.display = 'flex';
})

formularyAction.addEventListener('click', () =>{
  body.style.overflow = 'hidden';
  categories.style.display = 'flex';
  categories.classList.add('animation-categories');
  
  categoriesAction.classList.add('focus-categories');
  categoriesAdventure.classList.remove('focus-categories');
  categoriesComedy.classList.remove('focus-categories');
  categoriesFiction.classList.remove('focus-categories');
  categoriesHorror.classList.remove('focus-categories');

  perfil.style.display = 'none';
  categoriesContentAction.style.display = 'flex';
});

formularyAdventure.addEventListener('click', () =>{
  body.style.overflow = 'hidden';
  categories.style.display = 'flex';
  categories.classList.add('animation-categories');
  categoriesTitle.innerHTML = 'Adventure (冒 険)';

  categoriesAdventure.classList.add('focus-categories');
  categoriesAction.classList.remove('focus-categories');
  categoriesComedy.classList.remove('focus-categories');
  categoriesFiction.classList.remove('focus-categories');
  categoriesHorror.classList.remove('focus-categories');

  perfil.style.display = 'none';
  categoriesContentAction.style.display = 'none';
  categoriesContentAdventure.style.display = 'flex';
});

formularyComedy.addEventListener('click', () =>{
  body.style.overflow = 'hidden';
  categories.style.display = 'flex';
  categories.classList.add('animation-categories');
  categoriesTitle.innerHTML = 'Comedy (コメディ)';

  categoriesComedy.classList.add('focus-categories');
  categoriesAction.classList.remove('focus-categories');
  categoriesAdventure.classList.remove('focus-categories');
  categoriesFiction.classList.remove('focus-categories');
  categoriesHorror.classList.remove('focus-categories');

  perfil.style.display = 'none';
  categoriesContentComedy.style.display = 'flex';
  categoriesContentAction.style.display = 'none';
});

formularyFiction.addEventListener('click', () =>{
  body.style.overflow = 'hidden';
  categories.style.display = 'flex';
  categories.classList.add('animation-categories');
  categoriesTitle.innerHTML = 'Fiction (フィクション)';

  categoriesFiction.classList.add('focus-categories');
  categoriesAction.classList.remove('focus-categories');
  categoriesAdventure.classList.remove('focus-categories');
  categoriesComedy.classList.remove('focus-categories');
  categoriesHorror.classList.remove('focus-categories');

  perfil.style.display = 'none';
  categoriesContentFiction.style.display = 'flex';
  categoriesContentAction.style.display = 'none';
});

formularyHorror.addEventListener('click', () =>{
  body.style.overflow = 'hidden';
  categories.style.display = 'flex';
  categories.classList.add('animation-categories');
  categoriesTitle.innerHTML = 'Horror (ホラー)';

  categoriesHorror.classList.add('focus-categories');
  categoriesAction.classList.remove('focus-categories');
  categoriesAdventure.classList.remove('focus-categories');
  categoriesComedy.classList.remove('focus-categories');
  categoriesFiction.classList.remove('focus-categories');

  perfil.style.display = 'none';
  categoriesContentHorror.style.display = 'flex';
  categoriesContentAction.style.display = 'none';
});

closerCategoriesBtn.addEventListener('click', () =>{
  categories.style.display = 'none';
  body.style.overflow = 'auto';
});

categoriesAction.addEventListener('click', () =>{
  categoriesTitle.innerHTML = 'Action (アクション)';

  categoriesContentAction.classList.add('animation-categories');
  categoriesAdventure.classList.remove('focus-categories');
  categoriesComedy.classList.remove('focus-categories');
  categoriesFiction.classList.remove('focus-categories');
  categoriesHorror.classList.remove('focus-categories');

  categoriesContentAction.style.display = 'flex';
  categoriesContentAdventure.style.display = 'none';
  categoriesContentComedy.style.display = 'none';
  categoriesContentFiction.style.display = 'none';
  categoriesContentHorror.style.display = 'none';
});

categoriesAdventure.addEventListener('click', () =>{
  categoriesTitle.innerHTML = 'Adventure (冒 険)';

  categoriesContentAdventure.classList.add('animation-categories');
  categoriesAction.classList.remove('focus-categories');
  categoriesComedy.classList.remove('focus-categories');
  categoriesFiction.classList.remove('focus-categories');
  categoriesHorror.classList.remove('focus-categories');

  categoriesContentAdventure.style.display = 'flex';
  categoriesContentAction.style.display = 'none';
  categoriesContentComedy.style.display = 'none';
  categoriesContentFiction.style.display = 'none';
  categoriesContentHorror.style.display = 'none';
});

categoriesComedy.addEventListener('click', () =>{
  categoriesTitle.innerHTML = 'Comedy (コメディ)';

  categoriesContentComedy.classList.add('animation-categories');
  categoriesAction.classList.remove('focus-categories');
  categoriesAdventure.classList.remove('focus-categories');
  categoriesFiction.classList.remove('focus-categories');
  categoriesHorror.classList.remove('focus-categories');

  categoriesContentComedy.style.display = 'flex';
  categoriesContentAdventure.style.display = 'none';
  categoriesContentAction.style.display = 'none';
  categoriesContentFiction.style.display = 'none';
  categoriesContentHorror.style.display = 'none';
});

categoriesFiction.addEventListener('click', () =>{
  categoriesTitle.innerHTML = 'Fiction (フィクション)';

  categoriesContentFiction.classList.add('animation-categories');
  categoriesAction.classList.remove('focus-categories');
  categoriesAdventure.classList.remove('focus-categories');
  categoriesComedy.classList.remove('focus-categories');
  categoriesHorror.classList.remove('focus-categories');

  categoriesContentFiction.style.display =  `flex`;
  categoriesContentComedy.style.display = 'none';
  categoriesContentAdventure.style.display = 'none';
  categoriesContentAction.style.display = 'none';
  categoriesContentHorror.style.display = 'none';
});

categoriesHorror.addEventListener('click', () =>{
  categoriesTitle.innerHTML = 'Horror (ホラー)';

  categoriesContentHorror.classList.add('animation-categories');
  categoriesAction.classList.remove('focus-categories');
  categoriesAdventure.classList.remove('focus-categories');
  categoriesComedy.classList.remove('focus-categories');
  categoriesFiction.classList.remove('focus-categories');

  categoriesContentHorror.style.display = 'flex';
  categoriesContentAction.style.display = 'none';
  categoriesContentAdventure.style.display = 'none';
  categoriesContentComedy.style.display = 'none';
  categoriesContentFiction.style.display =  `none`;
});