// require all dependencies
var express = require('express')
    , logger = require('morgan')
    , app = express()
    , template = require('pug').compileFile(__dirname + '/views/index.pug')

app.use(logger('dev'));
app.use(express.static(__dirname + '/static'));

// Different way
// set up the template engine
app.set('views', './views');
app.set('view engine', 'pug');


// My interpretation of the below two examples
app.get('/', function (req, res, next) {
    try {
        res.render('index', {
            title: 'Hey',
            header: 'Hello there!',
            section1: 'Part 1',
            section2: 'Part 2',
            section3: 'Part 3',
            section4: 'Part 4',
            section5: 'Part 5',
            section6: 'Part 6'
    });
    } catch (e) {
        next(e)
    }
});




// Advanced way of presenting home page, including error handling
// app.get('/', function (req, res, next) {
//     try {
//         var html = template({ title: 'Home' })
//         res.send(html)
//     } catch (e) {
//         next(e)
//     }
// })

// Default way of presenting home page
// app.get('/', function (req, res) {
//
//     // render the 'index' template, and pass in a few variables
//     res.render('index', { title: 'Hey', message: 'Hello there!' });
//
// });

app.listen(process.env.PORT || 3000, function () {
    console.log('Listening on http://localhost:' + (process.env.PORT || 3000))
})