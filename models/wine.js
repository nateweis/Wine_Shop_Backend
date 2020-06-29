const db = require('../db/db_connection');


const getWineList = (req, res) => {
    db.any('SELECT * FROM alcohol LEFT OUTER JOIN second_price ON alcohol.secondPrice = second_price.firstPrice')
    .then((data)=> res.status(200).json(data))
    .catch((err)=>{ console.log(err); res.json({message:'something up onthe backend',err})})
}

const addWine = (req, res) => {  
    res.json({payload: req.file})
}




module.exports = {
    addWine,
    getWineList
}

