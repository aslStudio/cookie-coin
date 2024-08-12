import React, {useEffect} from 'react';
import {BrowserRouter} from "react-router-dom";

import {useTelegram} from "@/shared/lib/hooks/useTelegram";

import { RouterView } from './router'
import './App.css';

function App() {
    const { expand } = useTelegram()

    useEffect(() => {
        expand()
        // setTimeout(() => {
        //     alert(`${window.innerWidth}-${window.innerHeight}`)
        // }, 500)
    });

  return (
      <BrowserRouter>
          <RouterView />
      </BrowserRouter>
  );
}

export default App;
