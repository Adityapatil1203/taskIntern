// import React from 'react';

// // Data for roles
// const rolesData = [
//   { id: "123", name: "Admin", status: "Active" },
//   { id: "124", name: "Superadmin", status: "Inactive" },
//   { id: "125", name: "Caller", status: "Inactive" },
//   { id: "126", name: "Account", status: "Active" },
// ];

// // Main RolesPage Component
// const RolesPage: React.FC = () => {
//   return (
//     <section className="w-full">
//       {/* Add New Button */}
//       <div className="flex justify-end">
//         <button className="bg-blue-500 text-white px-4 py-2 rounded">
//           Add New
//         </button>
//       </div>

//       {/* Roles List Header */}
//       <div className="flex gap-5 justify-between px-6 py-4 mt-9 w-full text-xl text-black bg-yellow-100 max-md:px-5 max-md:max-w-full">
//         <div className="flex gap-3 whitespace-nowrap">
//           <div>Id</div>
//           <img
//             loading="lazy"
//             src="https://cdn.builder.io/api/v1/image/assets/TEMP/92dc824d8440c9fc0a3c874c6ef21049078aa3b0ee0e9a35bc8b1a01679aa645?placeholderIfAbsent=true&apiKey=abac2ec54bba43e4b308d7b16cc976ef"
//             alt=""
//             className="object-contain shrink-0 my-auto aspect-[0.54] w-[13px]"
//           />
//         </div>
//         <div className="flex gap-5">
//           <div className="basis-auto">Role Name</div>
//           <img
//             loading="lazy"
//             src="https://cdn.builder.io/api/v1/image/assets/TEMP/a75e3f7b3bbc2791a942c57fa0a0322804a74b53792604fcace55f0122c9ddaf?placeholderIfAbsent=true&apiKey=abac2ec54bba43e4b308d7b16cc976ef"
//             alt=""
//             className="object-contain shrink-0 my-auto aspect-[0.54] w-[13px]"
//           />
//         </div>
//         <div className="flex gap-3 whitespace-nowrap">
//           <div>Status</div>
//           <img
//             loading="lazy"
//             src="https://cdn.builder.io/api/v1/image/assets/TEMP/a75e3f7b3bbc2791a942c57fa0a0322804a74b53792604fcace55f0122c9ddaf?placeholderIfAbsent=true&apiKey=abac2ec54bba43e4b308d7b16cc976ef"
//             alt=""
//             className="object-contain shrink-0 my-auto aspect-[0.54] w-[13px]"
//           />
//         </div>
//         <div>Action</div>
//       </div>

//       {/* Roles List Items */}
//       <div>
//         {rolesData.map((role, index) => {
//           const statusColor = role.status === "Active" ? "text-green-700" : "text-red-600";
//           return (
//             <div
//               key={index}
//               className="flex flex-wrap gap-5 justify-between py-5 pr-14 pl-6 mt-4 text-base text-black whitespace-nowrap bg-zinc-100 max-md:px-5 max-md:max-w-full"
//             >
//               <div>{role.id}</div>
//               <div>{role.name}</div>
//               <div className={statusColor}>{role.status}</div>
//               <img
//                 loading="lazy"
//                 src="https://cdn.builder.io/api/v1/image/assets/TEMP/94cb2909ab833a357d14e5c16432d6f9a2c1da3604f3578b306f0f9177ea4748?placeholderIfAbsent=true&apiKey=abac2ec54bba43e4b308d7b16cc976ef"
//                 alt="Action"
//                 className="object-contain shrink-0 aspect-[2.83] w-[68px]"
//               />
//             </div>
//           );
//         })}
//       </div>
//     </section>
//   );
// };

// export default RolesPage;


// import React, { useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { fetchRoles, deleteRole } from '../redux/rolesSlice';
// import { RootState } from '../redux/store';

// const Roles: React.FC = () => {
//   const dispatch = useDispatch();
//   const roles = useSelector((state: RootState) => state.roles.roles);
  
//   useEffect(() => {
//     dispatch(fetchRoles());
//   }, [dispatch]);

//   const handleDelete = (id: number) => {
//     dispatch(deleteRole(id));
//   };

//   return (
//     <div>
//       <div className="flex justify-between mb-4">
//         <h1 className="text-xl font-bold">Roles</h1>
//         <button className="bg-purple-600 text-white px-4 py-2 rounded">Add New</button>
//       </div>
//       <table className="min-w-full bg-white">
//         <thead>
//           <tr>
//             <th className="px-4 py-2">Id</th>
//             <th className="px-4 py-2">Role Name</th>
//             <th className="px-4 py-2">Status</th>
//             <th className="px-4 py-2">Action</th>
//           </tr>
//         </thead>
//         <tbody>
//           { roles.length > 0 && roles?.map((role) => (
//             <tr key={role.id}>
//               <td className="border px-4 py-2">{role.id}</td>
//               <td className="border px-4 py-2">{role.roleName}</td>
//               <td className="border px-4 py-2">
//                 <span className={role.status === 'Active' ? 'text-green-500' : 'text-red-500'}>
//                   {role.status}
//                 </span>
//               </td>
//               <td className="border px-4 py-2">
//                 <button className="mr-2 text-blue-600">Edit</button>
//                 <button onClick={() => handleDelete(role.id)} className="text-red-600">
//                   Delete
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default Roles;


