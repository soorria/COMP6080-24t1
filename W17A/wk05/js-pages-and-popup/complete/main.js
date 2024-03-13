////////////////////
// pages.js
////////////////////

const pages = Array.from(document.querySelectorAll('.app-page'))

const showPage = pageName => {
  startViewTransition(() => {
    pages.forEach(page => {
      if (page.dataset.pageName === pageName) {
        page.classList.remove('hidden')
      } else {
        page.classList.add('hidden')
      }
    })
  })

  if (pageName === 'home') {
    // load blog posts
  } else if (pageName === 'about') {
    // about page info
  }
}

////////////////////
// contact.js
////////////////////

const allLinks = document.querySelectorAll('.app-link')
const linkClickHandler = event => {
  showPage(event.currentTarget.dataset.linkTo)
}
allLinks.forEach(link => link.addEventListener('click', linkClickHandler))

////////////////////
// contact.js
////////////////////

const contactButton = document.getElementById('contact-btn')
const contactPopupElement = document.getElementById('contact-popup')
const contactPopupModal = new bootstrap.Modal(contactPopupElement)
contactButton.addEventListener('click', () => {
  startViewTransition(() => {
    contactPopupModal.show()
  })
})

const contactForm = contactPopupElement.querySelector('form')
contactForm.addEventListener('submit', e => {
  e.preventDefault()
  startViewTransition(() => {
    contactPopupModal.close()
  })
})

const contactCancelButton = contactPopupElement.querySelector(
  '#contact-cancel-button'
)
contactCancelButton.addEventListener('click', () => {
  startViewTransition(() => {
    contactPopupModal.close()
  })
})

////////////////////
// utils.js
////////////////////

/**
 * (optional) animate between states
 */
const startViewTransition = fn => {
  if (document.startViewTransition) {
    document.startViewTransition(fn)
  } else {
    fn()
  }
}
