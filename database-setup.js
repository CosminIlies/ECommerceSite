const sqlite = require('sqlite');
const sqlite3 = require('sqlite3');
const {open} = require('sqlite');

sqlite3.verbose()

async function openDb(){
    return await open({filename: './database.sqlite', driver: sqlite3.Database})
}

async function setup(){

    const db = await openDb();
    await db.migrate({force:'last'});

    const products = await db.all('SELECT * FROM product')
    console.log('ALL PRODUCTS', JSON.stringify(products, null, 2));

}

setup();