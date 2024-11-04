import Swiper from 'swiper'
import {
	Autoplay,
	Navigation,
	Pagination,
	EffectFade,
	EffectCards,
	Grid,
} from 'swiper/modules'
import { getElement, getElements } from '../core/index.js'

function projects() {
	if (!getElement('[data-swiper="projects"]')) return
	new Swiper('[data-swiper="projects"]', {
		modules: [Navigation],
		spaceBetween: 32,
		slidesPerView: 1,
		loop: true,
		navigation: {
			nextEl: '.projects-next',
			prevEl: '.projects-prev',
		},
	})
}
function advantages() {
	if (!getElement('[data-swiper="advantages"]')) return
	new Swiper('[data-swiper="advantages"]', {
		modules: [Navigation],
		slidesPerView: 1,
		breakpoints: {
			640: {
				slidesPerView: 2,
			},
			1024: {
				slidesPerView: 4,
			},
		},
		loop: true,
		navigation: {
			nextEl: '.advantages-next',
			prevEl: '.advantages-prev',
		},
	})
}

export { projects, advantages }
