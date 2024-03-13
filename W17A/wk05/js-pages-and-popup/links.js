import { showPage } from './pages.js'

export const addListenerToLink = linkElement => {
  const pageToLinkTo = linkElement.dataset.linkTo

  console.log({
    pageToLinkTo,
  })

  linkElement.addEventListener('click', () => {
    showPage(pageToLinkTo)
  })
}

export const setupPageLinks = () => {
  const links = document.querySelectorAll('.app-link')

  // could also do
  // for (const link of links)
  links.forEach(addListenerToLink)
}
