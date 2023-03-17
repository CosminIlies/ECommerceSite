import { NextApiRequest, NextApiResponse } from "next";
import { Database } from "sqlite3";

export default async function getAccountById(req: NextApiRequest, res: NextApiResponse){
    const db = new Database('./database.sqlite');

    db.get(
        'SELECT * FROM account WHERE id = ?',
        [req.query.id],
        (_, account) => {
            res.json(account);
        }
    );


}