import mongoose, { Document } from 'mongoose';

export interface RoleDocument extends Document {
  roleName: string;
  status: 'Active' | 'Inactive';
}

const roleSchema = new mongoose.Schema({
  roleName: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ['Active', 'Inactive'],
    default: 'Active',
  },
});

export const Role = mongoose.model<RoleDocument>('Role', roleSchema);
