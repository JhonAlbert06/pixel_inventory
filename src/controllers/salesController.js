const controller = {};

controller.getSales = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM Sale', (err, data) => {
            if (err) {
                res.json(err);
            }
            console.log(data);
            res.render('sales',{data: data});
        });
    });
};

module.exports = controller;