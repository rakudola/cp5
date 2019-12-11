const express = require('express');
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

app.use(express.static('public'));

const mongoose = require('mongoose');

// connect to the database
mongoose.connect('mongodb://127.0.0.1:27017/prompts', {
  useNewUrlParser: true
});

// Create a scheme for nouns.
const nounSchema = new mongoose.Schema({
  title: String,
});

// Create a model for nouns.
const Noun = mongoose.model('Noun', nounSchema);


// Create a scheme for adjectives.
const adjSchema = new mongoose.Schema({
  title: String,
});

// Create a model for adjectives.
const Adj = mongoose.model('Adj', adjSchema);


// Create a scheme for verbs.
const verbSchema = new mongoose.Schema({
  title: String,
});

// Create a model for verbs.
const Verb = mongoose.model('Verb', verbSchema);


// Create a new noun
app.post('/api/nouns', async (req, res) => {
  const noun = new Noun({
    title: req.body.title,
  });
  try {
    await noun.save();
    res.send(noun);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

// Get a list of all of the nouns.
app.get('/api/nouns', async (req, res) => {
  try {
    let nouns = await Noun.find();
    res.send(nouns);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

// Delete a noun
app.delete('/api/nouns/:id', async(req, res) => {
  try {
      await Noun.deleteOne({
      _id: req.params.id
    });
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});


// Create a new adjective
app.post('/api/adjs', async (req, res) => {
  const adj = new Adj({
    title: req.body.title,
  });
  try {
    await adj.save();
    res.send(adj);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

// Get a list of all of the adjectives.
app.get('/api/adjs', async (req, res) => {
  try {
    let adjs = await Adj.find();
    res.send(adjs);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

// Delete an adjective
app.delete('/api/adjs/:id', async(req, res) => {
  try {
      await Adj.deleteOne({
      _id: req.params.id
    });
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});


// Create a new verb
app.post('/api/verbs', async (req, res) => {
  const verb = new Verb({
    title: req.body.title,
  });
  try {
    await verb.save();
    res.send(verb);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

// Get a list of all of the verbs.
app.get('/api/verbs', async (req, res) => {
  try {
    let verbs = await Verb.find();
    res.send(verbs);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

// Delete an adjective
app.delete('/api/verbs/:id', async(req, res) => {
  try {
      await Verb.deleteOne({
      _id: req.params.id
    });
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

/*app.put('/api/products/:id', async(req, res) => {
  const product = await Product.findOne({
    _id: req.params.id,
  });
  try {
    product.ordered = req.body.ordered;
    await product.save();
    res.send(product);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});*/

app.listen(4200, () => console.log('Server listening on port 4200!'));