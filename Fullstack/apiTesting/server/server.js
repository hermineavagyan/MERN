const axios = require('axios');
const express = require('express');
const app = express();

const cors = require('cors');
app.use(express.json())
app.use(express.urlencoded({ extended: true }))


app.use(cors({
    origin: "http://localhost:3000"
}))

const getCitiesData  = async() => {
    const config = {
        method: 'get',
        baseURL:'https://wft-geo-db.p.rapidapi.com/v1/geo/countries',
        headers: {
            'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com',
            'X-RapidAPI-Key': '82b0959f6emsh5ef9c398b4a167ep1376a4jsnd8d687106191'
          }
    }
    try {
        const response  = await axios(config);
        return response.data.data
    }
    catch(error){}
}

app.get('/list', async (req,res)=>{
    const getList = await getCitiesData();
    console.log(getList)
    res.send(getList)
})

app.listen(8000, () => console.log('Running on localhost 8000'));