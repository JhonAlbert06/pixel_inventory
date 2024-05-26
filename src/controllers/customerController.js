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

controller.save = (req, res) => {
    const data = req.body;
    req.getConnection((err, conn) => {
        conn.query('INSERT INTO Customer set ?', [data], (err, customer) => {
            console.log(customer);
            res.redirect('/customers');
        });
    });
};

controller.edit = (req, res) => {
    const { id } = req.params;
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM Customer WHERE id = ?', [id], (err, customer) => {
            res.render('customer_edit', {
                data: customer[0]
            });
        });
    });
};

controller.update = (req, res) => {
    const { id } = req.params;
    const newCustomer = req.body;
    req.getConnection((err, conn) => {
        conn.query('UPDATE Customer set ? where id = ?', [newCustomer, id], (err, rows) => {
            res.redirect('/customers');
        });
    });
};

controller.delete = (req, res) => {
    const { id } = req.params;
    req.getConnection((err, connection) => {
        connection.query('DELETE FROM Customer WHERE id = ?', [id], (err, rows) => {
            res.redirect('/customers');
        });
    });
};

module.exports = controller;