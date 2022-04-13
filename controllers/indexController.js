let controlador = {
    index : function(req, res) {
        res.render('index', { title: 'Express' });
      },
    search : function(req, res) {
        res.render("search-results");
      },   
}
module.exports = controlador