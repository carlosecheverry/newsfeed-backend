const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const notificationsSchema = new Schema({
    author: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    is_active: {
      type: Boolean,
      default: true,
    },
});

const Notifications = mongoose.model('Notifications', notificationsSchema);

module.exports = { Notifications, notificationsSchema };