const section = document.querySelectorAll('section'),
    navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    section.forEach(sec => {
        let top = window.scrollY,
            offset = sec.offsetTop - 150,
            height = sec.offsetHeight,
            id = sec.getAttribute('id');
        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active')
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            })
        }

    })
}

document.getElementById('contactme').addEventListener('click', () => {
    document.querySelector('.contact').style.display = 'flex'
})
document.getElementById('close').addEventListener('click', () => {
    document.querySelector('.contact').style.display = 'none'
})
document.querySelectorAll('.darkmode').forEach(darkmode => {
    darkmode
        .addEventListener('click', () => {
            document.querySelectorAll('.sun').forEach(sun=>{sun.classList.toggle('sun-dark')})
            document.querySelectorAll('.moon').forEach(moon=>{moon.classList.toggle('moon-dark')})
            document.querySelector('header nav').classList.toggle('nav-dark')
            document.querySelector('.menu').classList.toggle('menu-dark')
            document.querySelectorAll('section').forEach(section => { section.classList.toggle('section-dark') })
            document.querySelectorAll('header nav a').forEach(nav => { nav.classList.toggle('a-dark') })
            document.querySelectorAll('.linksosmed').forEach(appsosmed => { appsosmed.classList.toggle('linksosmed-dark') })
            document.querySelectorAll('.darkmode i').forEach(icon => { icon.classList.toggle('i-dark') })
            document.querySelector('header').classList.toggle('header-dark')
            document.querySelector('.logo').classList.toggle('logo-dark')
            document.querySelector('.sosmed').classList.toggle('sosmed-dark')
            document.querySelector('.exit i').classList.toggle('i-dark')
            document.querySelector('.greeth1').classList.toggle('h1greet')
            document.querySelector('.greeth3').classList.toggle('h3greet')
            document.querySelector('.abouth1').classList.toggle('abouth1-dark')
            document.querySelector('.abouth3').classList.toggle('abouth3-dark')
            document.querySelectorAll('.judulh3').forEach(judul => { judul.classList.toggle('judulh3-dark') })
            document.querySelector('.greetp').classList.toggle('pgreet')
            document.querySelector('.github').classList.toggle('github-dark')
        })
})

document.querySelector('.menu').addEventListener('click',()=>{
    document.querySelector('header nav').classList.toggle('nav-open')
})