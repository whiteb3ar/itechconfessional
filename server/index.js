const express = require('express');
const confessions = require('./confessions.js');
const app = express();

const rawBody = (req, res, next) => {
	req.setEncoding("utf8");
	req.rawBody = '';
	req.on('data', (chunk) => {
		req.rawBody += chunk;
	});
	req.on('end', () => {
		next();
	})
}

app.use(rawBody);

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  next();
});

var id = 100500;
const getId = () => {
	return id++;
}

const projectConfession = (projection) => (request, response) => {
	var confession = confessions.find(x => x.confessionId === +request.params.confession);

	if (!confession) {
		response.sendStatus(404);
	} else {
		console.log(confession);
		response.json(projection(confession));
	}
}

const mutateConfesssion = (mutation) => (request, response) => {
	var confession = confessions.find(x => x.confessionId === +request.params.confession);

	if (!confession) {
		response.sendStatus(404);
	} else {
		console.log('request' + request.rawBody);
		
		mutation(confession, request.rawBody);

		console.log(confession);

		response.json(confession);
	}
}

const mutateConfessions = (mutation) => (request, response) => {
	if (request.params.confession) {
		confessions = confessions.filter(x => x.confessionId !== +request.params.confession);
		response.sendStatus(200);
	} else {
		var content = request.rawBody;

		console.log('request' + request.rawBody);

		var confession = {
			confessionId: getId(),
			content: content,
			score: 0,
			comments: [],
			commentsCount: 0
		};

		confessions.push(confession);

		console.log(confession);
		response.json(confession);
	}
}

app.get("/confessions", (request, response) => {
	const projected = confessions.map(x => {
		const confession = Object.assign({}, x, {
			commentsCount: x.comments.length,
			comments: []
		});
		
		return confession;
	});

	response.json(projected);
});

app.post("/confessions", mutateConfessions());
app.delete("/confessions/:confession", mutateConfessions());

app.get("/confessions/:confession", projectConfession(x => x));
app.get("/confessions/:confession/comments", projectConfession(x => x.comments));
app.put("/confessions/:confession/comments", mutateConfesssion((x, rawBody) => { 
	x.comments.push({
		content: rawBody,
		score: 0
	});

	x.commentsCount = x.comments.length;
}));

app.post("/confessions/:confession/score", mutateConfesssion(x => { x.score++; }));
app.delete("/confessions/:confession/score", mutateConfesssion(x => { x.score--; }));

app.listen(3001, () => {
	console.log("iConfessional listening on 3001");
});