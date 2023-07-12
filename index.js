


async function fetcher(e){    
  var url='https://jsonplaceholder.typicode.com/todos/1'
    await fetch(url)
    .then(response => response.json())
    .then(json => {
        console.log(e,json)
    })
}
fetcher()

function handle(){
  
  var nav=document.getElementById('nav')
  nav.classList.toggle('nav')
  
}