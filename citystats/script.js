/*
'Chennai': population = 4646732
           literacyRate = 90.20
           language = 'Tamil'
'Bengaluru':population = 8443675
            literacyRate = 88.71
            language = 'Kannada'
'Mumbai':population = 12442373
        literacyRate = 89.73
        language = 'Marathi'
'Delhi': population = 16787941
         literacyRate = 86.20
         language = 'Hindi'
The Indian city of Bengaluru has a population of 8443675. Language spoken is Kannada and literacy rate is 88.71%.
*/
const button=document.querySelector('button')
let resultdiv=document.createElement('div')
resultdiv.id='result'
document.getElementById('wrapper').appendChild(resultdiv)
button.addEventListener('click',displaystats)
function displaystats(){
    const input=document.querySelector('input[name="city"]:checked');
    if (!input) {
        document.getElementById('result').innerHTML = 'Please select a city first!';
        return;
    }
    const city=input.value
    let population, literacyRate, language;
    switch(city){
        case 'Bengaluru':
            population = 8443675
            literacyRate = 88.71
            language = 'Kannada'
            break
        case 'Chennai':
            population = 4646732
            literacyRate = 90.20
            language = 'Tamil'
            break
        case 'Mumbai':
            population = 12442373
            literacyRate = 89.73
            language = 'Marathi'
            break
        case 'Delhi':
            population = 16787941
            literacyRate = 86.20
            language = 'Hindi'
            break
    }
    let text = `The Indian city of ${city} has a population of ${population}. Language spoken is ${language} and literacy rate is ${literacyRate}%.`
    document.getElementById('result').innerHTML=text
}