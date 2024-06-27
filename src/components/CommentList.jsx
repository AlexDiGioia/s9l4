import { ListGroup } from 'react-bootstrap'
import SingleComment from './SingleComment'

const CommentList = ({ commentList }) => (
  <ListGroup style={{ color: 'black' }} className="mt-2">
    {commentList.map((comment) => (
      <SingleComment comment={comment} key={comment._id} />
    ))}
  </ListGroup>
)

export default CommentList
