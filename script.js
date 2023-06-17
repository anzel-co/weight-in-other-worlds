cyw.addEventListener('click', () => {
    let fpage = document.getElementById('fpage')
    let mainpage = document.getElementById('mainpage')
    mainpage.style.display = 'block'
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
let container = document.querySelector('.container')
let image = document.querySelector('.image')
let description = document.querySelector('.description')
let img = document.querySelector('img')
let select = document.querySelector('select')

cw.addEventListener('click', () => {
    container.innerHTML = ''
    description.style.fontSize = '1.5em'
    description.style.fontFamily = 'Trebuchet MS'        
    description.style.color = 'white'            
    description.style.textAlign = 'center'            
    description.style.width = '50%'
    description.style.marginTop = '2.5%'
    description.style.marginLeft = '25%'
    description.style.marginRight = '25%'
    description.style.marginBottom = '2.5%'

    if (mass.value == 0 || (mass.value / 1) != mass.value) {
        
        description.textContent = 'Input weight'
        description.style.fontWeight = 'bold'
        description.style.backgroundColor = 'rgba(0, 0, 0, 0.5)'
        container.appendChild(description)
    }
    else if (select.value === 'none') {
        description.textContent = 'Select a planet'
        description.style.fontWeight = 'bold'
        description.style.backgroundColor = 'rgba(0, 0, 0, 0.5)'
        container.appendChild(description)
    }
    else {
        img.style.width = '55%'
        image.style.marginLeft = '-25%'
        image.style.marginRight = '-25%'
        image.style.marginBottom = '-25%'
        image.style.width = '100%'
        image.style.display = 'inline-block'
        description.style.fontFamily = 'Trebuchet MS'
        description.style.textSpacing = '0px'
        description.style.marginTop = '-35%'
        description.style.lineHeight = '1.5'
        description.style.marginRight = '0%'
        description.style.padding = '1em'
        description.style.float = 'right'
        description.style.backgroundColor = 'rgba(0, 0, 0, 0.5)'
        description.textContent = 'The weight of an object on'
        description.style.color = 'white'
        let p = document.createElement('p')
        p.style.borderStyle = 'solid'
        p.style.borderRadius = '36px 50px 24px'
        p.style.marginTop = '10%'
        p.style.marginBottom = 'auto'
        p.style.marginLeft = 'auto'
        p.style.marginRight = 'auto'
        p.style.width = '40%'
        switch(select.value) {
            case 'mercury': image.innerHTML = mercury
            img.style.marginLeft = '-25%'
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
            img.style.marginLeft = '-25%'
            description.textContent += ' Venus'
            g = 8.87 / 9.8
            m = (mass.value * g).toFixed(1)
            p.textContent = m + ' kg'
            description.appendChild(p)
            container.appendChild(image)
            container.appendChild(description)
            break
            case 'earth': image.innerHTML = earth
            img.style.marginLeft = '-25%'
            description.textContent += ' Earth'
            g = 9.8 / 9.8
            m = (mass.value * g).toFixed(1)
            p.textContent = m + ' kg'
            description.appendChild(p)
            container.appendChild(image)
            container.appendChild(description)
            break
            case 'mars': image.innerHTML = mars
            img.style.marginLeft = '-25%'
            description.textContent += ' Mars'
            g = 3.71 / 9.8
            m = (mass.value * g).toFixed(1)
            p.textContent = m + ' kg'
            description.appendChild(p)
            container.appendChild(image)
            container.appendChild(description)
            break
            case 'jupiter': image.innerHTML = jupiter
            img.style.marginLeft = '-25%'
            description.textContent += ' Jupiter'
            g = 24.79 / 9.8
            m = (mass.value * g).toFixed(1)
            p.textContent = m + ' kg'
            description.appendChild(p)
            container.appendChild(image)
            container.appendChild(description)
            break
            case 'saturn': image.innerHTML = saturn
            img.style.marginLeft = '-25%'
            description.textContent += ' Saturn'
            g = 10.44 / 9.8
            m = (mass.value * g).toFixed(1)
            p.textContent = m + ' kg'
            description.appendChild(p)
            container.appendChild(image)
            container.appendChild(description)
            break
            case 'uranus': image.innerHTML = uranus
            img.style.marginLeft = '-25%'
            description.textContent += ' Uranus'
            g = 8.87 / 9.8
            m = (mass.value * g).toFixed(1)
            p.textContent = m + ' kg'
            description.appendChild(p)
            container.appendChild(image)
            container.appendChild(description)
            break
            case 'neptune': image.innerHTML = neptune
            img.style.marginLeft = '-25%'
            description.textContent += ' Neptune'
            g = 11.15 / 9.8
            m = (mass.value * g).toFixed(1)
            p.textContent = m + ' kg'
            description.appendChild(p)
            container.appendChild(image)
            container.appendChild(description)
            break
            case 'moon': image.innerHTML = moon
            img.style.marginLeft = '-25%'
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
console.log('Mini Project of Ansari Usman')