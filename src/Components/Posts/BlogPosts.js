import React from 'react'
import './BlogPosts.scss'


function BlogPosts({post}) {
  return (
    <div className='blog-feed'>
      {post.sort((a, b) => new Date(a.sys.publishedAt) - new Date(b.sys.publishedAt))
  .map((blogPost, index) => (
 
        blogPost.featuredImage !== null && blogPost.featured !== true ? (
          
            <div key={blogPost.sys.id} class="blog-post">
              <div className='blog-post--image'>
                <img src={blogPost.featuredImage.url} alt={blogPost.blogTitle} width={blogPost.featuredImage.width} height={blogPost.featuredImage.height} />
              </div>
              <div className="blog-post--content">
              <div className="blog-post--counter">0{index}</div>
                <p className="blog-post--title-sm"><a href="#">{blogPost.blogTitle}</a></p>
                <p className='blog-post--excerpt'>{blogPost.excerpt}</p>
              </div>
            </div>
        ):null
      ))}
    </div>
  )
}

export default BlogPosts