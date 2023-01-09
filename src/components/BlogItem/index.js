// Write your JS code here
import './index.css'

const BlogItem = props => {
  const {blogsDetails} = props
  const {title, description, publishedDate} = blogsDetails

  return (
    <li className="blog-item-box">
      <div className="heading-published-date">
        <h1 className="title">{title}</h1>
        <p className="published-date">{publishedDate}</p>
      </div>
      <div>
        <p className="description">{description}</p>
      </div>
    </li>
  )
}

export default BlogItem
