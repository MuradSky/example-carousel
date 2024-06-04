import React from "react";
import {LoadingStyles} from "./LoadingStyles";

export const Loading: React.FC<{ color?: string }> = ({ color }) => {
    return <LoadingStyles color={color}/>
}