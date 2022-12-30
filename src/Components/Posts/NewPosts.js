import React from 'react'
import './NewPosts.scss'

export default function NewPosts({post}) {
  return (
    <div className='sidebar'>
      <div className=' sidebar-new'>
      <h3 class="heading">New</h3>
        {post.sort((a, b) => new Date(b.sys.publishedAt) - new Date(a.sys.publishedAt))
  .slice(0, 3).map((newPost) => (
        <div key={newPost.sys.id} className="new-post">
          <p className="post-heading"><a href="#0">{newPost.blogTitle}</a></p>
          <p>{newPost.excerpt}</p>
        </div>
      ))}
      </div>
    </div>
  )
}
