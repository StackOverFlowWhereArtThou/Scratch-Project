const db = require('../models/models.js');

const userController = {};

userController.verifyUser = (req, res, next) => {
  const { username, password } = req.body;
  const userValues = [
    username,
    password,
  ];

  const query = 'SELECT * FROM public.user WHERE username = $1 AND password = $2';

  db.query(query, userValues, (err, result) => {
    if(err) return next({
      log: 'userController.verifyUser failed',
      message: {
        err: 'this user does not exist'
      }
    })
    
    res.locals.userId = result.rows[0]._id;
    res.body = res.locals.userId;
    return next();
  })
}

module.exports = userController;