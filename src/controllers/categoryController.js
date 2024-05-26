const controller = {};

controller.getCategories = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM Category', (err, data) => {
            if (err) {
                res.json(err);
            }
            res.render('categories',{data: data});
        });
    });
};

controller.save = (req, res) => {
    const data =  req.body;
    console.log(data);

    if (data.name == '') {
        console.log('error');
        res.redirect('/categories');
    }else{
    req.getConnection((err, conn) => {
        conn.query('INSERT INTO Category set ?', [data], (err, category) => {
            res.redirect('/categories');
        });
    });
}
};

controller.edit = (req, res) => {
    const { id } = req.params;
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM Category WHERE id = ?', [id], (err, category) => {
            console.log(category);
            res.render('categories_edit', {
                data: category[0]
            });
        });
    });
};

controller.update = (req, res) => {
    const { id } = req.params;
    const newCategory = req.body;

    req.getConnection((err, conn) => {

        conn.query('UPDATE Category set ? where id = ?', [newCategory, id], (err, rows) => {
            res.redirect('/categories');
        });
    });
};

controller.delete = (req, res) => {
    const { id } = req.params;
    req.getConnection((err, conn) => {
        conn.query('DELETE FROM Category WHERE id = ?', [id], (err, rows) => {
            res.redirect('/categories');
        });
    });
};

module.exports = controller;