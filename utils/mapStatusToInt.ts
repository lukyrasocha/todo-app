import connection from '../connection';

export async function mapStatusToInt(status:String): Promise<number>{
    return new Promise((resolve, reject) => {
        connection.query(`select S.id from status S where S.status = \'${status}\';`, (err,results) => {
            if (err) {
                return reject(err)
            }
            return resolve(results[0].id)
        })
    })
}
