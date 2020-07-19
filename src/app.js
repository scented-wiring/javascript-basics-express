const express = require('express');
const { sayHello } = require('./lib/strings');
const { uppercase } = require('./lib/strings');
const { lowercase } = require('./lib/strings');
const { firstCharacter } = require('./lib/strings');
const { firstCharacters } = require('./lib/strings');
const { add } = require('./lib/numbers');
const { subtract } = require('./lib/numbers');

const app = express();

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



module.exports = app;