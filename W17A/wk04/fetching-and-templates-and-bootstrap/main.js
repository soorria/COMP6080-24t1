import {
  createPostElement,
  createPostElementJs,
  listPosts,
  listPostsWithUsers,
} from './posts.js'

listPosts()

const main = () => {
  const postsListElement = document.querySelector('.posts-list')

  postsListElement.textContent = ''

  listPostsWithUsers().then(posts => {
    posts.forEach(post => {
      const element = createPostElementJs(post)

      postsListElement.append(element)
    })
  })
}

main()
