import BlogCard from './BlogCard'
// import { supabase } from '../server/supabaseClient'
// import { useEffect } from 'react'

export default function Posts() {
  // useEffect(() => {
  //   const getPosts = async () => {
  //     const { data, error } = await supabase.from('blog_posts').select('*')
  //     if (error) console.log(error)
  //     console.log(data)
  //   }
  //   getPosts()
  // }, [])

  return (
    <section className="flex flex-col gap-5">
      <h2 className="text-xl font-bold">Posts destacados</h2>
      <BlogCard />
    </section>
  )
}
