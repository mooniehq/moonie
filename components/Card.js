import React from 'react'

const Card = (props) => {
  const children = React.Children.toArray(props.children)
  let header
  let content
  if (children.length === 1) {
    content = children[0]
  } else if (children.length === 2) {
    header = children[0]
    content = children[1]
  }
  return (
    <div className="ui fluid card">
      {header && (
        <div className="content">
          <div className="header">{header}</div>
        </div>
      )}
      <div className="content">{content}</div>
    </div>
  )
}

export default Card
