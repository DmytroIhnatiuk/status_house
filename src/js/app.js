import { getElement, getElements } from './core/index.js'

window['FLS'] = true
// Підключення основного файлу стилів
import '../scss/style.scss'
import accordion from './modules/accordion.js'
import * as flsFunctions from './core/functions.js'
import { scrollToAnchor } from './modules/scrollToAnchor.js'
import { headerFixed } from './modules/index.js'
import burger from './modules/burger.js'
import 'aos/dist/aos.css'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/effect-cards'
import { projects, advantages, aboutSlider } from './modules/sliders.js'
import HeaderComponent from './modules/HeaderComponent.js'
import AOS from 'aos'
import modalsEvents from './modules/modalsEvents.js'
import modal from './modules/modal.js'
import Modal from './modules/modal.js'
import Form from "./modules/Form.js";

/* Перевірка підтримки webp, додавання класу webp або no-webp для HTML */
/* (i) необхідно для коректного відображення webp із css */
flsFunctions.isWebp()
/* Додавання класу touch для HTML якщо браузер мобільний */
flsFunctions.addTouchClass()
/* Додавання loaded для HTML після повного завантаження сторінки */
// flsFunctions.addLoadedClass();

/* Враховування плаваючої панелі на мобільних пристроях при 100vh */
flsFunctions.fullVHfix()

// Ліниве (відкладене) завантаження картинок
// Документація по роботі у шаблоні: https://template.fls.guru/template-docs/modul-lenivaya-podgruzka-lazy-loading.html
// Документація плагіна: https://github.com/verlok/vanilla-lazyload
// Сніппет(HTML):
// import './files/scroll/lazyload.js';

// accordion('.accordion-services', '.accordion-header', '.accordion-content')

function initAccordionOnSmallScreens() {
	if (window.innerWidth < 640) {
		accordion('.accordion-services', '.accordion-header', '.accordion-content')
	}
}
initAccordionOnSmallScreens()
window.addEventListener('resize', () => {
	document.querySelectorAll('.accordion-content').forEach(content => {
		content.style.maxHeight = null
	})
	initAccordionOnSmallScreens()
})

window.addEventListener('DOMContentLoaded', () => {
	try {
		const modal = new Modal(getElement('.modal'))
		AOS.init({
			once: true,
		})
		HeaderComponent()
		scrollToAnchor()
		projects()
		advantages()
		aboutSlider()
		headerFixed()
		burger()
		getElements('[data-modal]').forEach(el => {
			el.addEventListener('click', e => {
				modalsEvents(el.dataset.modal)
				modal.openModal()
			})
		})
		new Form('.form-footer').init()
	} catch (e) {
		console.log(e)
	}
})

function updateSwiperSlides() {
	// Знаходимо контейнер .swiper-wrapper всередині секції .advantages
	const wrapper = document.querySelector('.advantages .swiper-wrapper')
	if (!wrapper) return // Перевірка наявності елемента

	const slides = wrapper.children

	if (window.innerWidth < 1024) {
		// Додаємо клас .swiper-slide при ширині менше 1024px
		Array.from(slides).forEach(slide => {
			slide.classList.add('swiper-slide')
		})
	} else {
		// Видаляємо клас .swiper-slide при ширині 1024px або більше
		Array.from(slides).forEach(slide => {
			slide.classList.remove('swiper-slide')
		})
	}
}

// Запускаємо перевірку при завантаженні сторінки
updateSwiperSlides()

// Додаємо обробник на зміну розміру екрану
window.addEventListener('resize', updateSwiperSlides)
