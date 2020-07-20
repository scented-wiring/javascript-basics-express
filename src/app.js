const express = require('express');

const { sayHello, uppercase, lowercase, firstCharacter, firstCharacters } = require('./lib/strings');
const { add, subtract, multiply, divide, remainder } = require('./lib/numbers');
const { negate, truthiness, isOdd, startsWith } = require('./lib/booleans');
const { getNthElement, arrayToCSVString, addToArray2, elementsStartingWithAVowel, removeNthElement2 } = require('./lib/arrays');

const app = express();

app.use(express.json());

// strings

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

//numbers

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

//booleans

app.post('/booleans/negate', (req, res) => {
  res.json({ result: (negate(req.body.value)) });
})

app.post('/booleans/truthiness', (req, res) => {
  res.json({ result: (truthiness(req.body.value)) });
})

app.get('/booleans/is-odd/:number', (req, res) => {
  const number = parseInt(req.params.number);
  if (!number) {
    res.status(400).json({ error: 'Parameter must be a number.' });
  }
  res.json({ result: (isOdd(number)) });
})

app.get('/booleans/:string/starts-with/:character', (req, res) => {
  if(req.params.character.length > 1) {
    res.status(400).json({ error: 'Parameter "character" must be a single character.' });
  }
  res.json({ result: (startsWith(req.params.character, req.params.string)) });
})

//arrays

app.post('/arrays/element-at-index/:index', (req, res) => {
  res.json({ result: getNthElement(req.params.index, req.body.array) });
})

app.post('/arrays/to-string', (req, res) => {
  res.json({ result: arrayToCSVString(req.body.array) });
})

app.post('/arrays/append', (req, res) => {
  res.json({ result: addToArray2(req.body.value, req.body.array) });
})

app.post('/arrays/starts-with-vowel', (req, res) => {
  res.json({ result: elementsStartingWithAVowel(req.body.array) });
})

app.post('/arrays/remove-element', (req, res) => {
  if (!req.query.index) {
    req.query.index = 0;
  }
  res.json({ result: removeNthElement2(req.query.index, req.body.array) })
})

module.exports = app;