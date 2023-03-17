import style from '../../styles/Filters.module.css'

export default function RemoveFilters(){

    return(
        <a href="/">
            <div className={style.remove_filters_title}>
                <h3>Sterge toate filtrele</h3>
                <img src="/png/close.png" alt="" />
            </div>
        </a>
    );

}