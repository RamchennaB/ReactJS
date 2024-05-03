function List(props){

  
    const category=props.category;
    const itemlist=props.items;
    const listitems = itemlist.map(item => <li key={item.id}>
                                           {item.name}: &nbsp;
                                           <b>{item.calories}</b></li>);
    return(
        <>
        <h1 className="list-category">{category}</h1>
         <ol className="list-items">{listitems}</ol>
        </>
    );
   
}
export default List