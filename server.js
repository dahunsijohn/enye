const express = require('express');

const app = express();



app.get('/', (req, res) => res.send('API Running'));

app.get('/api/rates', (req, res)=>{
 res.json({
  "results": {
   "base": "CZK",
   "date": (new Date()).toLocaleDateString(),
   "rates": {
            "EUR": 0.0377244605,
            "GBP": 0.033795458,
            "USD": 0.044824204

   } 
  }
 });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));