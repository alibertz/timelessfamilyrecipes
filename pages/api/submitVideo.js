const multer = require("multer");
const path = require("path");
const DatauriParser = require("datauri/parser");
const parser = new DatauriParser();
const cloudinary = require("cloudinary").v2;
const getStream = require("get-stream");
const crypto = require("crypto");

import middleware from "../../middleware/middleware";
import nextConnect from "next-connect";

cloudinary.config({
  cloud_name: "dbb7dy9r1",
  api_key: "567311783518325",
  api_secret: "2VekyhZwDe5vS-t2kZk96CIBfEo",
});

const formatBufferTo64 = (file) =>
  parser.format(path.extname(file.originalFilename).toString(), file.buffer);

const ALLOWED_FORMATS = ["image/jpeg", "image/png", "image/jpg"];

// let filename;

// crypto.randomBytes(16, (err, buf) => {
//   if (err) {
//     return reject(err);
//   }
//   filename = buf.toString("hex");
// });

const storage = multer.memoryStorage();
// const upload = multer({ storage: storage });

const upload = multer({
  storage,
  fileFilter: function (req, file, cb) {
    if (ALLOWED_FORMATS.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error("Not supported file type!"), false);
    }
  },
});

const singleUpload = upload.single("file");
const singleUploadCtrl = (req, res, next) => {
  singleUpload(req, res, (error) => {
    if (error) {
      return res.status(422).send({ message: "Image upload fail!" });
    }
    next();
  });
};

// export default async function handler(req, res) {
//   const { method } = req;

//   switch (method) {
//     case "GET":
//       try {
//         res.status(200).json({ success: true });
//       } catch (error) {
//         res.status(400).json({ success: false });
//       }
//       break;
//     case "POST":
//       console.log("yoo");
//       try {
//         res.status(201).json({ success: true });
//       } catch (error) {
//         res.status(400).json({ success: false });
//       }
//       break;
//     default:
//       res.status(400).json({ success: false });
//       break;
//   }
// }

const cloudinaryUpload = (file) => cloudinary.uploader.upload(file);

const handler = nextConnect();
handler.use(middleware);

handler.post(singleUploadCtrl, async (req, res) => {
  try {
    if (!req.files) {
      throw new Error("Image is not presented!");
    }
    // const file64 = formatBufferTo64(req.files.image[0]);
    // const uploadResult = await cloudinaryUpload(req.files.file);
    // return res.json({
    //   cloudinaryId: uploadResult.public_id,
    //   url: uploadResult.secure_url,
    // });
    console.log(req.files);
  } catch (e) {
    res.json({ message: e.message });
    return console.log(`---### ${e.message} ###---`);
  }
});

export const config = {
  api: {
    bodyParser: false,
  },
};

export default handler;
