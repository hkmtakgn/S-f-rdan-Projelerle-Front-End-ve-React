import ParentContainer from "./ParentContainer"


function GrandParentContainer({count}) {
  

    return (
      <>
        <div className="container bg-info">
            <h1>GrandParent</h1>
            <ParentContainer count={count} />
        </div>
      </>
    )
  }
  
  export default GrandParentContainer
  