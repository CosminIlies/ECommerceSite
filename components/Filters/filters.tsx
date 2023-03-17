import Filter from "./filter";
import RemoveFilters from "./remove_filters";

import style from "../../styles/Filters.module.css";
import { FilterInf } from "../../pages";
import { useEffect } from "react";

type SetPropsType = {
    setFunction:React.Dispatch<React.SetStateAction<FilterInf[]>>
}



export default function Filters(categories:JSON, {setFunction}:SetPropsType){
    const keys = Object.keys(categories);
    const values = Object.values(categories);
    let filters:FilterInf[] = [];

    const data = [
        {name:"brand", body:["Lenovo"]}
    ]
    useEffect(()=>{
        setFunction(data);
    },[data]);



    for(let i = 1; i < keys.length; i++){

        const filter:FilterInf = {name: keys[i], body:values[i]};

        filters.push(filter);
    }

    return(
        <div className={style.filters}>
            <RemoveFilters/>
            {filters.map(filter => <Filter {...filter}/>)}
        </div>

    );
    
}