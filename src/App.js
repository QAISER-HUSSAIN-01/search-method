import { useState } from "react";
import useSearch from "./search";
function App() {

  const [text,setText] = useState('');
  const [findData,setFindData] = useState('');
  const [search,error,status] = useSearch(findData);

  const handleSearch = ()=>{
   setFindData(text.toLowerCase());
   setText('');
  }
  return (
    <div className="App">
      <input value={text} onChange={(e)=>setText(e.target.value)} />
      <button onClick={handleSearch}>Seacrh</button>

      <div>
        {search[0] ? 
        search.map(item=>(<h4>{item.name}</h4>)):
        error ? <h4>{error}</h4> : <h4>no search yet</h4>
        }
      </div>
    </div>
  );
}

export default App;
