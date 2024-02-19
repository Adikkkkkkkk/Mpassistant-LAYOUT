// READ MORE REVIEWS
const readMoreBtn = document.querySelectorAll('.reviews__more')

readMoreBtn.forEach(function (el) {
	el.addEventListener('click', function () {
		const reviewsComment = el.closest('.reviews__comment')
		const readMoreArrow = el.querySelector('.reviews__more-arrow')

		reviewsComment.classList.toggle('show')
		readMoreArrow.classList.toggle('rotate')
	})
})

// OWL CAROUSEL

const owl = $('.owl-carousel')
$('.reviews__btn-next').click(function () {
	owl.trigger('next.owl.carousel')
})

$('.reviews__btn-prev').click(function () {
	owl.trigger('prev.owl.carousel')
})

$(document).ready(function () {
	$('.owl-carousel').owlCarousel({
		items: 2,
		margin: 40,
		loop: true,
		dots: false,
		autoplay: true,
		autoplayTimeout: 5000,
		autoplayHoverPause: true,
		responsive: {
			0: {
				items: 1,
			},
			601: {
				items: 1,
			},
			1001: {
				items: 2,
				margin: 40,
			},
		},
	})
})

// ACCORDION QUESTIONS
const qAccBtn = document.querySelectorAll('.questions__accordion-btn')

qAccBtn.forEach(function (el) {
	el.addEventListener('click', function () {
		const qAccordion = el.closest('.questions__accordion')
		qAccordion.classList.toggle('questions__accordion--active')

		el.classList.toggle('tapped')
	})
})

// MODAL WINDOW
import modal from './elements/modal.js'
//Reg Buttons
const regButton = document.querySelector('.nav__btns')
const signUpButton = document.querySelector('.nav__sign-up')

regButton.addEventListener('click', function () {
	modal()
})

