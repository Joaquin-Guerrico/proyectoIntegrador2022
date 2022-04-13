const controlador= {
    detail : (req,res)=>{
        res.render("product")
    },
    edit : (req,res)=>{
        res.render("product-edit")
    },
    add : (req,res)=>{
        res.render("product-add")
    }
};

module.exports = controlador;