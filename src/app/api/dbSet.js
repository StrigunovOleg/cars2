const fs = require('fs');

export default function updateData(newData) {

  // Write the updated data back to the file
   fs.writeFileSync('./data.json', JSON.stringify(newData));
}

