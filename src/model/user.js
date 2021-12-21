const Joi = require("joi");
const { Model } = require("./helper/index")

module.exports = class User extends Model {
  static get tableName() {
    return "users";
  }

  static get joiSchema() {
    return Joi.object({
      id: Joi.number().integer().greater(0),
      name: Joi.string(),
      username: Joi.string(),
      email: Joi.string(),
      password: Joi.string(),
      created_at: Joi.date()
    });
  }
  $beforeInsert() {
    const now = new Date();
    this.created_at = now;
  }
};
