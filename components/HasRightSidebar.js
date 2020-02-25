const HasRightSidebar = (props) => {
  const [top, main, right] = props.children
  return (
    <>
      <div>
        <div>
          <div>{top}</div>
        </div>
        <div>
          <div>{main}</div>
          <div>{right}</div>
        </div>
      </div>
    </>
  )
}

export default HasRightSidebar
