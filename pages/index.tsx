import Filters from "../components/Filters/filters";
import OrderBar from "../components/ordering_bar";
import Product from "../components/ProductCard/product";
import style from '../styles/Home.module.css';
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { TSMap } from "typescript-map";
import { useState } from "react";

export interface ProductIntf{
    id:number,
    name:string,
    category:string,
    imageLink:string,
    description:string,
    reviewStars:number,//float
    price:number,//float
    stock:number,
}

export interface FilterInf{
    name:string,
    body:string[]
}

export const getServerSideProps:GetServerSideProps = async (context) =>{

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

    const res = await fetch('http://localhost:3000/api/products'+paramsStr, { method : "POST" });
    const data:ProductIntf[] = await res.json();

    let categories = new TSMap<string, string[]>();

    for(let i = 0; i<data.length; i++){
        const el = data[i];

        const categoryRes = await fetch(`http://localhost:3000/api/category/${el.category}?productID=${el.id}`, { method : "POST" });
        const categoryData = await categoryRes.json();

        const keys = Object.keys(categoryData);
        const values = Object.values(categoryData);

        for(let i = 0; i < keys.length;i++ ){
            if (!categories.has(keys[i])){
                categories.set(keys[i], []);
            }

            if(!categories.get(keys[i])?.find(element => element === values[i] as string)){

                categories.get(keys[i])?.push(values[i] as string);
            }
        }

    }

    return{
        props: {
            products: data,
            categories: categories.toJSON()
        }
    };

}

export default function Home ( { products, categories }: InferGetServerSidePropsType<typeof getServerSideProps> ) {

    const [filtersAdded, setFiltersAdded] = useState<FilterInf[]>([] as FilterInf[]);

    const prods:ProductIntf[] = products;


    return(
        <div className={style.page}>
            <p>filtersAdded</p>
            <Filters {...categories} setFunction={setFiltersAdded}/>
            <div className={style.content}>

                <OrderBar/>
                <div className={style.products_area}>
                    {
                        prods.map( (product:ProductIntf) => {
                            return (
                            <Product {...product}/>
                        )})
                    }
                    
                </div>

            </div>
        </div>
    );
};