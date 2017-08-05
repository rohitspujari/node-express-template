const mongoose = require('mongoose');
const { Schema } = mongoose;
const RecipientSchema = require('./Recipient');

const surveySchema = new Schema({
  title: String,
  body: String,
  subject: String,
  recipients: [RecipientSchema],
  yes: { Number, default: 0 },
  no: { Number, default: 0 },
  _user: { type: Schema.Types.ObjectId, ref: 'user' }, // relationship field.
  dateSent: Date,
  lastResponded: Date
});

mongoose.model('surveys', surveySchema);
