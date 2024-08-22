const userInformations = {
   users: [
      {
         users: 'felip',
      }
   ],
   posts: [
      {
         id: 1,
         owner: 'felip',
         content: 'hello world',
      }
   ],

   //create
   createPost(dados){
      //cria posts na mmemóeias
      userInformations.posts.push({
         id: userInformations.posts.length + 1,
         owner: dados.owner,
         content: dados.content
      });
   }
}

//read
function pegaPosts(){
   return userInformations.posts;
} 

//update
function updatePostContent(id, newContent){
   const postUptaded = pegaPosts().find(() =>{
      return postMessage.id === id;
   });
   postUptaded.content = newContent;
}
updatePostContent('novo conteudo do tweet');

//Delete
function deletePost(id){
   const postListUptaded = pegaPosts().filter((currentPost) =>{
      return currentPost.id !== id;
   });

   console.log(postListUptaded);
}
deletePost(2);