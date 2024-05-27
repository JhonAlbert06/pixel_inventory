const controller = {};

controller.getProducts = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM Product', (err, data) => {
            if (err) {
                res.json(err);
            }
            conn.query('SELECT * FROM Category', (err, categories) => {
                if (err) {
                    res.json(err);
                }
            res.render('products',{data: data, categories: categories});
            });
        });
    });
};

controller.save = (req, res) => {
    const data = req.body;

    req.getConnection((err, conn) => {
        conn.query('INSERT INTO Product set ?', [data], (err, category) => {
            res.redirect('/products');
        });
    });
};

controller.edit = (req, res) => {
    const { id } = req.params;
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM Product WHERE id = ?', [id], (err, rows) => {
            conn.query('SELECT * FROM Category', (err, categories) => {
                if (err) {
                    res.json(err);
                }
                res.render('products_edit', {
                    data: rows[0],
                    categories: categories
                });
        });
        });
    });
};

controller.update = (req, res) => {
    const { id } = req.params;
    const newProduct = req.body;
    req.getConnection((err, conn) => {
        conn.query('UPDATE Product set ? where id = ?', [newProduct, id], (err, rows) => {
            res.redirect('/products');
        });
    });
};  

controller.delete = (req, res) => {
    const { id } = req.params;
    req.getConnection((err, connection) => {
        connection.query('DELETE FROM Product WHERE id = ?', [id], (err, rows) => {
            res.redirect('/products');
        });
    });
};

controller.updateStock = (req, res) => {
    const { id } = req.params;
    const newStock = req.body;

    console.log(newStock)
    console.log(id)
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM Product WHERE id = ?', [id], (err, rows) => {
            const stock = parseInt(rows[0].quantity_in_stock, 10) + parseInt(newStock.quantity_in_stock, 10);
            conn.query('UPDATE Product set quantity_in_stock = ? where id = ?', [stock, id], (err, rows) => {
                res.redirect('/products');
            });
        });
    });
};

controller.editStock = (req, res) => {

    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM Product', (err, data) => {
            if (err) {
                res.json(err);
            }

            //console.log(data)
            res.render('increaseStock',{data: data});
        });
    });
};

module.exports = controller;