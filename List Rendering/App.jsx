import List from './List.jsx'
function App() {

  const fruits = ["apple","Banana","cherry","dragonFruit"];

  const vegetables= ["Tomato","potato","Knolkhol","garlic"];
  return (
    <>
    <List items={fruits} category="Fruits" />
    <List items={vegetables} category="vegetables" />
    </>

  );
}
export default App
