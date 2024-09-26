

export default function ImgCard({item}) {



    return (<>
        <div className="card" style={{ width: '13rem', margin:"1px" }}>
            <img src={`https://cdn2.thecatapi.com/images/${item.reference_image_id}.jpg`} className="card-img-top" alt={item.name} />
            <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text">{item.description}</p>
                
            </div>
        </div>

    </>)
}
