function List(props){

  
    const category=props.category;
    const itemlist=props.items;
    const listitems = itemlist.map(fruit => <li>{fruit}</li>);
    return(
        <>
        <h1>{category}</h1>
         <ol>{listitems}</ol>
        </>
    );
   
}
export default List
