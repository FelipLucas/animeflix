let $form = document.querySelector('form');
let $formTwo = document.querySelector('.btn-foryou-post');
let closeBtn = document.querySelector('.div-close');
let postBtn = document.querySelector('header nav button');

let $body = document.querySelector('.body2');

//base de dados, modelo
const miniTwitter = {
   users: [
      {
         users: 'felipe',
      }
   ],
   posts: [
      {
         id: 1,
         owner: 'felip',
         content: 'hello world',
      }
   ],

   readPosts(){
      miniTwitter.posts.forEach(({ owner, content }) =>{
      miniTwitter.createPost({ owner: owner, content: content }, true);
      });
   },

   //create
   createPost(dados, htmlOnly = false){
      if(!htmlOnly){
         //cria posts na mmemória array objeto
         miniTwitter.posts.push({
            id: miniTwitter.posts.length + 1,
            owner: dados.owner,
            content: dados.content
         });
      }

      //cria posts no html
      const $postlist = document.querySelector('.list-posts');
      $postlist.insertAdjacentHTML('afterbegin', `                  
      <div class="div-posted">
               <img src="https://i.pinimg.com/736x/03/7e/3a/037e3aabc029df1bcf4ca88299409eca.jpg" alt="">

               <div class="div-name-perf-posted">
                  <div>
                     <p><storng>your profile</storng></p>
                     <p class="second">@your profile</p>
                     <p class="three">·</p>
                     <p class="timer-posted"></p>
                  </div>
                  <div>
                     <p>
                        ${dados.content}
                        </p>
                  </div>
               </div>`);
               //<img src="" alt="" class="img-posted-choosen">
   }
};
console.log(miniTwitter.posts)


//close and open post
closeBtn.addEventListener('click', () =>{
   $form.style.display = 'none';
   $body.style.filter = 'none';
});

postBtn.addEventListener('click', () =>{
   $form.style.display = 'block';
   $body.style.filter = 'blur(10px)';
});

//bank : read
miniTwitter.readPosts();

//create
$form.addEventListener('submit', function criaPostsController(infosDoEvento){
   const $creatPost = document.querySelector('input[name="text"]');
   infosDoEvento.preventDefault();
   
   miniTwitter.createPost({ owner: 'fgelips', content: $creatPost.value });
   
   console.log($creatPost.value)
   
   if($creatPost.value === ''){
      window.alert('write something')
   }
   
   $creatPost.value = '';

   $form.style.display = 'none';
   $body.style.filter = 'none';
});

$formTwo.addEventListener('click', function criaPostsController(infosDoEvento){
   const $creatPostTwo = document.querySelector('#ipost');
   infosDoEvento.preventDefault();
   
   miniTwitter.createPost({ owner: 'fgelips', content: $creatPostTwo.value });
   
   console.log($creatPostTwo.value)
   
   if($creatPostTwo.value === ''){
      window.alert('write something')
   }
   
   $creatPostTwo.value = '';
});

//CRUD: delete

//input file
let imageInput = document.querySelector('input#ifile');
let imageChoosen = document.querySelector('.img-posted-choosen');

imageInput.addEventListener('chnge', (e) =>{
   const inputTarget = e.target;
   const file = inputTarget.files[0]

   if(file){
      const readerFile = new FileReader();

      readerFile.addEventListener('load', (e) =>{
         const readerTarget = e.target;

         const img = document.createElement("img");
         img.classList.add('img-posted-choosen');
         img.src = readerTarget.result;

         imageChoosen.src = img.src;
         imageChoosen.innerHTML = '';
         console.log(img);

      });
      readerFile.readAsDataURL(file);
   } else{
      file.innerHTMl = '[ERROR'
   }
});