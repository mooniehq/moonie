const Card = (props) => {
  const [header, content] = props.children
  return (
    <div className="ui card">
      <div className="content">
        <div className="header">{header}</div>
      </div>
      <div className="content">{content}</div>
    </div>
  )
}

export default Card
