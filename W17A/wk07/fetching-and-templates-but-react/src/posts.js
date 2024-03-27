export const API_URLS = {
  listPosts: 'https://jsonplaceholder.typicode.com/posts',
  getUser: id => `https://jsonplaceholder.typicode.com/users/${id}`,
}

export const listPosts = async () => {
  try {
    const response = await fetch(API_URLS.listPosts)

    if (!response.ok) {
      throw new Error('server is not ok')
    }

    const data = await response.json()

    return data
  } catch (err) {
    console.error(err.message)
    return []
  }
}

export const listPostsWithUsers = async () => {
  const posts = await listPosts()

  const promises = posts.map(post =>
    getUserDetails(post.userId).then(user => {
      return {
        ...post,
        user,
      }
    })
  )

  return Promise.all(promises)
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
