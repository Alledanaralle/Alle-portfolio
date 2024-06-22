const section = document.querySelectorAll('section'),
    navLinks = document.querySelectorAll('header nav a')

window.addEventListener('scroll', () => {
    section.forEach(sec => {
        let top = window.scrollY,
            offset = sec.offsetTop - 150,
            height = sec.offsetHeight,
            id = sec.id

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active')
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active')
            })
        }
    })
})

const themeChange = () => {
    document.querySelector('.dark-mode-toggle').addEventListener('click', () => {
        document.body.classList.toggle('dark')
        document.querySelector('header').classList.toggle('dark')
        document.querySelector('.contact-form').classList.toggle('dark')
        document.querySelector('.dark-mode-toggle').classList.toggle('dark')
        document.querySelector('.dark-mode-toggle i').classList.toggle('dark')
        document.querySelector('#home article.greet').classList.toggle('dark')
        document.querySelector('#about article.greet').classList.toggle('dark')
        document.querySelector('#skill .judul').classList.toggle('dark')
        document.querySelector('#project .judul').classList.toggle('dark')
        document.querySelector('header nav').classList.toggle('dark')
        document.querySelector('.menu-toggle').classList.toggle('dark')
        document.querySelector('.image-slider').classList.toggle('dark')
        document.querySelectorAll('.menu-toggle span').forEach(span => { span.classList.toggle('dark') })

        if (document.body.classList.contains('dark')) {
            document.querySelector('.dark-mode-toggle i').classList.remove('ri-moon-fill')
            document.querySelector('.dark-mode-toggle i').classList.add('ri-sun-fill')
        } else {
            document.querySelector('.dark-mode-toggle i').classList.remove('ri-sun-fill')
            document.querySelector('.dark-mode-toggle i').classList.add('ri-moon-fill')
        }
    })

}
themeChange()

const openMenu = () => {
    document.querySelector('.menu-toggle').addEventListener('click', () => {
        document.querySelector('header nav').classList.toggle('open')
    })
}
openMenu()

const openContact = () => {
    document.querySelector('.contact-btn-open').addEventListener('click', () => {
        document.querySelector('.contact-form').classList.add('open')
    })
    document.querySelector('.contact-btn').addEventListener('click', () => {
        document.querySelector('.contact-form').classList.remove('open')
    })
}
openContact()

const slider = document.querySelector('.image-slider'),
    arrLeft = document.querySelector('.arrow-left'),
    arrRight = document.querySelector('.arrow-right'),
    heading = document.querySelector('.caption h1'),
    desc = document.querySelector('.caption p');

const image = [
    "loginsign.png",
    "kalkulator.png",
    "jam.png",
    "sidebar.png",
    "to-do.png"
]

const headings = [
    'Login & Sign Up Page',
    'Calculator App',
    'Digital Clock App',
    'Simple Sidebar',
    'To-Do List App'
]

const descs = [
    '<a target="_blank" href="https://login-signup-fawn.vercel.app/">Visit here <i class="ri-share-forward-box-line"></i></a>',
    '<a target="_blank" href="https://kalkulator-iota.vercel.app/">Visit here <i class="ri-share-forward-box-line"></i></a>',
    '<a target="_blank" href="https://jam-digital-livid.vercel.app/">Visit here <i class="ri-share-forward-box-line"></i></a>',
    '<a target="_blank" href="https://sidebar-two-psi.vercel.app/">Visit here <i class="ri-share-forward-box-line"></i></a>',
    '<a target="_blank" href="https://to-do-list-orpin-beta.vercel.app/">Visit here <i class="ri-share-forward-box-line"></i></a>'
]

let content = 0;

function slide(content) {
    slider.style.backgroundImage = `linear-gradient(to top, #00000080, #00000080), url('${image[content]}')`

    slider.classList.add('image-fade')

    setTimeout(() => {
        slider.classList.remove('image-fade')
    }, 550)

    heading.innerHTML = headings[content]
    desc.innerHTML = descs[content]
}
slide(content);

arrLeft.addEventListener('click', () => {
    content--;
    if (content < 0) {
        content = image.length - 1
    }
    slide(content)
})
arrRight.addEventListener('click', () => {
    content++;
    if (content > image.length - 1) {
        content = 0
    }
    slide(content)
})

