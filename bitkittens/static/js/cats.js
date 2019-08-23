document.addEventListener("DOMContentLoaded", function() {
    const summonButton = $('.summon-cats')
    const cat1 = $('#cat1')
    const catRequest = axios.get('http://bitkittens.herokuapp.com')

    summonButton.click(() => { 
        catRequest.then(response => { 
            console.log(response)
            const src = response.cats[0].photo
            response.cats.forEach(cat => {
                const catName = cat.name
                cat1.append(`<img src="${src}" alt="Photo of ${catName}" >`)
                
            });
            // cat1.append(`<img src="${src}">`)
        })

    })
});

