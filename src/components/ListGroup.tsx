function ListGroup() {
    let items = [
        'New York',
        'Tokyo',
        'Paris',
        'Shanghai',
    ]


    return ( 
    <>
    <h1>List</h1>  
    { items.length === 0 && <p>No items</p>} 
    <ul className="list-group">
        {items.map((item, index) => (
            <li className='list-group-item' onClick={() => console.log({item, index})} key={item}>{item}</li>
        ))}
    </ul>
    </>
    );
}

export default ListGroup;