import FilterOption from "./filter_option";
import style from "../../styles/Filters.module.css"
import { FilterInf } from "../../pages";
import { useState } from "react";

export interface filterOptionInf{
    name:string,
    option:string
}

export default function Filter(filter:FilterInf){
    const [is_colapsed, set_is_colapsed] = useState(false);

    if(is_colapsed){
        return(
            <div className={style.filter}>
                <div className={style.title}>
                    <h2>{filter.name}</h2>
                    <button onClick={()=>{set_is_colapsed(!is_colapsed)}}><img src="/png/next.png" alt="" /></button>
                </div>

            </div>
        );
    }else{
        return(
            <div className={style.filter}>
                <div className={style.title}>
                    <h2>{filter.name}</h2>
                    <button onClick={()=>{set_is_colapsed(!is_colapsed)}}><img src="/png/next.png" alt="" /></button>
                </div>

                {filter.body.map(option => <FilterOption { ...{name:filter.name , option:option}}/>)}
                
            </div>
        );
    }

}