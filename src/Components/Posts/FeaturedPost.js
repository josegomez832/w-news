import { Fragment, React } from "react";
import './FeaturedPost.scss'

export default function FeaturedPost({post}) {
  return (
    <Fragment>
    {post
      .filter((featuredPost) => featuredPost.featured)
      .map((featuredPost) => (
        <div key={featuredPost.sys.id} className="featured-post">
          <div className="featured-post--inner">
            <div className="featured-post--img">
              <img
                src={featuredPost.featuredImage.url}
                alt="Blog imagee"
                width={featuredPost.featuredImage.width}
                height={featuredPost.featuredImage.height}
                className="img-desktop"
              />
              <img
                src={featuredPost.mobileFeaturedImage.url}
                alt="Mobile Blog image"
                width={featuredPost.mobileFeaturedImage.width}
                height={featuredPost.mobileFeaturedImage.height}
                className="img-mobile"
              />
            </div>
            <div className="featured-post--content">
              <div className="heading">
                <p className="main-heading">{featuredPost.blogTitle}</p>
              </div>
              <div className="content">
                <p>{featuredPost.excerpt}</p>
                <p>
                  <a href="#0" className="btn btn-primary">
                    Read More
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
  </Fragment>
)}