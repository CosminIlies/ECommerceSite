import { NextApiRequest, NextApiResponse } from "next";
import { Database } from "sqlite3";
import { json } from "stream/consumers";

export default async function allAccounts(req: NextApiRequest, res: NextApiResponse){


    const db = new Database('./database.sqlite');
    db.all(
        'SELECT * FROM account',
        (_, accounts)=>{
            res.json(accounts);
        }
    );


}