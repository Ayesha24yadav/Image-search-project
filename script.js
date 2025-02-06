const search = document.querySelector('#search')
const search_btn = document.querySelector('#search-btn')
const img_container = document.querySelector('.img-container')


search_btn.addEventListener('click', async() => {
    search_value = search.value
    console.log(search_value,'this is search vlaue')
    if(search_value=== '' ) {
        alert('Please enter a serach term')
        return
    }
    else{
        const key = 'DROWrztg7lKGTblnLrVjANiC0FQn0yvD0nOVZ0QJW6U'
        const url= `https://api.unsplash.com/search/photos?page=3&query=${search_value}&client_id=${key}`
        let data = await fetch(url)
        data = await data.json()
        console.log(data,'data')
        displayImages(data)
    }
})
function displayImages(data){
    img_container.innerHTML=''
    data.results.forEach(element => {
        console.log(element.urls.reguler,'elemet.urls,regular')
        const img = document.createElement('img')
        img.src = element.urls.regular
        img_container.appendChild(img)
    });
}
