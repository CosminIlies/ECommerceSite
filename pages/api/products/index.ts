import { NextApiRequest, NextApiResponse } from "next";
import { Database } from "sqlite3";

export default async function getAllProducts(req: NextApiRequest, res: NextApiResponse){
    const db = new Database('./database.sqlite');

    let paramsStr = 'WHERE ';
    let allready_something = false;
    console.log(req.query);

    const keys = Object.keys(req.query);
    const values = Object.values(req.query);

    console.log(keys);

    for(let i = 0; i < keys.length; i++){

        if( allready_something )
            paramsStr += " and ";

        paramsStr += keys[i] + ' = "'+ values[i] +'"';
        allready_something = true;
    }

    console.log(paramsStr);


    // if(req.query.id !== undefined){
    //     paramsStr += ' id = '+ req.query.id;
    //     allready_something = true;
    // }

    // if(req.query.category !== undefined){
    //     if( allready_something ){
    //         paramsStr += " and";
    //     }
    //     paramsStr += ' category = "'+ req.query.category+'"';
    //     allready_something = true;
    // }

    // if(req.query.name !== undefined){
    //     if( allready_something ){
    //         paramsStr += " and";
    //     }
    //     paramsStr += ' name = "'+ req.query.name+'"';
    //     allready_something = true;
    // } 

    db.all(
        `SELECT * FROM product JOIN ComputersAndLaptopsToProduct ON product.id = ComputersAndLaptopsToProduct.productID JOIN ComputersAndLaptopsParams ON ComputersAndLaptopsToProduct.paramsID = ComputersAndLaptopsParams.id  ${allready_something ? paramsStr : ''}` ,
        async (_, product) => {
            console.log(product);
            await res.status(200).json(product);
        }
    );

}