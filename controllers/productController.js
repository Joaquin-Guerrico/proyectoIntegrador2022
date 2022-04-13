const controlador= {
    detail : (req,res)=>{
        res.render("product")
    },
    edit : (req,res)=>{
        res.render("product-edit")
    }
};

module.exports = controlador;