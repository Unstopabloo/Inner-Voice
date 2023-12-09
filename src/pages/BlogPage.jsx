import Posts from '../components/Posts'
import BlogFirstPost from '../components/BlogFirstPost'

export default function BlogPage() {
  return (
    <section className="overflow-y-auto pe-3">
      <BlogFirstPost />
      <Posts />
    </section>
  )
}
