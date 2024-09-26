import ChildrenContainer from "./ChildrenContainer"


function ParentContainer({count}) {
  

    return (
      <>
        <div className="container bg-danger">
            <h2>Parent</h2>
            <ChildrenContainer count={count} />
        </div>
      </>
    )
  }
  
  export default ParentContainer
  