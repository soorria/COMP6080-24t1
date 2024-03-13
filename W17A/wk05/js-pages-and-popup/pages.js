const pages = document.querySelectorAll('.app-page')

const startViewTransition = fn => {
  if (document.startViewTransition) {
    document.startViewTransition(() => {
      fn()
    })
  } else {
    fn()
  }
}

export const showPage = pageToShow => {
  startViewTransition(() => {
    pages.forEach(page => {
      if (page.dataset.pageName === pageToShow) {
        page.classList.remove('hidden')
      } else {
        page.classList.add('hidden')
      }
    })
  })
}

export const deletePages = () => {}
