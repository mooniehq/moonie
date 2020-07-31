const HasRightSidebar = (props) => {
  const [top, main, right] = props.children
  return (
    <div className="container mx-auto">
      <div>
        <div>{top}</div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
        <div className="col-span-3">{main}</div>
        <div className="col-span-1">{right}</div>
      </div>
    </div>
  )
}

export default HasRightSidebar
