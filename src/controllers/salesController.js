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


controller.save = (req, res) => {
    const data = req.body;
    req.getConnection((err, conn) => {
        conn.query('INSERT INTO Sale set ?', [data], (err, customer) => {
            console.log(customer);
            res.redirect('/sales');
        });
    });
}

controller.edit = (req, res) => {
    const { id } = req.params;
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM Sale WHERE id = ?', [id], (err, rows) => {
            res.render('sales_edit', {
                data: rows[0]
            });
        });
    });
};

controller.update = (req, res) => {
    const { id } = req.params;
    const newCustomer = req.body;
    req.getConnection((err, conn) => {

        conn.query('UPDATE Sale set ? where id = ?', [newCustomer, id], (err, rows) => {
            res.redirect('/sales');
        });
    });
};

controller.delete = (req, res) => {
    const { id } = req.params;
    req.getConnection((err, connection) => {
        connection.query('DELETE FROM Sale WHERE id = ?', [id], (err, rows) => {
            res.redirect('/sales');
        });
    });
};

module.exports = controller;