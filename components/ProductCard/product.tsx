import style from '../../styles/Product.module.css'
import { ProductIntf } from '../../pages';





export default function Product(productData:ProductIntf){

    const stars = [false, false, false, false, false];

    for(let i = 0; i < 5; i++){
        stars[i] = i < Math.floor(productData.reviewStars);
    }

    return(
        <div className={style.product}>
            <a href={'/product?name='+productData.name}>
            <img className={style.productImg} src={productData.imageLink} alt="" />
            <p>{productData.name}</p>
            </a>

            <div className={style.stars}>
                {stars.map( val => <img className={style.star} src={val ? "/png/star.png" : "/png/unstar.png"} alt="" />)}
            </div>

            <p className={style.price}> {productData.price + " Lei"}</p>
            <button><img className={style.star} src="/png/cart.png" alt="" />Adauga in Cos</button>
        </div>
    );
}
