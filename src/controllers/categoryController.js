const controller = {};

controller.getCategories = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM Category', (err, categories) => {
            if (err) {
                res.json(err);
            }
            console.log(categories);
            res.render('categories',{data: categories});
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
            console.log(category);
            res.redirect('/categories');
        });
    });
}
};

module.exports = controller;