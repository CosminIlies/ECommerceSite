import style from "../../styles/Filters.module.css"
import { filterOptionInf } from "./filter";


export default function FilterOption(filterOptions:filterOptionInf){

    return(
        <div className={style.filterOption}>
            <input type="checkbox" name="qwe" id=""/>
            <p>{filterOptions.option}</p>
        </div>

    );
} 