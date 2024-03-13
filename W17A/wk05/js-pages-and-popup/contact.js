export const setupContactForm = () => {
  const contactPopupElement = document.getElementById('contact-popup')
  const contactPopupModal = new bootstrap.Modal(contactPopupElement)

  const contactPopupButton = document.getElementById('contact-btn')
  contactPopupButton.addEventListener('click', () => {
    contactPopupModal.show()
  })

  const contactCancelButton = document.getElementById('contact-cancel-button')
  contactCancelButton.addEventListener('click', () => {
    contactPopupModal.hide()
  })

  const contactForm = contactPopupElement.querySelector('form')
  contactForm.addEventListener('submit', event => {
    event.preventDefault()
    contactPopupModal.hide()
  })
}
