const controller = {};

controller.getSales = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM Sale', (err, data) => {
            if (err) {
                res.json(err);
            }
            console.log(data);
            
            conn.query('SELECT * FROM Customer', (err, customers) => {
                if (err) {
                    res.json(err);
                }
                console.log(customers);
                
                conn.query('SELECT * FROM Product', (err, products) => {
                    if (err) {
                        res.json(err);
                    }
                    console.log(products);
                    
                    res.render('sales', {
                        data: data,
                        customers: customers,
                        products: products
                    });
                });
            });
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