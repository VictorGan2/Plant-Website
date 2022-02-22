import express from 'express';
import data from './data.js';
import mongoose from 'mongoose';
import Product from '../models/product.js';





//express app
const app = express();

// connect to mongodb
const dbURI = 'mongodb+srv://newphoenix:phoenixplant1357@plantwebsite.412az.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
mongoose.connect(dbURI)
.then((result) => console.log('connected to db'))
.catch((err) => console.log(err));

//routing
app.get('/api/products', (req, res) =>{
    res.send(data.products);
})

app.get('/', (req, res) => {
    res.send('Server is ready');
});

app.get('/add-products', (req, res) => {
    const product = new Product({
        title: 'new plant',
        description: 'asdf'
    });

    product.save()
    .then((result) => {
        res.send(result)
    })
    .catch((err) => {
        console.log(err);
    });
});

app.get('/all-products', (req, res) => {
    Product.find()
    .then((result) => {
        res.send(result);
    })
});

const port = process.env.PORT || 5000;
app.listen(port, () =>{
    console.log(`Serve at http://localhost:${port}`);
});