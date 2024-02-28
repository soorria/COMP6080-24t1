// const form = document.getElementById('profile-form')
const form = document.querySelector('#profile-form')
const outputElement = document.getElementById('output')

const formSubmitHandler = event => {
  event.preventDefault()

  const formdata = new FormData(form)

  const name = formdata.get('name')
  const email = formdata.get('email')
  const bio = formdata.get('bio')

  const emailPreferences = formdata.getAll('email-preference')

  outputElement.textContent = ''

  let isRequestValid = true
  setTimeout(() => {
    isRequestValid = false
  }, 5000)
  const response = fetch('https://httpbin.org/anything', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name,
      email,
      bio,
      emailPreferences,
    }),
  })
    // .then(response => {
    //   console.log('actual response', response)

    //   if (response.ok) {
    //     response.json().then(json => {
    //       console.log('final json response', json)
    //     })
    //   } else {
    //     response.text().then(errorResponseText => {
    //       console.log('error text response', errorResponseText)
    //     })
    //   }
    // })
    .then(response => {
      if (!isRequestValid) {
        throw new Error('timed out')
      }
      return response.json()
    })
    .then(json => {
      console.log('final json response', json)
      outputElement.textContent = JSON.stringify(json, null, 2)
      // outputElement.innerText = JSON.stringify(json, null, 2)
      // outputElement.innerHTML = '<<script'
    })
    .catch(reason => {
      console.log('fetch failed', reason)
    })

  console.log(response)
}
form.addEventListener('submit', formSubmitHandler)
// form.removeEventListener('submit', formSubmitHandler)

// form.onsubmit = () => {}
