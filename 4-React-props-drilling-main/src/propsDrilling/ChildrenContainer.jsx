

function ChildrenContainer({ count }) {


    return (
        <>
            <div className="container bg-warning">
                <h3>Children</h3>
                <p>React - props drilling - GrandParent → Parent → Children</p>
                <h3>App içinden gelen count : {count}</h3>
            1↓
            {'<GrandParentContainer count={count} />'}
            <br />
            2↓
            {'function GrandParentContainer({count}) {...'}
            <br />
            3↓
            {'<ParentContainer count={count} />'}
            <br />
            4↓
            {'function ParentContainer({count}) {...'}
            <br />
            5↓
            {'<ChildrenContainer count={count} />'}
            <br />
            6↓
            {'function ChildrenContainer({ count }) {...'}
            <br />
            7↓
            {'<h3>App içinden gelen count : {count}</h3>'}
                
        </div>
        </>
    )
}

export default ChildrenContainer