// import React, { useState, useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { fetchRoles , deleteRoleAsync  } from '../redux/rolesSlice';
// import { RootState } from '../redux/store';
// import AddRole from './AddRole';
// import EditRole from './EditRole';

// const Roles: React.FC = () => {
//   const [showAddRole, setShowAddRole] = useState<boolean>(false);
//   const [editingRoleId, setEditingRoleId] = useState<number | null>(null); // To track the role being edited
//   const dispatch = useDispatch();
//   const roles = useSelector((state: RootState) => state.roles.roles);

//   useEffect(() => {
//     dispatch(fetchRoles());
//   }, [dispatch]);

//   // Handle the Edit button click
//   const handleEditClick = (id: number) => {
//     setEditingRoleId(id);
//   };

//    // Handle Delete button click
//    const handleDeleteClick = (id: number) => {
//     if (window.confirm('Are you sure you want to delete this role?')) {
//       dispatch(deleteRoleAsync(id));
//     }
//   };

//   return (
//     <div>
//       {/* Conditionally show the AddRole or EditRole form, or the roles list */}
//       {showAddRole ? (
//         <>
//           <button
//             className="bg-gray-500 text-white px-4 py-2 mb-4 rounded"
//             onClick={() => setShowAddRole(false)}
//           >
//             Back to Roles
//           </button>
//           <AddRole setShowAddRole={setShowAddRole} />
//         </>
//       ) : editingRoleId !== null ? (
//         <>
//           <button
//             className="bg-gray-500 text-white px-4 py-2 mb-4 rounded"
//             onClick={() => setEditingRoleId(null)}
//           >
//             Back to Roles
//           </button>
//           <EditRole roleId={editingRoleId} setEditingRoleId={setEditingRoleId} />
//         </>
//       ) : (
//         <>
//           <div className="flex justify-between mb-4">
//             <h1 className="text-xl font-bold">Roles</h1>
//             <button
//               className="bg-purple-600 text-white px-4 py-2 rounded"
//               onClick={() => setShowAddRole(true)}
//             >
//               Add New
//             </button>
//           </div>
//           <table className="min-w-full bg-white">
//             <thead>
//               <tr>
//                 <th className="px-4 py-2">Id</th>
//                 <th className="px-4 py-2">Role Name</th>
//                 <th className="px-4 py-2">Status</th>
//                 <th className="px-4 py-2">Action</th>
//               </tr>
//             </thead>
//             <tbody>
//               { roles.length > 0 && roles.map((role) => (
//                 <tr key={role.id}>
//                   <td className="border px-4 py-2">{role.id}</td>
//                   <td className="border px-4 py-2">{role.roleName}</td>
//                   <td className="border px-4 py-2">
//                     <span className={role.status === 'Active' ? 'text-green-500' : 'text-red-500'}>
//                       {role.status}
//                     </span>
//                   </td>
//                   <td className="border px-4 py-2">
//                     <button
//                       className="mr-2 text-blue-600"
//                       onClick={() => handleEditClick(role.id)}
//                     >
//                       Edit
//                     </button>
//                     <button onClick={() => handleDeleteClick(role.id)} className="text-red-600">Delete</button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </>
//       )}
//     </div>
//   );
// };

// export default Roles;

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRoles, deleteRoleAsync } from '../redux/rolesSlice';
import { RootState } from '../redux/store';

const Roles: React.FC = () => {
  const dispatch = useDispatch();
  const { roles, loading, error } = useSelector((state: RootState) => state.roles);

  useEffect(() => {
    dispatch(fetchRoles());
  }, [dispatch]);

  const handleDelete = async (id: number) => {
    dispatch(deleteRoleAsync(id)); // Dispatch the async delete thunk
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <div className="flex justify-between mb-4">
        <h1 className="text-xl font-bold">Roles</h1>
        <button className="bg-purple-600 text-white px-4 py-2 rounded">
          Add New
        </button>
      </div>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="px-4 py-2">Id</th>
            <th className="px-4 py-2">Role Name</th>
            <th className="px-4 py-2">Status</th>
            <th className="px-4 py-2">Action</th>
          </tr>
        </thead>
        <tbody>
          { roles.length > 0 &&  roles?.map((role) => (
            <tr key={role.id}>
              <td className="border px-4 py-2">{role.id}</td>
              <td className="border px-4 py-2">{role.roleName}</td>
              <td className="border px-4 py-2">
                <span className={role.status === 'Active' ? 'text-green-500' : 'text-red-500'}>
                  {role.status}
                </span>
              </td>
              <td className="border px-4 py-2">
                <button className="mr-2 text-blue-600">Edit</button>
                <button className="text-red-600" onClick={() => handleDelete(role.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Roles;

