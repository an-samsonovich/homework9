let picture = [

    {
        folder: 'mir.jpg',
        text: 'Мирский'
    },

    {
        folder: 'troi.jpg',
        text: 'Троицкое'
    },

    {
        folder: 'red.jpg',
        text: 'Костел'
    }
    

]



picture.forEach(element => {

    let gal = `<div class="item">
<img src="img/${element.folder}" alt="">
<p>${element.text}</p>
</div>`




gallery.innerHTML += gal});
