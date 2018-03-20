const router = require('express').Router();
const {Image} = require('../models');
const multer = require('multer');


const storage = multer.diskStorage({
  destination:(req, file, cb) =>{
    cb(null, './uploads');
  },
  filename:(req, file, cb) =>{
    cb(null, file.originalname);

  }
});

const upload = multer({storage:storage});


let attributes;
Image.where({})
  .fetch()
  .then(image => {
    attributes = Object.keys(image.attributes);
})

router.get('/', (req, res)=>{
  const where = {};
  for(let key in req.query){
    if(attributes.includes(key)){
      where[key] = req.query[key];
    }
  }
  Image.where(where)
  .fetchAll({})
  .then(images =>{
    res.send(images);
  })
  .catch(e=>{
    res.status(500).send(e);
  })
})


router.post('/upload', upload.single('myImage'), (req, res) =>{
  res.send('image uploaded');
  const newImage = {};
  for(let key in req.file){
    if(attributes.includes(key)){
      newImage[key] = req.file[key];
    }
  }
  new Image(newImage)
    .save()
    // .then(image =>{
    //   res.json(image.attributes);
    // })
    .catch(e=>{
      res.status(500).send(e)
    })

})

module.exports = router;
