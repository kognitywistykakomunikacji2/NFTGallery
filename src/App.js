import React, { useState } from 'react';
import './App.scss'
import './main/reset.scss';
import SwitchThemeButton from './components/componentsAppSide/switchThemeButton';
import useLocalStorage from 'use-local-storage';
import Gallery from './components/componentsWidgetSide/Gallery';
import DemoTextComponent from './components/componentsAppSide/DemoTextComponent';


const App = () => {

  const [NFTOwnerParam, setNFTOwnerParam] = useState(null);
  const [NFTContractParam, setNFTContractParam] = useState('0x3d899e0ce7ce47888d86595b5f7254efb53fa4db');
  const [NFTNetwork, setNFTNetwork] = useState('opt-goerli');
  const [apiKey, setApiKey] = useState('YiqJjCfUskoY72wxeRwTf4Eh3oroWfIH');

  const handlerNFTOwnerParam = e => {
    setNFTOwnerParam(e.target.value);
  }
  const handlerNFTContractParam = e => {
    setNFTContractParam(e.target.value);
  }
  const handlerNFTNetwork = e => {
    setNFTNetwork(e.target.value);
  }
  const handlerapiKey = e => {
    setApiKey(e.target.value);
  }


  //Liczba obrazków, jakie powinny się wyświetlić
  const numberOfImages = 4;

  //do wywalenia w wersji finalnej to co poniżej
  console.clear();
  // do wywalenia to co powyżej

  function refreshPage() {
    window.location.reload(false);
  }

  const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light');
  
  const switchTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
  //   console.log("hello twat");
    setTheme(newTheme);
  }

  return (

      
      <div className="App" data-theme={theme}>
        <DemoTextComponent></DemoTextComponent>
        <SwitchThemeButton onClick={switchTheme}/>
        <button className='reset-button' onClick={refreshPage}>Reset</button>
        <Gallery
          owner={NFTOwnerParam}
          contract={NFTContractParam}
          apiKey={apiKey}
          numberOfImages={numberOfImages}
          network={NFTNetwork}
        />
        <div className='inputs'>
          <input type="text" placeholder="Owner"
            onChange={handlerNFTOwnerParam} />
          <input type="text" placeholder="Contract"
            onChange={handlerNFTContractParam} />
          <input type="text" placeholder="Network"
            onChange={handlerNFTNetwork} />
          <input type="text" placeholder="ApiKey Alchemy"
            onChange={handlerapiKey} />
        </div>
    </div>
  )
}

export default App;