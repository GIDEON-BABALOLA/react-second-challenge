import { useEffect, useState } from "react"
import Form from "./Form.js"
import List from "./List.js"
import Table from "./Table.js"
function App() {
  const API_URL = "https://jsonplaceholder.typicode.com"
  const [reqType, setReqType] = useState("users")
  const [items, setItems] = useState([])
  useEffect(() => {
const fetchItems = async() => {
try{
const response = await fetch(`${API_URL}/${reqType}`);
const result = await response.json();
setItems(result)

}catch(err){
console.log(err)
}
}
fetchItems()
  }, [reqType])
  return (
    <div className="App">
    <Form  reqType={reqType} setReqType={setReqType}/>
    {/* <List items = {items}/> */}
    <Table items={items}/>
 
    </div>
  );
}

export default App;
