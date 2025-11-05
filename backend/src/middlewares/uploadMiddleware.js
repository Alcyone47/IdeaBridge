import multer from "multer";
import path from "path";

const storage = multer.memoryStorage();

const upload = multer({
  storage,
  limits: {fileSize: 10*1024*1024},
  fileFilter: (req, file, cb) => {
    const allowed = [
      "image/png",
      "image/jpeg",
      "application/pdf",
      "application/vnd.ms-powerpoint",
      "application/vnd.openxmlformats-officedocument.presentationml.presentation",
    ]
    if (allowed.includes(file.mimetype)) cb(null, true);
    else cb(new Error("Unsupported file type"), false);
  },
});

export default upload