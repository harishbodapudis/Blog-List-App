// Write your JS code here
import {Component} from 'react'
import BlogItem from '../BlogItem'
import './index.css'

class BlogList extends Component {
  render() {
    const {blogsList} = this.props
    console.log(blogsList)
    return (
      <ul className="blogs-box">
        {blogsList.map(eachItem => (
          <BlogItem key={eachItem.id} blogsDetails={eachItem} />
        ))}
      </ul>
    )
  }
}

export default BlogList
