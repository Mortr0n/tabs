import './App.css';
import Tabs from './components/Tab';
import React, {useState} from 'react';




function App() {

  const tabArr = [
    {
      label: "1st Tab",
      content: "This is the first Tabs Content.  Isn't it great?"
    },
    {
      label: "2nd Tab",
      content: "This is the second Tabs Content.  Isn't it swell?"
    },
    {
      label: "3rd Tab",
      content: "This is the third Tabs Content.  Isn't it grand?"
    },
  ]

  const [thisTab, setThisTab] = useState(0);


  return (
    <div className="App">
      <Tabs
      allTabs={tabArr}
      thisTab={thisTab}
      setThisTab={setThisTab}
      />
    </div>
  );
}

export default App;
