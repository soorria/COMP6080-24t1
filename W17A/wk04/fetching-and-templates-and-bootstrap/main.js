import { createPostElement, listPosts, listPostsWithUsers } from './posts.js'

listPosts()

const main = () => {
  const postsListElement = document.querySelector('.posts-list')

  postsListElement.textContent = ''

  listPostsWithUsers().then(posts => {
    posts.forEach(post => {
      const element = createPostElement(post)

      postsListElement.append(element)
    })
  })
}

main()
