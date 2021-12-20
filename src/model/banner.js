const Joi = require("joi");
const { Model } = require("./helpers");

module.exports = class Banner extends Model {
  static get tableName() {
    return "banners";
  }

  static get joiSchema() {
    return Joi.object({
      id: Joi.number().integer().greater(0),
      title: Joi.string(),
      event_date: Joi.date(),
      created_at: Joi.date()
    });
  }
  $beforeInsert() {
    const now = new Date();
    this.created_at = now;
  }
};
