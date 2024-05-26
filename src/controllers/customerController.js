const controller = {};

controller.getCustomers = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM Customer', (err, data) => {
            if (err) {
                res.json(err);
            }
            console.log(data);
            res.render('customers',{data: data});
        });
    });
};

module.exports = controller;