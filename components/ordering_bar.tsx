import style from '../styles/OrederBar.module.css'

export default function OrderBar(){
    return(
    
        <div className={style.orderBar}>
            <div className={style.orderDropDownContainer}>
                <p>Ordoneaza dupa:</p>
                <select name="" id="">
                    <option> Cele mai populare</option>
                    <option> Alfabetic</option>
                    <option> Pret crescator</option>
                    <option> Pret descrescator</option>
                    <option> Review-uri</option>
                </select>
            </div>
        </div>
        );
}