const pages = Array.from(document.querySelectorAll('.page'))

const pageNames = pages.map(page => page.dataset.pageName)

const safeViewTransition = fn => {
  if (document.startViewTransition) {
    document.startViewTransition(fn)
  } else {
    fn()
  }
}

const showPage = pageName => {
  safeViewTransition(() => {
    pages.forEach(page => {
      if (page.dataset.pageName === pageName) {
        page.classList.remove('hidden')
      } else {
        page.classList.add('hidden')
      }
    })
  })
}

// set up nav links
pageNames.forEach(pageName => {
  const linksToPage = document.querySelectorAll(`.nav-link-${pageName}`)
  console.log(linksToPage)
  linksToPage.forEach(link => {
    link.addEventListener('click', () => {
      showPage(pageName)
    })
  })
})

const contactButton = document.getElementById('contact-btn')
/** @type {HTMLDialogElement} */
const contactPopup = document.querySelector('.contact-popup')
contactButton.addEventListener('click', () => {
  safeViewTransition(() => {
    contactPopup.showModal()
  })
})

const contactForm = contactPopup.querySelector('form')
contactForm.addEventListener('submit', e => {
  e.preventDefault()
  safeViewTransition(() => {
    contactPopup.close()
  })
})

const contactCancelButton = contactPopup.querySelector('#contact-cancel-button')
contactCancelButton.addEventListener('click', () => {
  safeViewTransition(() => {
    contactPopup.close()
  })
})
