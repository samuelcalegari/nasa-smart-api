'use strict';

const request = require("request-promise");

const ApiKey = null;

/**
 * NasaSmartAPI
 *
 * @constructor
 * @param {Object} options {}
 */
function NasaSmartAPI (options) {

   this.ApiKey = options.key;
}

/**
 *
 * @param {Object} options {}
 */
NasaSmartAPI.prototype.searchImage = async function(options){

    const {query} = options;
    const results =  [];
    let response = null;

    let data = {
        'q': query
    };

   try {
       response = await request({
           url: 'https://images-api.nasa.gov/search',
           qs: data,
           useQuerystring: true,
           json: true
       });
   } catch(e) {
       throw new Error(e);
   }

   await processItems(response.collection.items,results);

   return results;
}

async function processItems(items,results) {

    const promises = items.map(item => getCollection(item,results));
    await Promise.all(promises);
}

async function getCollection(item,results) {

    let collection;

    try {
        collection = await request({
            url: item.href,
            json: true
        });
    } catch(e) {
        throw new Error(e);
    }

    let Object = {
        "id" : item.data[0].nasa_id,
        "title" : item.data[0].title,
        "photographer" : item.data[0].photographer,
        "description" : item.data[0].description,
        "keywords" : item.data[0].keywords.join(', '),
        "location" : item.data[0].location,
        "date" : item.data[0].date_created,
        "collection" : collection,
        "getImgUrl" : (format = 'orig') => {
            return collection.find(e => e.includes('~' + format))
        }
    };

    results.push(Object)
}

module.exports = NasaSmartAPI;

