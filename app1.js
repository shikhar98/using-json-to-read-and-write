var express=require('express');
var app=express();
var fs=require('fs');
var bodyParser=require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.get('/',(req,res)=>{
	res.render('f.ejs')
});
app.post('/result',(req,res)=>{
	var comment1=req.body.comment
	var name1=req.body.name
	var scale1=req.body.sk
	console.log(comment1,name1,scale1)
	var data={
		name:name1,scale:scale1,comment:comment1,
	}
// 	var data = {
//     name: "Newbie Corp.",
//     order_count: 0,
//     address: "Po Box City",
// }
	var data1=JSON.stringify(data);
	console.log(data)
	console.log(data1)
	fs.writeFile('feedback.json',data1,(err)=>{
		if(err) throw err
			console.log(err)
	})
	fs.readFile('feedback.json',"utf8",(err,result)=>{
			console.log(result)
	})
	res.redirect('/');
})
app.listen(3000)