import React from "react";
import { useState } from "react";

interface AppStateValue{
    username: string;
    shoppingCart: { items: {id: number,name: string}[] };
}

interface AppStateValueChildren{
    children: React.ReactNode;
}

const defaultContextValue : AppStateValue = {
    username: "阿萊克斯",
    shoppingCart: { items: [] }
}

export const appContext = React.createContext(defaultContextValue);

// 因為要初始化的是一個函數，所以可以用undefined作為初始化值
// React.Dispatch<React.SetStateAction<AppStateValue>>是setState的類型，可以將滑鼠移到setState的提示複製
// 因為初始化值是undefined，所以也要加上undefined的類型聲明
export const appSetStateContext = React.createContext<React.Dispatch<React.SetStateAction<AppStateValue>> | undefined>(undefined);

export const AppStateProvider: React.FC<AppStateValueChildren> = (props) => {
    const [state, setState] = useState(defaultContextValue);

    return (
        <appContext.Provider value={state}>
            <appSetStateContext.Provider value={setState}>
                {props.children}
            </appSetStateContext.Provider>
        </appContext.Provider>
    )
}