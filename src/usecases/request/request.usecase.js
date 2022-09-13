const Request = require("../../models/request/request.model");

const getAll = async () => {
  const requests = await Request.find({})
    .populate("client_id")
    .populate("categories")
    .populate("event_type");
  return requests;
};

const getById = async (id) => {
  const request = await Request.findById(id)
    .populate("client_id")
    .populate("categories")
    .populate("event_type");
  return request;
};

const create = async (RequestData) => {
  const request = await Request.create(RequestData);
  return request;
};

const updateById = (id, newRequestData) => {
  const requestUpdated = Request.findByIdAndUpdate(id, newRequestData);
  return requestUpdated;
};

const deleteById = (id) => {
  const requestToDelete = Request.findByIdAndDelete(id);
  return requestToDelete;
};

module.exports = { getAll, getById, create, updateById, deleteById };
