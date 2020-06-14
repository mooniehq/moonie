const HasRightSidebar = (props) => {
  const [top, main, right] = props.children
  return (
    <>
      <div className="ui container">
        <div>
          <div>{top}</div>
        </div>
        <div className="ui stackable padded grid">
          <div className="twelve wide column">{main}</div>
          <div className="four wide column">{right}</div>
        </div>
      </div>
    </>
  )
}

export default HasRightSidebar
