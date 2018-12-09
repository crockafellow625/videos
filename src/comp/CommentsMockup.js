import React from 'react'

const CommentsMockup = props => {
  return (
    <div className="ui comments">
        <div className="comment">
            <a href="/" className="avatar">
            <img src={props.avatar} alt="avatar"/></a>
            <div className="content">
                <a href="/" className="author">{props.author}</a>
                <div className="metadata">
                    <div className="date">{props.date}</div>
                </div>
                <div className="text">{props.text}</div>
            </div>
        </div>
    </div>
  )
}

export default CommentsMockup
