const sequelize = require("../db");
const { DataTypes } = require("sequelize");

const Customer = sequelize.define("customer", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, allowNull: false },
  login: { type: DataTypes.STRING, unique: true },
  password: { type: DataTypes.STRING },
  phone: { type: DataTypes.STRING, unique: true, allowNull: false },
  email: { type: DataTypes.STRING, unique: true, allowNull: false },
  gender: { type: DataTypes.STRING },
  age: { type: DataTypes.INTEGER },
  photo: { type: DataTypes.STRING }, //photo
});

const Order = sequelize.define("order", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  date: { type: DataTypes.DATE },
  expireDate: { type: DataTypes.DATE },
  paymentDay: { type: DataTypes.DATE },
  isPay: { type: DataTypes.BOOLEAN, defaultValue: false },
  totalPrice: { type: DataTypes.INTEGER, defaultValue: 0 },
});

const Address = sequelize.define("address", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  country: { type: DataTypes.STRING },
  city: { type: DataTypes.STRING },
  street: { type: DataTypes.STRING },
  home: { type: DataTypes.INTEGER, defaultValue: 0 },
});

const OrderContent = sequelize.define("order_content", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  productQty: { type: DataTypes.INTEGER, defaultValue: 0 },
});

const Vendor = sequelize.define("vendor", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, allowNull: false, unique: true },
  raiting: { type: DataTypes.INTEGER, defaultValue: 0 },
  phone: { type: DataTypes.STRING, unique: true },
  email: { type: DataTypes.STRING, unique: true },
});

const Product = sequelize.define("product", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, allowNull: false, unique: true },
  party: { type: DataTypes.STRING },
  productCode: { type: DataTypes.STRING, allowNull: false, unique: true },
  typeProduct: { type: DataTypes.STRING, allowNull: false },
  brandProduct: { type: DataTypes.STRING, allowNull: false },
  price: { type: DataTypes.INTEGER, defaultValue: 0 },
  img: { type: DataTypes.STRING }, //img
  title: { type: DataTypes.STRING },
  description: { type: DataTypes.TEXT },
});

const News = sequelize.define("news", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, allowNull: false, unique: true },
  theme: { type: DataTypes.STRING, allowNull: false },
  author: { type: DataTypes.STRING, allowNull: false },
  body: { type: DataTypes.TEXT, allowNull: false },
  date: { type: DataTypes.DATE, allowNull: false },
  image: { type: DataTypes.STRING },
});

const Admin = sequelize.define("admin", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, allowNull: false },
  login: { type: DataTypes.STRING, unique: true, allowNull: false },
  password: { type: DataTypes.STRING, allowNull: false },
});

Customer.hasMany(Order);
Order.belongsTo(Customer);

// Customer.hasOne(Address);
// Address.belongsTo(Customer);

Address.hasOne(Customer);
Customer.belongsTo(Address);

Order.hasMany(OrderContent);
OrderContent.belongsTo(Order);

Address.hasOne(Vendor);
Vendor.belongsTo(Address);

Product.hasOne(OrderContent);
OrderContent.belongsTo(Product);

Vendor.hasMany(Product);
Product.belongsTo(Vendor);

module.exports = {
  Customer,
  Order,
  Address,
  OrderContent,
  Vendor,
  Product,
  News,
  Admin,
};
