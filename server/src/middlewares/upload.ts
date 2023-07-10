import { Request, Response, NextFunction } from 'express';
import multer from "multer";

import { CloudinaryStorage } from "multer-storage-cloudinary";

const cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});



const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: async (req: Request, file: Buffer) => {
    return {
      folder: "The Gathering",
    };
  },
});


export const upload = multer({
  storage: storage,
  fileFilter: (req: Request, file, cb) => {
    if (
      file.mimetype == "image/png" ||
      file.mimetype == "image/jpg" ||
      file.mimetype == "image/jpeg"
    ) {
      cb(null, true);
    } else {
      cb(null, false);
      return cb(new Error("Only .png, .jpg and .jpeg format allowed!"));
    }
  },
});

