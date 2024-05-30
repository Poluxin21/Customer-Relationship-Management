const CustomerService = require('../services/customerService');

exports.getCustomers = async (req, res, next) => {
  try {
    const customers = await CustomerService.getAllCustomers();
    res.status(200).json(customers);
  } catch (err) {
    next(err);
  }
};

exports.getCustomerById = async (req, res, next) => {
  try {
    const customer = await CustomerService.getCustomerById(req.params.id);
    if (!customer) {
      return res.status(404).json({ message: 'Customer not found' });
    }
    res.status(200).json(customer);
  } catch (err) {
    next(err);
  }
};

exports.createCustomer = async (req, res, next) => {
  try {
    const customer = await CustomerService.createCustomer(req.body);
    res.status(201).json(customer);
  } catch (err) {
    next(err);
  }
};

exports.updateCustomer = async (req, res, next) => {
  try {
    const customer = await CustomerService.updateCustomer(req.params.id, req.body);
    if (!customer) {
      return res.status(404).json({ message: 'Customer not found' });
    }
    res.status(200).json(customer);
  } catch (err) {
    next(err);
  }
};

exports.deleteCustomer = async (req, res, next) => {
  try {
    const customer = await CustomerService.deleteCustomer(req.params.id);
    if (!customer) {
      return res.status(404).json({ message: 'Customer not found' });
    }
    res.status(200).json({ message: 'Customer deleted' });
  } catch (err) {
    next(err);
  }
};
