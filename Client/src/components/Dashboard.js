import React from 'react';

const users = [
  { id: 1, name: 'John Doe', email: 'john@example.com' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
];

const shops = [
  { id: 1, name: 'Tech Store', location: 'New York' },
  { id: 2, name: 'Fashion Boutique', location: 'Los Angeles' },
];

function Dashboard() {
  return (
    <div className="bg-black p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Users</h2>
      <table className="min-w-full mb-6 bg-black rounded-lg">
        <thead>
          <tr>
            <th className="py-2">ID</th>
            <th className="py-2">Name</th>
            <th className="py-2">Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td className="border px-4 py-2">{user.id}</td>
              <td className="border px-4 py-2">{user.name}</td>
              <td className="border px-4 py-2">{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2 className="text-2xl font-bold mb-4">Shops</h2>
      <table className="min-w-full rounded-lg">
        <thead>
          <tr>
            <th className="py-2">ID</th>
            <th className="py-2">Name</th>
            <th className="py-2">Location</th>
          </tr>
        </thead>
        <tbody>
          {shops.map(shop => (
            <tr key={shop.id}>
              <td className="border px-4 py-2">{shop.id}</td>
              <td className="border px-4 py-2">{shop.name}</td>
              <td className="border px-4 py-2">{shop.location}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Dashboard;
