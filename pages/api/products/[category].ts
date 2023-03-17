import { NextApiRequest, NextApiResponse } from "next";
import { Database } from "sqlite3";

export default async function getProductsByCategory(req: NextApiRequest, res: NextApiResponse){




    const db = new Database('./database.sqlite');

    if(Number.isNaN(Number(req.query.category))){
        db.all(
            'SELECT * FROM product WHERE category = ?',
            [req.query.category], 
            (_, product) => {
                res.json(product);
            }
        );
    }else{
        db.all(
            'SELECT * FROM product WHERE id = ?',
            [req.query.category], 
            (_, product) => {
                res.json(product);
            }
        );
    }

    

}