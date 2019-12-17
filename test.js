const NasaSmartAPI = require("./")

const n = new NasaSmartAPI({key :'dDgtANyo4HGKNbBI1LgPLN5fvzZ2UERCffeu4nHR'});

const search =  n.searchImage({'query': 'mars'})
    .then((items)=>{
        items.forEach(item => {
            console.log(item.title);
            console.log(item.getImgUrl());
        });
    })
    .catch((e)=> {
        console.log(e);
    })