let key = '563492ad6f917000010000019132649ceca14d2189cecc0b749de09e'

async function searchPics() {
    console.log("called")
    let query = document.querySelector('input').value
    let url = 'https://api.pexels.com/v1/search?page=1&per_page=10&query=' + query  
    let response = await fetch(url, {
        method: "GET",
        headers: {
            Accept: 'application/json',
            Authorization : key
        } 
    })
    let data = await response.json()
    console.log(data)
    populateDom(data.photos)
}

function populateDom(photos){
    let container = document.querySelector('.pics-container')
    photos.forEach(element => {
        let img = document.createElement('img')
        img.setAttribute('src', element.src.medium)
        console.log(img)
        container.appendChild(img)      
    });
}

document.getElementById('button').addEventListener('click', searchPics)