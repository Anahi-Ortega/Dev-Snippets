import express from 'express';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true}));

//middleware function
app.use(async(req, res, next) => {
    //res.set('Cache-control'.'private, max-age=5');
    if (req.headers&& req.headers.authorization){
        // let payload = verify(req.headers.authorization);
        // re.locals.payload = payload;
        // console.log(JSON.stringfy(res.locals.payload));
    }
    console.log("----Request data below----");
    console.log("Request method >>", req.method);
    console.log("Path >>", JSON.stringify(req.path));
    console.log("Body Data >>", JSON.stringify(req.body));
    console.log("Query Data >>", JSON.stringify(req.query));

    next();
});

app.get('/', async function (req,res){
    res.json("Hellow World!");
});

app.listen(3000, () => {
    console.log('Your server is running on port 3000');
});
