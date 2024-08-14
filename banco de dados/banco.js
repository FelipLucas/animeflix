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
   ]
}

//create
function creatPost(dados){
   userInformations.posts.push({
      id: userInformations.posts.length + 1,
      owner: dados.owner,
      content: dados.content
   });
} creatPost({owner: 'felip', content: 'segundo tweet'});
  creatPost({owner: 'felip', content: 'terceiroi tweet'});

//read
function pegaPosts(){
   return userInformations.posts;
} 

//update
function updatePostContent(id, newContent){
   const postUptaded = pegaPosts().find(() =>{
      return postMessage.id === id;
   })
   console.log(postUptaded);
   postUptaded.content = newContent;
}
updatePostContent('novo conteudo do tweet');
console.log(pegaPosts());

//Delete
function deletePost(id){
   const postListUptaded = pegaPosts().filter((currentPost) =>{
      return currentPost.id !== id;
   });

   console.log(postListUptaded);
}
deletePost(2);