const countries = require('./countries.json');

/** Get only the name of the country given his iso3 code.
 * For example: given the isoCode 'ARG'
 * The response should be: 'Argentina'
 * @param  {array} isoCode
 * @returns {array}
 */
function getCountryNameByIso3(isoCode){
    let ans="";
    for(let i=0;i<countries.length;i++){
        if(countries[i].iso3===isoCode){
            ans=countries[i].name;
        }
    }
    return ans;
}

/**
 * Get country summary given the ISO3 code. 
 * It has to be a new object containing only the following data:
 * {
 *  name: ,
 *  iso3: ,
 *  iso2: ,
 *  phone_code,
 *  capital: ,
 *  currency: ,
 *  tld: ,
 *  region: ,
 *  emoji: ,
 * }
 * @param  {string} isoCode
 * @returns {Object}
 */
function getCountrySummary(isoCode){
  let ans={};
  for(let i=0;i<countries.length;i++){
      if(countries[i].iso3===isoCode){
          ans={name:countries[i].name,
              iso3:countries[i].iso3,
              iso2:countries[i].iso2,
              phone_code:countries[i].phone_code,
              capital:countries[i].capital,
              currency:countries[i].currency,
              tld:countries[i].tld,
              region:countries[i].region,
              emoji:countries[i].emoji};
      }
  }
  return ans;
}

function main() {
    console.log(
        '///// Ejercicio 1 /////\n',
        getCountryNameByIso3('ARG'),
        '\n');
    console.log(
        '///// Ejercicio 2 /////\n',
        getCountrySummary('ARG'),
        '\n');

}

main();