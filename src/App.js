import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addHistory } from "./feature/HistorySlice";
import ApiUrl from "./ApiUrl";
import { key } from "./Key";

function App() {
  const history = useSelector((state) => state.history.history);
  const dispatch = useDispatch();
  const [data, setData] = useState("");
  const [details, setDetails] = useState({ name: "", temp: 0 });

  const addLocation = async (location) => {
    await ApiUrl.get(`?q=${location}&appid=${key}&units=metric`).then(res => {
      if (res) {
        setDetails({ name: res.data.name, temp: res.data.main.temp });
        const searchHistory = [...history, location]
        dispatch(addHistory([...new Set(searchHistory)]))
        setData("")
      }
    }).catch()
  }
  
  return (
    <div className="App">
      <input
        onChange={(e) => setData(e.target.value)}
        value={data}
      />
       <button
        className="App-link"
        onClick={() => addLocation(data)}
      >
        Learn React
      </button>
      <p>celsius: {Math.round(details.temp)}<sup>o</sup>C</p>
      <p>name: {details.name}</p>
      {
        history?.length > 0 && history.map((data) => {
          return (
            <div>
              <button onClick={() => addLocation(data)}>{data}</button>
            </div>)
        })
      }
    </div>
  );
}

export default App;
