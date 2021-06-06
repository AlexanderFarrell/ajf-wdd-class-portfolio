var express = require('express');
var router = express.Router();

const weeks = [
  {
    label: "Week 1",
    url: "/notes/week1.html"
  },
  {
    label: "Week 3",
    url: "/notes/week3.html"
  },
  {
    label: "Week 5",
    url: "/notes/week5.html"
  },
  {
    label: "Week 7",
    url: "/notes/week7.html"
  }
]

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/weeks', (req, res) => {
  res.json(weeks);
})

module.exports = router;
