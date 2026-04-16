import ApiError from "../../../utils/ApiError.js";
import Owner from "../models/owner.model.js";

const addOwner = async ({ name, company }) => {
  const owner = await Owner.create({ name, company });
  return owner;
};

const getAllOwners = async () => {
  const owners = await Owner.find();
  return owners;
};

const getOwnerById = async (id) => {
  const owner = await Owner.findById(id);

  if (!owner) {
    throw new ApiError(404, "Owner not found");
  }
  return owner;
};

const updateOwner = async (id, { name, company }) => {
  const owner = await Owner.findByIdAndUpdate(
    id,
    { name, company },
    { new: true },
  );

  if (!owner) {
    throw new ApiError(404, "Owner not found");
  }
  return owner;
};

const deleteOwner = async (id) => {
  const owner = await Owner.findByIdAndDelete(id);

  if (!owner) {
    throw new ApiError(404, "Owner not found");
  }
  return owner;
};

export { addOwner, getAllOwners, getOwnerById, updateOwner, deleteOwner };
