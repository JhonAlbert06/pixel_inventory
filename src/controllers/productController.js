const controller = {};

controller.getProducts = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM Product', (err, data) => {
            if (err) {
                res.json(err);
            }
            console.log(data);
            res.render('products',{data: data});
        });
    });
};

module.exports = controller;