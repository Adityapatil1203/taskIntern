// import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { addRoleAsync } from '../redux/rolesSlice';

// const AddRole: React.FC = ({setShowAddRole}) => {
//   const [roleName, setRoleName] = useState<string>('');
//   const [status, setStatus] = useState<'Active' | 'Inactive'>('Active');
//   const dispatch = useDispatch();

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     const newRole = { id: Math.random(), roleName, status }; // For now, random ID
//     dispatch(addRoleAsync(newRole));
//     setRoleName('');
//     setStatus('Active');
//     setShowAddRole(false)
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

// export default AddRole;


import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addRoleAsync } from '../redux/rolesSlice';

const AddRole: React.FC = () => {
  const [roleName, setRoleName] = useState('');
  const [status, setStatus] = useState<'Active' | 'Inactive'>('Active');
  const dispatch = useDispatch();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(addRoleAsync({ roleName, status })); // Dispatch async add role thunk
    setRoleName('');
    setStatus('Active');
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

export default AddRole;
