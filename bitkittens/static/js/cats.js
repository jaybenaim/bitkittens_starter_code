document.addEventListener("DOMContentLoaded", function() {
    const summonButton = $('.summon-cats')
    const cat1 = $('#cat1')
    const catRequest = axios.get('cats_api')

    summonButton.click(() => { 
        catRequest.then(response => { 
            console.log(response.data.cats)
            const cats = response.data.cats
            const main = $('main')
            const catBox = $('.cat-box')

            for(let i = 1; i < cats.length + 1; i++) { 
                main.append(`<div id="cat${i}" class="cat-box"></div>`)
                let cat = $(`#cat${i}`)
                cat.append(`<img id="cat-${i}-image">`)
                cat.children().attr('src', cats[i-1].photo)
                cat.children().attr('alt', cats[i-1].name)
                console.log(cats[i-1])
                setInterval(() => {
                    cat.animate({left: "+=300px", right: "-=300"});
                    cat.animate({left: "-=300", right: "+=300px"});
                }, 2000);
       
            }  
           
        }) 
      

    })
});
