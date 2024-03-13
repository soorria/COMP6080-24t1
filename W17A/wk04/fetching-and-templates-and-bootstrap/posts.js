export const API_URLS = {
  listPosts: 'https://jsonplaceholder.typicode.com/posts',
  getUser: id => `https://jsonplaceholder.typicode.com/users/${id}`,
}

export const listPosts = () => {
  return fetch(API_URLS.listPosts)
    .then(response => {
      if (!response.ok) {
        throw new Error('server is not ok')
      }
      return response.json().then(data => {
        return data
      })
    })
    .catch(err => {
      console.error(err.message)
      return []
    })
}

export const listPostsWithUsers = () => {
  return listPosts().then(posts => {
    // const promises = []

    // for (const post of posts) {
    //   promises.push(
    //     getUserDetails(post.userId).then(user => {
    //       return {
    //         ...post,
    //         user,
    //       }
    //     })
    //   )
    // }

    const promises = posts.map(post =>
      getUserDetails(post.userId).then(user => {
        return {
          ...post,
          user,
        }
      })
    )

    return Promise.all(promises)
  })
}

/**
 * Get user details given their id
 *
 * @param {string} id
 * @returns
 */
export const getUserDetails = id => {
  return fetch(API_URLS.getUser(id)).then(response => response.json())
}

export const createPostElement = post => {
  /**
   * @type {HTMLTemplateElement}
   */
  const template = document.getElementById('post-card-template')

  const content = template.content.cloneNode(true)

  console.log(content, post)

  content.querySelector('.card-title').textContent = post.title
  content.querySelector('.card-text').textContent = post.body

  // content.querySelector('.card-link').setAttribute('href', `#${post.id}`)
  content.querySelector('.card-link').href = `#${post.id}`

  const byline = content.querySelector('.card-byline')
  byline.textContent = post.user.name

  // getUserDetails(post.userId).then(user => {
  //   byline.textContent = user.name
  // })

  return content
}

export const createPostElementJs = post => {
  const card = document.createElement('div')
  card.className = 'card'
  card.style.width = '18rem'

  const cardBody = document.createElement('div')
  cardBody.className = 'card-body'
  card.appendChild(cardBody)

  const cardTitle = document.createElement('h5')
  cardTitle.className = 'card-title'
  cardTitle.textContent = post.title
  cardBody.append(cardTitle)

  const cardText = document.createElement('p')
  cardText.className = 'card-text'
  cardText.textContent = post.body
  cardBody.append(cardText)

  const byline = document.createElement('p')
  byline.className = 'card-byline'
  byline.textContent = post.user.name
  cardBody.append(byline)

  const cardLink = document.createElement('a')
  byline.className = 'card-link btn btn-primary'
  byline.textContent = 'See post details'
  cardLink.href = `#${post.id}`
  cardBody.append(cardLink)

  return card
}
