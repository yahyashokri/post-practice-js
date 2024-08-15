const container = document.getElementById('container')

async function callPosts(e) {
    try{
        const response = await fetch("https://jsonplaceholder.typicode.com/posts" , { method : 'GET'})
        const posts = await response.json()
        posts.forEach(function (post,i){
            const tag = document.createElement('div')
            tag.setAttribute(id,`tag${i}`)
            let keys = Object.keys(post)
            let values = Object.values(post)
            const cont =document.createElement("div")
            cont.setAttribute(id,`cont${i}`)
            tag.appendChild(cont)
            tag.innerHTML =`
    <h2>post${i + 1}</h2> 
    `;
            keys.forEach(function (key,i2) {
                const value = values[i2]
                let pTag = document.createElement('p')
                pTag.innerText = `${key} : ${value}`;
                document.getElementById(`cont${i}`).appendChild(pTag)
               });
    container.appendChild(tag)
    });
    }
    catch{(error => console.error('Error:', error));
}
}