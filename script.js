cyw.addEventListener('click', () => {
    let fpage = document.getElementById('fpage')
    let mainpage = document.getElementById('mainpage')
    mainpage.style.display = 'flex'
    fpage.style.display = 'none'
})
let mercury = `<img src='mercury.png' class="planet-image"/>`
let venus = `<img src='venus.png' class="planet-image"/>`
let earth = `<img src='earth.png' class="planet-image"/>`
let mars = `<img src='mars.png' class="planet-image"/>`
let jupiter = `<img src='jupiter.png' class="planet-image"/>`
let saturn = `<img src='saturn.png' class="planet-image"/>`
let uranus = `<img src='uranus.png' class="planet-image"/>`
let neptune = `<img src='neptune.png' class="planet-image"/>`
let moon = `<img src='moon.png' class="planet-image"/>`

let mass = document.querySelector('#mass')
let select = document.querySelector('select')
let container = document.querySelector('.container')
let image = document.querySelector('.image')
let description = document.querySelector('.description')
let img = document.querySelector('img')

cw.addEventListener('click', () => {
    container.innerHTML = ''

    if (mass.value == 0 || (mass.value / 1) != mass.value) {
        
        description.textContent = 'Input weight.'
        container.appendChild(description)
    }
    else if (select.value === 'none') {
        description.textContent = 'Select a planet.'
        container.appendChild(description)
    }
    else {
        description.textContent = 'The weight of an object on'
        let p = document.createElement('p')
        switch(select.value) {
            case 'mercury': image.innerHTML = mercury
            description.textContent += ' Mercury'
            g = 3.7 / 9.8
            m = (mass.value * g).toFixed(1)
            p.textContent = m + ' kg'
            description.appendChild(p)
            container.appendChild(image)
            container.appendChild(description)
            break
            case 'venus': 
            image.innerHTML = venus
            description.textContent += ' Venus'
            g = 8.87 / 9.8
            m = (mass.value * g).toFixed(1)
            p.textContent = m + ' kg'
            description.appendChild(p)
            container.appendChild(image)
            container.appendChild(description)
            break
            case 'earth': image.innerHTML = earth
            description.textContent += ' Earth'
            g = 9.8 / 9.8
            m = (mass.value * g).toFixed(1)
            p.textContent = m + ' kg'
            description.appendChild(p)
            container.appendChild(image)
            container.appendChild(description)
            break
            case 'mars': image.innerHTML = mars
            description.textContent += ' Mars'
            g = 3.71 / 9.8
            m = (mass.value * g).toFixed(1)
            p.textContent = m + ' kg'
            description.appendChild(p)
            container.appendChild(image)
            container.appendChild(description)
            break
            case 'jupiter': image.innerHTML = jupiter
            description.textContent += ' Jupiter'
            g = 24.79 / 9.8
            m = (mass.value * g).toFixed(1)
            p.textContent = m + ' kg'
            description.appendChild(p)
            container.appendChild(image)
            container.appendChild(description)
            break
            case 'saturn': image.innerHTML = saturn
            description.textContent += ' Saturn'
            g = 10.44 / 9.8
            m = (mass.value * g).toFixed(1)
            p.textContent = m + ' kg'
            description.appendChild(p)
            container.appendChild(image)
            container.appendChild(description)
            break
            case 'uranus': image.innerHTML = uranus
            description.textContent += ' Uranus'
            g = 8.87 / 9.8
            m = (mass.value * g).toFixed(1)
            p.textContent = m + ' kg'
            description.appendChild(p)
            container.appendChild(image)
            container.appendChild(description)
            break
            case 'neptune': image.innerHTML = neptune
            description.textContent += ' Neptune'
            g = 11.15 / 9.8
            m = (mass.value * g).toFixed(1)
            p.textContent = m + ' kg'
            description.appendChild(p)
            container.appendChild(image)
            container.appendChild(description)
            break
            case 'moon': image.innerHTML = moon
            description.textContent += ' Moon'
            g = 1.62 / 9.8
            m = (mass.value * g).toFixed(1)
            p.textContent = m + ' kg'
            description.appendChild(p)
            container.appendChild(image)
            container.appendChild(description)
            break
            default: 
            break
        }
    }
})
console.log('Mini Project of Ansari')