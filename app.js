const container = document.getElementById('container')

async function callPosts(e) {
    e.preventDefault()
    try{
        const response = await fetch("https://jsonplaceholder.typicode.com/posts" , { method : 'GET'})
        const posts = await response.json()
        posts.forEach(function (post,i){
            const tag = document.createElement('div')
            tag.setAttribute('id',`tag${i}`)
            tag.innerHTML =`
            <h2>post${i + 1}</h2> 
            <p>userID : ${post.userId}</p>
            <p>ID : ${post.id}</p>
            <p>Title : ${post.title}</p>
            <p>Body : ${post.body}</p>
            `;
    console.log(tag)
    container.appendChild(tag)
    });
    }
    catch{(error => console.error('Error:', error));
}
}