import {Route, Routes, useLocation} from "react-router-dom";
import {Auth} from "@/pages/Auth/Auth";
import React, {useEffect, useState} from "react";
import {Main as Home} from "@/pages/Main/Main";
import { Friends } from "@/pages/Friends/Friends";
import { Tasks } from "@/pages/Tasks/Tasks";
import { Settings } from "@/pages/Settings/Settings";

export const RouterView = React.memo(() => {
    const location = useLocation();

    const [displayLocation, setDisplayLocation] = useState(location);
    const [transitionStage, setTransitionStage] = useState<'fade-in' | 'fade-out'>('fade-in');

    useEffect(() => {
        if (location !== displayLocation) setTransitionStage("fade-out");
    }, [location, displayLocation]);

    return (
        <div
            className={transitionStage}
            onAnimationEnd={() => {
                if (transitionStage === 'fade-out') {
                    setTransitionStage('fade-in')
                    setDisplayLocation(location)
                }
            }}
        >
            <Routes location={displayLocation}>
                <Route path={'/'} element={<Auth />} />
                <Route path={'/main'} element={<Home />} />
                <Route path={'/friends'} element={<Friends />} />
                <Route path={'/tasks'} element={<Tasks />} />
                <Route path={'/settings'} element={<Settings />} />
            </Routes>
        </div>
    )
})
