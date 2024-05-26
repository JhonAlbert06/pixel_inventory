const controller = {};

controller.getProducts = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM Product', (err, product) => {
            if (err) {
                res.json(err);
            }
            console.log(product);
            res.render('products',{data: product});
        });
    });
};

module.exports = controller;