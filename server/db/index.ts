const { Pool } = require('pg')

const pool = new Pool()

export default function query (text: String, params: Array<any>, callback: (err: String, result: String) => any) {
    return pool.query(text, params, callback)
}