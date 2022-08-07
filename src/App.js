import './App.css';
import { useState } from 'react';
import { createContext } from 'react';
import Landingpage from './component/Landingpage';
import Incardpreview from './component/Incardpreview';
import Loader from './component/Loader';
import Previewcard from './component/Previewcard';


export const UserContext = createContext();

function App() {

  const [isLoading, setIsLoading]= useState(false);
  const [searchHistory, setSearchHistory] = useState([]);
  const [link, setLink] = useState('')

 

  const [jsonData, setJsondata]= useState({})


  return (
    <div className="App">
      <p className='name' >Link-Previewer</p>
      <UserContext.Provider value={{jsonData, setJsondata, isLoading, setIsLoading, setSearchHistory, searchHistory, link, setLink}} >
        <Landingpage />
        {jsonData.title == undefined ? <h1 className='empty-link' >Please paste your link</h1> :
        !isLoading ? 
          <Incardpreview />
          : <Loader/>
        }
      <Previewcard/>
      </UserContext.Provider>
    </div>
  );
}

export default App;
