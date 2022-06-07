const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors())

let minerals = {
    'diamond': {
        'name': 'diamond',
        'hardness': 10,
        'formula': 'C',
        
    },
    'corundum':{
        'name': 'corundum',
        'hardness': 10,
        'formula': 'Al2O3',
        
    },
    'unknown':{
        'name': 'unknown',
        'hardness':'unknown',
        'formula': 'unknown',
        
    }
}

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:name', (request, response) => {
    const mineral = request.params.name.toLowerCase()
    if(minerals[mineral]){
        response.json(minerals[mineral])
    }else{
        response.json(minerals['unknown'])
    }
})

app.listen(process.env.PORT || PORT, () => {
    console.log(`Server running on port ${PORT}`)
})