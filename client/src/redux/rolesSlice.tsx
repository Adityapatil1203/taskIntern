// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import { RootState } from './store';

// interface Role {
//   id: number;
//   roleName: string;
//   status: 'Active' | 'Inactive';
// }

// interface RolesState {
//   roles: Role[];
//   loading: boolean;
// }

// const initialState: RolesState = {
//   roles: [],
//   loading: false,
// };

// export const fetchRoles = createAsyncThunk('roles/fetchRoles', async () => {
//   const response = await fetch('/api/roles'); // Replace with your API call
//   return (await response.json()) as Role[];
// });

// export const rolesSlice = createSlice({
//   name: 'roles',
//   initialState,
//   reducers: {
//     deleteRole: (state, action) => {
//       state.roles = state.roles.filter(role => role.id !== action.payload);
//     },
//   },
//   extraReducers: (builder) => {
//     builder.addCase(fetchRoles.fulfilled, (state, action) => {
//       state.roles = action.payload;
//     });
//   },
// });

// export const { deleteRole } = rolesSlice.actions;
// export default rolesSlice.reducer;


// import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';

// interface Role {
//   id: number;
//   roleName: string;
//   status: 'Active' | 'Inactive';
// }

// interface RolesState {
//   roles: Role[];
// }

// const initialState: RolesState = {
//   roles: [],
// };

// export const fetchRoles = createAsyncThunk('roles/fetchRoles', async () => {
//   const response = await fetch('/api/roles'); // Replace with your API call
//   return (await response.json()) as Role[];
// });

// // Reducer and action for adding a role
// export const rolesSlice = createSlice({
//     name: 'roles',
//     initialState,
//     reducers: {
//       addRole: (state, action: PayloadAction<Role>) => {
//         state.roles.push(action.payload);
//       },
//       deleteRole: (state, action: PayloadAction<number>) => {
//         state.roles = state.roles.filter(role => role.id !== action.payload);
//       },
//       updateRole: (state, action: PayloadAction<Role>) => {
//         const index = state.roles.findIndex(role => role.id === action.payload.id);
//         if (index !== -1) {
//           state.roles[index] = action.payload;
//         }
//       },
//     },
//   });
  
//   export const { addRole, deleteRole, updateRole } = rolesSlice.actions;
  
// export default rolesSlice.reducer;


import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';

interface Role {
  id: number;
  roleName: string;
  status: 'Active' | 'Inactive';
}

interface RolesState {
  roles: Role[];
  loading: boolean;
  error: string | null;
}

const initialState: RolesState = {
  roles: [],
  loading: false,
  error: null,
};

// Fetch roles from the API
export const fetchRoles = createAsyncThunk('roles/fetchRoles', async () => {
  const response = await fetch('http://localhost:5000/api/roles');
  return (await response.json()) as Role[];
});

// Add a role
export const addRoleAsync = createAsyncThunk('roles/addRole', async (role: Omit<Role, 'id'>) => {
  const response = await fetch('http://localhost:5000/api/roles', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(role),
  });
  return (await response.json()) as Role;
});

// Update a role
export const updateRoleAsync = createAsyncThunk('roles/updateRole', async (role: Role) => {
  const response = await fetch(`http://localhost:5000/api/roles/${role.id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(role),
  });
  return (await response.json()) as Role;
});

// Delete a role
export const deleteRoleAsync = createAsyncThunk('roles/deleteRole', async (id: number) => {
  await fetch(`http://localhost:5000/api/roles/${id}`, {
    method: 'DELETE',
  });
  return id;
});

// Slice
export const rolesSlice = createSlice({
  name: 'roles',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Fetch roles
    builder.addCase(fetchRoles.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchRoles.fulfilled, (state, action: PayloadAction<Role[]>) => {
      state.roles = action.payload;
      state.loading = false;
    });
    builder.addCase(fetchRoles.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || 'Failed to fetch roles';
    });

    // Add role
    builder.addCase(addRoleAsync.fulfilled, (state, action: PayloadAction<Role>) => {
      state.roles.push(action.payload);
    });

    // Update role
    builder.addCase(updateRoleAsync.fulfilled, (state, action: PayloadAction<Role>) => {
      const index = state.roles.findIndex((role) => role.id === action.payload.id);
      if (index !== -1) {
        state.roles[index] = action.payload;
      }
    });

    // Delete role
    builder.addCase(deleteRoleAsync.fulfilled, (state, action: PayloadAction<number>) => {
      state.roles = state.roles.filter((role) => role.id !== action.payload);
    });
  },
});

export default rolesSlice.reducer;
