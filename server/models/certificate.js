const mongoose = require("mongoose");

const CertificateSchema = mongoose.Schema(
  {
    uid: {
      type: String,
      required: true
    },
    ucode: {
      type: Number,
      required: true
    },
    recipent: {
      type: String,
      required: true
    },
    issued: {
      type: Date
    },
    created: {
      type: Date, default: Date.now
    },
  },
  { collection: "certificates" }
);

module.exports = mongoose.model("Certificate", CertificateSchema);
