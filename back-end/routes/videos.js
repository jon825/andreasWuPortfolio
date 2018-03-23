const router = require('express').Router();
const {Video} = require('../models');
const multer = require('multer');


const storage = multer.diskStorage({
  destination:(req, file, cb) =>{
    cb(null, './uploads/videos');
  },
  filename:(req, file, cb) =>{
    cb(null, file.originalname);
  }
});

const upload = multer({storage:storage});


let attributes;
Video.where({})
  .fetch()
  .then(video => {
    attributes = Object.keys(video.attributes);
})

router.get('/', (req, res)=>{
  const where = {};
  for(let key in req.query){
    if(attributes.includes(key)){
      where[key] = req.query[key];
    }
  }
  Video.where(where)
  .fetchAll({})
  .then(videos =>{
    res.send(videos);
  })
  .catch(e=>{
    res.status(500).send(e);
  })
})


router.post('/upload/video', upload.single('uploadFile'), (req, res) =>{
  res.send('video uploaded');
  const newVideo = {};
  for(let key in req.file){
    if(attributes.includes(key)){
      newVideo[key] = req.file[key];
    }
  }
  console.log(newVideo)
  new Video(newVideo)
    .save()
    .catch(e=>{
      res.status(500).send(e)
    })

})

module.exports = router;
