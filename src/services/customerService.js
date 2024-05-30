const Customer = require('../models/customer');

exports.getAllCustomers = async () => {
  return await Customer.find();
};

exports.getCustomerById = async (id) => {
  return await Customer.findById(id);
};

exports.createCustomer = async (customerData) => {
  const customer = new Customer(customerData);
  await customer.save();
  return customer;
};

exports.updateCustomer = async (id, customerData) => {
  const customer = await Customer.findByIdAndUpdate(id, customerData, { new: true, runValidators: true });
  return customer;
};

exports.deleteCustomer = async (id) => {
  const customer = await Customer.findByIdAndDelete(id);
  return customer;
};
