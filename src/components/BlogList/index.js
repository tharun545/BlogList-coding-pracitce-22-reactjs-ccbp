// Write your JS code here

import BlogItem from '../BlogItem'

const BlogList = props => {
  const {blogsList} = props

  return (
    <div>
      <ul>
        {blogsList.map(each => (
          <BlogItem key={each.id} blogsList={each} />
        ))}
      </ul>
    </div>
  )
}

export default BlogList
