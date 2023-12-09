import BlogCard from './BlogCard'
import NewPost from './NewPost'
import { useEffect } from 'react'
import { UserAuth } from '../context/AuthContext'

export default function Posts() {
  const { posts, getPosts } = UserAuth()
  useEffect(() => {
    getPosts()
  }, [])

  return (
    <section className="flex flex-col gap-7">
      <header className="flex justify-between items-center">
        <h2 className="text-xl font-bold">Posts destacados</h2>
        <NewPost />
      </header>
      <div className="flex flex-wrap  gap-2">
        {posts?.map(post => (
          <BlogCard
            key={post.id}
            id={post.id}
            author={post.profiles.username}
            username={post.profiles.username.split(' ')[0]}
            title={post.title}
            followers={post.profiles.followers}
            avatar_url={post.profiles.avatar_url}
          />
        ))}
      </div>
    </section>
  )
}
