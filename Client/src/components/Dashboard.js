import axios from 'axios';
import React, { useEffect, useState } from 'react';

const users = [
  { id: 1, name: 'John Doe', email: 'john@example.com' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
];

function Dashboard() {
  const [supplement, setSupplement] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8000/api/products")
      .then((res) => {
        console.log(res.data);
        setSupplement(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

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
            <th className="py-2">Product Name</th>
            <th className="py-2">Price</th>
            <th className="py-2">Information</th>
          </tr>
        </thead>
        <tbody>
          {supplement.map(supp => (
            <tr key={supp.id}>
              <td className="border px-4 py-2">{supp.ProductName}</td>
              <td className="border px-4 py-2">{supp.Price}</td>
              <td className="border px-4 py-2">{supp.Information}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Dashboard;
