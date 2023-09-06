

export default function getData(index) {

  const data = require('./data.json')
  if (index === -2) {
    return data;
  }
  if (index === -1) {
     const newData = [];
     for (let i = 0; i < data.length; i++) {
      
      newData.push({
        "brand": data[i].brand,
        "name": data[i].name,
        "details": data[i].details,
        "priceMarket": data[i].priceMarket,
        "priceOur": data[i].priceOur
      })
     }
     return newData;
  }


  return data[index];
  
    
}