
const url='https://restcountries.com/v3.1/all';
let xhr=new XMLHttpRequest();
xhr.open('GET',url);
xhr.send();
xhr.onload=()=>{
    let data=JSON.parse(xhr.response);
    //Use the rest countries API url -> https://restcountries.eu/rest/v2/all and display all the country flags in console
    let flags=data.map((country)=>country.flag)
    console.log(flags);

    //Use the same rest countries and print all countries name, region, sub region and population
    let countryData=data.map((country)=>[country.name,country.region,country.subregion,country.population])
    console.log(countryData);
}


