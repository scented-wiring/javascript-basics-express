const express = require('express');
const { sayHello } = require('./lib/strings');
const { uppercase } = require('./lib/strings');
const { lowercase } = require('./lib/strings');
const { firstCharacter } = require('./lib/strings');
const { firstCharacters } = require('./lib/strings');
const { add } = require('./lib/numbers');
const { subtract } = require('./lib/numbers');
const { multiply } = require('./lib/numbers');
const { divide } = require('./lib/numbers');
const { remainder } = require('./lib/numbers');

const app = express();

app.use(express.json());

app.get('/strings/hello/:string', (req, res) => {
  res.json({ result: sayHello(req.params.string) });
});

app.get('/strings/upper/:string', (req, res) => {
  res.json({ result: uppercase(req.params.string) });
});

app.get('/strings/lower/:string', (req, res) => {
  res.json({ result: lowercase(req.params.string) });
});

app.get('/strings/first-characters/:string', (req, res) => {
  return req.query.length
  ? res.json({ result: firstCharacters(req.params.string, req.query.length) })
  : res.json({ result: firstCharacter(req.params.string) });
});

app.get('/numbers/add/:a/and/:b', (req, res) => {
  const a =parseInt(req.params.a, 10);
  const b =parseInt(req.params.b, 10);

  return Number.isNaN(a) || Number.isNaN(b)
  ? res.status(400).json( { error: 'Parameters must be valid numbers.' } )
  : res.json({ result: add(a, b) });
});

app.get('/numbers/subtract/:a/from/:b', (req, res) => {
  const a =parseInt(req.params.a, 10);
  const b =parseInt(req.params.b, 10);

  return Number.isNaN(a) || Number.isNaN(b)
  ? res.status(400).json({ error: 'Parameters must be valid numbers.' })
  :res.json({ result: subtract(b, a) });
});

app.post('/numbers/multiply', (req, res) => {
  if (!req.body.b) {
    res.status(400).json({ error: 'Parameters "a" and "b" are required.' });
  } else if (Number.isNaN(parseInt(req.body.a))) {
    res.status(400).json({ error: 'Parameters "a" and "b" must be valid numbers.' });
  } else {
    res.status(200).json({ result: multiply(req.body.a, req.body.b) });
  }
}) 

app.post('/numbers/divide', (req, res) => {
  if (req.body.b === 0) {
    res.status(400).json({ error: 'Unable to divide by 0.' });
  } else if (!req.body.b){
    res.status(400).json({ error: 'Parameters "a" and "b" are required.' });
  } else if (Number.isNaN(parseInt(req.body.a))) {
    res.status(400).json({ error: 'Parameters "a" and "b" must be valid numbers.' });
  } else {
    res.json({ result: divide(req.body.a, req.body.b)});
  }
})

app.post('/numbers/remainder', (req, res) => {
  if (req.body.b === 0) {
    res.status(400).json({ error: 'Unable to divide by 0.' });
  } else if (!req.body.b){
    res.status(400).json({ error: 'Parameters "a" and "b" are required.' });
  } else if (Number.isNaN(parseInt(req.body.a))) {
    res.status(400).json({ error: 'Parameters must be valid numbers.' });
  } else {
    res.json({ result: remainder(req.body.a, req.body.b)});
  }
})



module.exports = app;