import { NextApiRequest, NextApiResponse } from "next";
import { Database } from "sqlite3";

export default async function getAllProducts(req: NextApiRequest, res: NextApiResponse){
    const db = new Database('./database.sqlite');

    let paramsId = 0;

     db.get(
        `SELECT * FROM ${req.query.category}ToProduct WHERE productID = ${req.query.productID} `,
        async (_, category) => {
            paramsId = await category.paramsID;

            db.get(
                `SELECT * FROM ${req.query.category}Params WHERE id = ${paramsId}`,
        
                async(_, category)=>{
                    await res.status(200).json(category);
                }
            )
            
        }
    );
;


}