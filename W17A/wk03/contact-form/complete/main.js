const form = document.getElementById('profile-form')

const getProfileDetailsFromForm = () => {
  const formdata = new FormData(form)

  return {
    name: formdata.get('profile-name'),
    email: formdata.get('profile-email'),
    bio: formdata.get('profile-bio'),
    emailPreferences: formdata.getAll('email-preferences'),
  }
}

form.addEventListener('change', () => {
  const data = getProfileDetailsFromForm()
  renderData(data)
})

form.addEventListener('submit', e => {
  e.preventDefault()
  const data = getProfileDetailsFromForm()

  fetch('https://httpbin.org/anything', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
    .then(response => response.json())
    .then(json => {
      renderData({
        sent: data,
        received: json,
      })
    })
})

const renderData = data => {
  const outputElement = document.querySelector('#output')
  outputElement.textContent = JSON.stringify(data, null, 2)
}
