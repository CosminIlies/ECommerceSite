import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { ProductIntf } from "..";
import style from '../../styles/DedicatedProduct.module.css'

export const getServerSideProps:GetServerSideProps = async (context) =>{

    context.res.setHeader('Cache-Control','s-maxage=20, stale-while-revalidate');

    let paramsStr = '?';
    let allready_something = false;

    const keys = Object.keys(context.query);
    const values = Object.values(context.query);

    console.log(keys);

    for(let i = 0; i < keys.length; i++){

        if( allready_something )
            paramsStr += "&";

        paramsStr += keys[i] + '='+ values[i] +'';
        allready_something = true;
    }

    console.log(paramsStr);



    const res = await fetch(`http://localhost:3000/api/products${paramsStr}`, { method : "POST" });
    // const data:ProductIntf[] = await res.json();

    const data = await res.json();


    return{
        props: {
            products: data
        }
    };
}

export default function ViewProductByName({ products }:InferGetServerSidePropsType<typeof getServerSideProps>){
    if(products.length === 0){
        return <p>No Product Found:(</p>; //TODO: redirect to 404
    }


    const product = products[0];

    const stars = [false, false, false, false, false];

    for(let i = 0; i < 5; i++){
        stars[i] = i < Math.floor(product.reviewStars);
    }

    return(
        <div className={style.productPageContent}>

            <h1>{product.name}</h1>

            <div className={style.productPresentation}>

                <div className={style.leftSide}>
                    <p> Category: {product.category}</p>
                    <img src={product.imageLink} className={style.productImage} />
                </div>

                <div className={style.rightSide}>
                    
                    <div>

                        <div className={style.stars}>
                            <h1>{product.price + " Lei"}</h1>
                            {stars.map( val => <img className={style.star} src={val ? "/png/star.png" : "/png/unstar.png"} alt="" />)}
                        </div>

                    </div>


                    <p>{product.description}</p>
                    <div>
                        <button className={style.adaugaLaFavorite}><img className={style.star} src="/png/love.png" alt="" />Adauga la Favorite</button>
                        <button className={style.adaugaInCos}><img className={style.star} src="/png/cart.png" alt="" />Adauga in Cos</button>

                    </div>
                </div>
            </div>

            

        </div>
        
    );
}