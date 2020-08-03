const HasRightSidebar = (props) => {
  const [top, main, right] = props.children
  return (
    <div>
      <div>
        <div>{top}</div>
      </div>
      <div className="flex content-start flex-wrap">
        <div className="w-auto md:w-2/3 md:pr-4">{main}</div>
        <div className="w-auto md:w-1/3 md:pl-4">{right}</div>
      </div>
    </div>
  )
}

export default HasRightSidebar
