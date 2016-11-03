const express = require('express');
const confessions = require('./confessions.js');
const app = express();

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

var id = 1;
const getId = () => {
	return id++;
};

confessions.forEach(confession => {
	confession.confessionId = getId();
	confession.comments.forEach(comment => {
		comment.commentId = getId();
	})
})

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
		mutation(confession);
		console.log(confession);

		response.sendStatus(200);
	}
}

const mutateConfessions = (mutation) => (request, response) => {
	if (request.params.confession) {
		confessions = confessions.map(x => x.confessionId !== +request.params.confession);
	} else {
		var content = request.body;

		var confession = {
			confessionId: getId,
			content: confession,
			score: 0,
			comments: []
		};

		confessions.push(confession);

		console.log(confession);
	}

	response.sendStatus(200);
}

/*
confession: {
	confessionId: int
	content: string,
	score: int,
	commentsCount: int
}

comment: {
	commentId: int,
	content: string,
	score: int
}
*/

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

app.put("/confessions", mutateConfessions());
app.delete("/confessions/:confession", mutateConfessions());

app.get("/confessions/:confession", projectConfession(x => x));
app.get("/confessions/:confession/comments", projectConfession(x => x.comments));

app.put("/confessions/:confession/score", mutateConfesssion(x => { x.score++; }));
app.delete("/confessions/:confession/score", mutateConfesssion(x => { x.score--; }));

app.listen(3001, () => {
	console.log("iConfessional listening on 3001");
});