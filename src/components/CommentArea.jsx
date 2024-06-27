import React, { Component } from "react";
import ListGroup from 'react-bootstrap/ListGroup';
import CommentList from "./CommentList"
import SingleBook from "./SingleBook";
class CommentArea extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: [],
    };
  }

  fetchComments = () => {
    const { bookId } = this.props;
    console.log(bookId);
    fetch(`https://striveschool-api.herokuapp.com/api/comments/${bookId}`, {
        headers: {
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjZiZmQ2MjdjMjM5YzAwMTUyZjRiNTciLCJpYXQiOjE3MTk1MDE5NjMsImV4cCI6MTcyMDcxMTU2M30.w7S7GIpJPMEUPkjaAgLtPfhSkLPbE7j4X9JPz9HCVq0"
        }
        })
      .then((resp) => {
        if (resp.ok) {
          return resp.json();
        } else {
          throw new Error("Error in fetching comments");
        }
      })
      .then((data) => {
        console.log("data", data);
        this.setState({
          comments: data,
        });
      })
      .catch((error) => console.error(error));
  };

  componentDidMount() {
    this.fetchComments();
  }

  render() {
    const { comments } = this.state;
    return (
      <div >
        <h4>Comments:</h4>
        {/* <ListGroup commentList={comments}>
          {comments.map((comment) => (
            <ListGroup.Item key={comment.elementId}>{comment.comment}, Voto: {comment.rate}</ListGroup.Item>
          ))}
        </ListGroup> */}
        <CommentList commentList={comments}/>
      </div>
    );
  }
}

export default CommentArea;
