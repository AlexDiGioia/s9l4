import React, { Component } from 'react';



class CommentArea extends Component{

    state={
        comments:[],
    }

    fetchComments=()=>{
        fetch("https://striveschool-api.herokuapp.com/api/comments/")
        .then((resp)=>{
            if(resp.ok){
                return resp.json();
            }
            else {
                throw new Error("errore nella fetch ");
            }
        })
        .then((data)=>{
            console.log("risposta json dal server");
            this.setState({
                remoteUsers: data,
            })
        })
    }

    componentDidMount(){
        console.log("commento componentDidMount");
        this.fetchComments();
    }
    render(){
        return;
        <>
        </>
    }
}

export default CommentArea;
