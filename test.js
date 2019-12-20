const NasaSmartAPI = require("./")

const n = new NasaSmartAPI({key :'dDgtANyo4HGKNbBI1LgPLN5fvzZ2UERCffeu4nHR'});

// Search an image in database
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

// Get picture of the day
const pic = n.getPictureOfTheDay({'date': '2019-12-19'}).then((imgurl)=>{
    console.log(imgurl);
})