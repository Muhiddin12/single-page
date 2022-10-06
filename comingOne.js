let slider1 = document.querySelector('.top-rated-cont1')
let next1 = document.querySelector('.top-rated-next1')
let prev1 = document.querySelector('.top-rated-prev1')
let counter1 = 0;

let urlComing = 'https://api.themoviedb.org/3/tv/airing_today?api_key=ffd716e442cea750f989f65854a0cb89&language=en-US&page=1'
fetch(urlComing)
    .then((res1) => res1.json())
    .then((value1) => {
        let fragment = document.createDocumentFragment()
        for (let i = 0; i < value1.results.length; i++) {
            let top1 = document.createElement('div')
            top1.className = 'top1'
            let topImage1 = document.createElement('div')
            topImage1.className = 'top-image1'
            let image1 = document.createElement('img')
            image1.src = `https://image.tmdb.org/t/p/original/${value1.results[i].backdrop_path}`
            let topInfo1 = document.createElement('div')
            topInfo1.className = 'top-info1'
            let topInfoCont1 = document.createElement('div')
            topInfoCont1.className = 'top-info-cont1'
            let topBtn1 = document.createElement('div')
            topBtn1.className = 'top-btn1'
            let button1 = document.createElement('button')
            button1.textContent = '+'
            let topText1 = document.createElement('div')
            let topTextH2b = document.createElement('h2')
            topTextH2b.textContent = `${value1.results[i].name}`
            let topTextP1 = document.createElement('p')
            topTextP1.textContent = `Popularity : ${value1.results[i].popularity}`
            topText1.className = 'top-text1'
            topText1.appendChild(topTextH2b)
            topText1.appendChild(topTextP1)
            topBtn1.appendChild(button1)
            topInfoCont1.appendChild(topBtn1)
            topInfoCont1.appendChild(topText1)
            topInfo1.appendChild(topInfoCont1)

            topImage1.appendChild(image1)
            top1.appendChild(topImage1)
            top1.appendChild(topInfo1)
            fragment.appendChild(top1)
        }
        slider1.appendChild(fragment)

    })
    .then((response) => {
        let images1 = document.querySelectorAll('.top-rated-cont1 img')
        let size1 = images1[3].clientWidth;
        
        next1.addEventListener('click', () => {
            if (counter1 === 21) {
                counter1 = 0
                slider1.style.transition = '0.6s ease'
                slider1.style.transform = 'translateX(' + (-size1 * counter1) + 'px)'
            } else {
                counter1++
                slider1.style.transition = '0.6s ease'
                slider1.style.transform = 'translateX(' + (-size1 * counter1) + 'px)'

            }

        })
        prev1.addEventListener('click', () => {
            if (counter1 === 0) {
                slider1.style.transition = '0.6s ease'
                counter1 = 21
                slider1.style.transform = 'translateX(' + (-size1 * counter1) + 'px)'
            } else {
                slider1.style.transition = '0.6s ease'
                counter1--
                slider1.style.transform = 'translateX(' + (-size1 * counter1) + 'px)'
            }

        })
    })