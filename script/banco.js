const $creatPost = document.querySelector('input[name="search"]');
const $postlist = document.querySelector('.div-result-search');
const $postlistImage = document.querySelector('.div-result-search img');
const $postlistLink = document.querySelector('.div-result-search a');
const $postlistTitle = document.querySelector('.div-result-search div h3');

let $divsearch = document.querySelector('.div-search');
let $search = document.querySelector('.bi-search');
let $closerSearch = document.querySelector('.bi-x');

$closerSearch.addEventListener('click', () =>{
   $postlist.style.display = 'none';
})

$search.addEventListener('click', function criaPostsController(infosDoEvento){
   let $divsearchWidth = $divsearch.offsetWidth;
   infosDoEvento.preventDefault();
   
   //tokyo ghoul
   if($creatPost.value === 'Tokyo Ghoul'){
      $postlist.style.display = 'flex';
      console.log('hello weordls');
   }
   if($creatPost.value === 'tokyo ghoul'){
      $postlist.style.display = 'flex';
      $postlistImage.src = 'https://mangabr-p.b-cdn.net/edf82115a1abcebd8f02e871a70b95ed/cover.jpg.webp';
      $postlistLink.href = '../tokyo ghoul/tokyoGhoul-001.html';
      $postlistLink.href = 'tokyo ghoul/tokyoGhoul-001.html';
      $postlistTitle.innerHTML = '東京グール (Tokyo Ghoul)';
   }
   
   //hunter x hunter
   if($creatPost.value === 'Hunter x Hunter'){
      $postlist.style.display = 'flex';
      $postlistImage.src = 'https://i.pinimg.com/736x/ba/df/e2/badfe2ee9386abde767a72a533cbffe6.jpg';
      $postlistLink.href = 'hunter x hunter/assistir-hunter-hunter.html';
      $postlistLink.href = '../hunter x hunter/assistir-hunter-hunter.html';
      $postlistTitle.innerHTML = 'ハンター×ハンター (Hunter x Hunter)';
   }
   if($creatPost.value === 'hunter x hunter'){
      $postlist.style.display = 'flex';
      $postlistImage.src = 'https://i.pinimg.com/736x/ba/df/e2/badfe2ee9386abde767a72a533cbffe6.jpg';
      $postlistLink.href = 'hunter x hunter/assistir-hunter-hunter.html';
      $postlistLink.href = '../hunter x hunter/assistir-hunter-hunter.html';
      $postlistTitle.innerHTML = 'ハンター×ハンター (Hunter x Hunter)';
      //$postlist.insertAdjacentHTML('afterbegin', `<li>${$creatPost.value}</li>`);
   }

   //one punch man
   if($creatPost.value === 'One punch man'){
      $postlist.style.display = 'flex';
      $postlistImage.src = 'https://i.pinimg.com/564x/33/3c/b7/333cb7bc2b575f913d302dba57bd97fa.jpg';
      $postlistLink.href = 'one punch man/assistir-one-punch-man.html';
      $postlistLink.href = '../one punch man/assistir-one-punch-man.html';
      $postlistTitle.innerHTML = 'ワンパンマン (One Punch Man)';
   }
   if($creatPost.value === 'one punch man'){
      $postlist.style.display = 'flex';
      $postlistImage.src = 'https://i.pinimg.com/564x/33/3c/b7/333cb7bc2b575f913d302dba57bd97fa.jpg';
      $postlistLink.href = 'one punch man/assistir-one-punch-man.html';
      $postlistLink.href = '../one punch man/assistir-one-punch-man.html';
      $postlistTitle.innerHTML = 'ワンパンマン (One Punch Man)';
   }

   //hajime no ippo
   if($creatPost.value === 'Hajime no ippo'){
      $postlist.style.display = 'flex';
      $postlistImage.src = 'https://i.pinimg.com/564x/bc/a6/94/bca6945c216189def934534a1623332b.jpg';
      $postlistLink.href = 'hajime no  ippo/assistir-hajime-no-ippo.html';
      $postlistLink.href = '../hajime no  ippo/assistir-hajime-no-ippo.html';
      $postlistTitle.innerHTML = 'Hajime no Ippo';
   }
   if($creatPost.value === 'hajime no ippo'){
      $postlist.style.display = 'flex';
      $postlistImage.src = 'https://i.pinimg.com/564x/bc/a6/94/bca6945c216189def934534a1623332b.jpg';
      $postlistLink.href = 'hajime no  ippo/assistir-hajime-no-ippo.html';
      $postlistLink.href = '../hajime no  ippo/assistir-hajime-no-ippo.html';
      $postlistTitle.innerHTML = 'Hajime no Ippo';
   } else if($creatPost.value != 'Hajime no ippo' && $creatPost.value != 'hajime no ippo' && $creatPost.value != 'one punch man' && $creatPost.value != 'One punch man' && $creatPost.value != 'Tokyo Ghoul' && $creatPost.value != 'tokyo ghoul' && $creatPost.value  != 'hunter x hunter' && $creatPost.value != 'Hunter x Hunter' && $divsearchWidth > 25){
      window.alert('no anime search');
   }
});