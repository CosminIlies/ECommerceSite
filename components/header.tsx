import style from '../styles/Navigation.module.css'

export default function Header (){
    return(<>
    
        <div className={style.nav}>
            <div className={style.logo}>
                <h1 className={style.logoText}><a href="/">LOGO!</a></h1>
            </div>
            
            <div className={style.searchbar}>
                <form action="">

                    <input type="text"/>
                    <button>
                        <img src="/png/search.png" alt="" />
                    </button>
                    

                </form>


            </div>

            <div className={style.favorite}>
                <img src="/png/love.png" />
            </div>
            
            <div className={style.cart}>
                <img src="/png/cart.png" />
                {/* <p>16</p> */}
            </div>

            <div className={style.account}>
                <img src="/png/user.png" />
                <img src="/png/next.png" className={style.arrow}/>
            </div>
        </div>
    
        <div className={style.separator}>
            <button>Produse</button>
            <button>Categori</button>
            <button>Oferte %</button>
            <button>Tranding</button>
        </div>
    </>
    );

};