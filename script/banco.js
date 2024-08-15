const $creatPost = document.querySelector('input[name="search"]');
const $postlist = document.querySelector('.div-result-search');
const $postlistImage = document.querySelector('.div-result-search img');
const $postlistLink = document.querySelector('.div-result-search a');
const $postlistTitle = document.querySelector('.div-result-search div h3');

let $search = document.querySelector('.bi-search');
let $closerSearch = document.querySelector('.bi-x');

$closerSearch.addEventListener('click', () =>{
   $postlist.style.display = 'none';
})

$search.addEventListener('click', function criaPostsController(infosDoEvento){
   infosDoEvento.preventDefault();

   //tokyo ghoul
   if($creatPost.value === 'Tokyo Ghoul'){
      $postlist.style.display = 'flex';
      console.log('hello weordls');
   }
   if($creatPost.value === 'tokyo ghoul'){
      $postlist.style.display = 'flex';
      //$postlist.insertAdjacentHTML('afterbegin', `<li>${$creatPost.value}</li>`);
   }

   //hunter x hunter
   if($creatPost.value === 'Hunter x Hunter'){
      $postlist.style.display = 'flex';
      $postlistImage.src = 'https://i.pinimg.com/736x/ba/df/e2/badfe2ee9386abde767a72a533cbffe6.jpg';
      $postlistLink.href = 'hunter x hunter/assistir-hunter-hunter.html';
      $postlistTitle.innerHTML = 'ハンター×ハンター (Hunter x Hunter)';
   }
   if($creatPost.value === 'hunter x hunter'){
      $postlist.style.display = 'flex';
      $postlistImage.src = 'https://i.pinimg.com/736x/ba/df/e2/badfe2ee9386abde767a72a533cbffe6.jpg';
      $postlistLink.href = 'hunter x hunter/assistir-hunter-hunter.html';
      $postlistTitle.innerHTML = 'ハンター×ハンター (Hunter x Hunter)';
      //$postlist.insertAdjacentHTML('afterbegin', `<li>${$creatPost.value}</li>`);
   }
});