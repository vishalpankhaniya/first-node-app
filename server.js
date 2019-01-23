var exp = require('express');
var mongoose = require('mongoose');
var userController = require('./controllers/user.controller');
var postController = require('./controllers/post.controller');
var productController = require('./controllers/product.controller');
var cors = require('cors');
var bodyParser = require('body-parser');



var app = exp();

mongoose.connect('mongodb://localhost:27017/employee', {useNewUrlParser: true})
.then(() => console.log("Connected"))
.catch(err => console.log(err));



app.use(cors())



app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());


//Define All Routes to controller

app.post('/user',userController.addUser);
app.delete('/user/',userController.deleteUser);
app.put('/user',userController.updateUser);
app.get('/user/:id',userController.getUserById);
app.get('/user',userController.getUsers);

app.post('/post',postController.addPost);
app.delete('/post',postController.deletePost);
app.put('/post',postController.updatePost);
app.get('/post/:id',postController.getPostById);
app.get('/post',postController.getPosts);

//router for product controller

app.post('/product',productController.addProduct);
app.put('/product/:id',productController.updateProduct);
app.delete('/product/:id',productController.deleteProduct);
app.get('/product/:id',productController.getProductById);
app.get('/product',productController.getProducts);


app.listen(7010);