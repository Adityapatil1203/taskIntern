// import React, { useState, useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { RootState } from '../redux/store';
// import { updateRoleAsync } from '../redux/rolesSlice';

// interface EditRoleProps {
//   roleId: number;
// }

// const EditRole: React.FC<EditRoleProps> = ({ roleId,setEditingRoleId }) => {
//   const dispatch = useDispatch();
//   const role = useSelector((state: RootState) => state.roles.roles.find((r) => r.id === roleId));

//   const [roleName, setRoleName] = useState<string>(role?.roleName || '');
//   const [status, setStatus] = useState<'Active' | 'Inactive'>(role?.status || 'Active');

//   useEffect(() => {
//     if (role) {
//       setRoleName(role.roleName);
//       setStatus(role.status);
//     }
//   }, [role]);

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     if (role) {
//       dispatch(updateRoleAsync({ ...role, roleName, status }));
//     }
//     setEditingRoleId(null)
//   };

//   return (
//     <div className="w-full max-w-xs mx-auto">
//       <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
//         <div className="mb-4">
//           <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="roleName">
//             Role Name
//           </label>
//           <input
//             type="text"
//             value={roleName}
//             onChange={(e) => setRoleName(e.target.value)}
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             id="roleName"
//             placeholder="Enter Role Name"
//           />
//         </div>

//         <div className="mb-6">
//           <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="status">
//             Status
//           </label>
//           <select
//             value={status}
//             onChange={(e) => setStatus(e.target.value as 'Active' | 'Inactive')}
//             className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             id="status"
//           >
//             <option value="Active">Active</option>
//             <option value="Inactive">Inactive</option>
//           </select>
//         </div>

//         <div className="flex items-center justify-between">
//           <button
//             className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//             type="submit"
//           >
//             Save
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default EditRole;


import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateRoleAsync } from '../redux/rolesSlice';
import { RootState } from '../redux/store';

const EditRole: React.FC<{ roleId: number }> = ({ roleId }) => {
  const dispatch = useDispatch();
  const role = useSelector((state: RootState) =>
    state.roles.roles.find((r) => r.id === roleId)
  );
  const [roleName, setRoleName] = useState(role?.roleName || '');
  const [status, setStatus] = useState<'Active' | 'Inactive'>(role?.status || 'Active');

  useEffect(() => {
    if (role) {
      setRoleName(role.roleName);
      setStatus(role.status);
    }
  }, [role]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(updateRoleAsync({ id: roleId, roleName, status })); // Dispatch async update role thunk
  };

  return (
       <div className="w-full max-w-xs mx-auto">
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="roleName">
            Role Name
          </label>
          <input
            type="text"
            value={roleName}
            onChange={(e) => setRoleName(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="roleName"
            placeholder="Enter Role Name"
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="status">
            Status
          </label>
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value as 'Active' | 'Inactive')}
            className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="status"
          >
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
          </select>
        </div>

        <div className="flex items-center justify-between">
          <button
            className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditRole;
