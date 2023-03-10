import './App.scss';
import Header from './Components/Layout/Header';
import BlogPosts from './Components/Posts/BlogPosts';
import FeaturedPost from './Components/Posts/FeaturedPost';
import NewPosts from './Components/Posts/NewPosts';
import {useState, useEffect} from "react";

const query = `{
  blogCollection{
   items{
     blogTitle
     excerpt
     featuredImage{
       url
       width
       height
     }
     mobileFeaturedImage{
      url
      width
      height
     }
     featured
     sys{
       id
       publishedAt
     }
   }
 }
}`
function App({blog}) {
  const [page, setPage] = useState(null);

  useEffect(() => {
    window
      .fetch(`https://graphql.contentful.com/content/v1/spaces/${process.env.REACT_APP_ID}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.REACT_APP_KEY}`,
        },
        body: JSON.stringify({ query }),
      })
      .then((response) => response.json())
      .then(({ data, errors }) => {
        if (errors) {
          console.error(errors);
        }

        setPage(data.blogCollection);
      });
  }, []);
  console.log(page);
  if (!page) {
    return "Loading...";
  }
  return (
   <div className='container'>
      <Header />
      <div className="blog-wrapper">
          <FeaturedPost post={page.items} />
          <NewPosts post={page.items}/>
          <BlogPosts post={page.items} />
      </div>
   </div>
  );
}
export default App;
