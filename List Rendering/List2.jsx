function List(props){

  
    const category=props.category;
    const itemlist=props.items;
    const listitems = itemlist.map(item => <li key={item.id}>
                                           {item.name}: &nbsp;
                                           <b>{item.calories}</b></li>);
    return(
        <>
        <h1>{category}</h1>
         <ol>{listitems}</ol>
        </>
    );
   
}
export default List
