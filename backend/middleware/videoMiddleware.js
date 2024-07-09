const multer = require('multer')
const { path } = require('path')

const storage = multer.diskStorage({
    destination:(req,file,cd) => {
        cd(null , './videos')
    },
    filename:(req, file, cd) => {
        cd(null , file.originalname)
    }
})

// const fileFilter = (req, file , cd) => {
//     const ext = path.extname(file.originalname)
//     if(ext !== '.mp4' || ext !== '.mkv'){
//         return cb(new Error('Only videos are allowed'));
//     }
//     cb(null, true);
// }

const upload = multer({
  storage:storage,
//   fileFilter:fileFilter
})


module.exports = upload;