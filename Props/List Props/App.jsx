import List from './List.jsx'
function App() {

  const fruits = [{id:1,name:"apple",calories:95},
                  {id:2,name:"Banana",calories:45},
                  {id:3,name:"cherry",calories:54},
                  {id:4,name:"dragonFruit",calories:45}];

  const vegetables= [{id:1,name:"Tomato",calories:34},
                     {id:2,name:"potato",calories:45},
                     {id:3,name:"Knolkhol",calories:53},
                     {id:4,name:"garlic",calories:43}];
  return (
    <>
   {fruits.length > 0 && <List items={fruits} category="Fruits" />}
   {vegetables.length > 0 && <List items={vegetables} category="Vegetables"/>}
    </>
    
  );
}
export default App
