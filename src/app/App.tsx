import React, {useEffect} from 'react';
import {BrowserRouter, useLocation} from "react-router-dom";

import {useTelegram} from "@/shared/lib/hooks/useTelegram";

import { RouterView } from './router'
import { CrossScreenContent } from './CrossScreenContent'

function App() {
    const { expand } = useTelegram()

    useEffect(() => {
        expand()
    });

  return (
      <BrowserRouter>
          <CrossScreenContent />
          <RouterView/>
      </BrowserRouter>
  );
}

export default App;
