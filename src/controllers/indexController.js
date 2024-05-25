const controller = {}

controller.getIndex = (req, res) => {
    res.render('index');
}

module.exports = controller;