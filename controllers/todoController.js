const bodyParser = require('body-parser')
const mongoose = require('mongoose');
const { stringify } = require('querystring');

mongoose.connect('mongodb+srv://todoUser:todoUser@todo.zajtl.mongodb.net/todo?retryWrites=true&w=majority', {useNewUrlParser: true});

let todoSchema = new mongoose.Schema({
    item: String
});

let Todo = mongoose.model('Todo', todoSchema);

// let item1 = Todo({item: 'buy Flowers'}).save((err)=>{
//     if(err) throw err;
//     console.log("Item saved");
// })


//let data = [{item: 'get milk'},{item: 'walk dog'},{item: 'kick some coding'}];
const urlEncodedParser = bodyParser.urlencoded({extended: false});


module.exports = (app) =>{

    app.get('/todo',(req, res)=>{
        Todo.find({},(err,data)=>{
            if(err) throw err;
            res.render('todo',{todos: data});
        })
        

    });

    app.post('/todo', urlEncodedParser,(req, res)=>{
        let newTodo = Todo(req.body).save((err,data)=>{
            if(err) throw err;
            res.json({todos:data});
        })
        //data.push(req.body);
        
    });

    app.delete('/todo/:item',(req, res)=>{

        Todo.find({item: req.params.item.replace(/\-/g, " ")}).remove((err, data)=>{
            if(err) throw err;
            res.json({todos:data});
        })

        // data = data.filter((todo)=>{
        //     return todo.item.replace(/ /g, '-') !== req.params.item;
        // })

        
    });

}