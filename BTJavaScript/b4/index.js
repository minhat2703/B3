function Render(){
    const name = document.getElementById('name').value
    const file = document.getElementById('file').value
    const img = file.slice(12)
    const price = document.getElementById('price').value
    const html = `
       <div class='col-3 my-3'>
          <img src="./img/${img}" alt="" width='100%'>
          <h2>${name}</h2>
          <p>$${price}</p>
          <a href="">Dat mua</a>
       </div>
    `
    document.querySelector('.row').innerHTML += html
}

document.getElementById('add').onclick = Render