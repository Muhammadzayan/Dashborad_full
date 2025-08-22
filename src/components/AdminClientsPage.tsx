import React, { useState, useEffect } from 'react';

const AdminClientsPage = () => {
  const [clients, setClients] = useState([]);
  const [selectedPackage, setSelectedPackage] = useState('');
  const [selectedClientId, setSelectedClientId] = useState('');

  useEffect(() => {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    // Only show users with role 'user' (clients)
    setClients(users.filter((u: any) => u.role === 'user'));
  }, []);

  const handleAssignPackage = (clientId: string) => {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const updatedUsers = users.map((u: any) =>
      u.id === clientId ? { ...u, insurancePackage: selectedPackage } : u
    );
    localStorage.setItem('users', JSON.stringify(updatedUsers));
    setClients(updatedUsers.filter((u: any) => u.role === 'user'));
    setSelectedClientId('');
    setSelectedPackage('');
    alert('Package assigned!');
  };

  return (
    <div className="p-8 max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">Registered Clients</h2>
      <table className="w-full border mb-8">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-2 text-left">Name</th>
            <th className="p-2 text-left">Email</th>
            <th className="p-2 text-left">Department</th>
            <th className="p-2 text-left">Package</th>
            <th className="p-2 text-left">Assign</th>
          </tr>
        </thead>
        <tbody>
          {clients.map((client: any) => (
            <tr key={client.id} className="border-t">
              <td className="p-2">{client.name}</td>
              <td className="p-2">{client.email}</td>
              <td className="p-2">{client.department}</td>
              <td className="p-2">{client.insurancePackage || 'None'}</td>
              <td className="p-2">
                <select
                  value={selectedClientId === client.id ? selectedPackage : ''}
                  onChange={e => {
                    setSelectedClientId(client.id);
                    setSelectedPackage(e.target.value);
                  }}
                  className="border rounded px-2 py-1"
                >
                  <option value="">Select Package</option>
                  <option value="Basic">Basic</option>
                  <option value="Premium">Premium</option>
                  <option value="Gold">Gold</option>
                </select>
                <button
                  className="ml-2 px-3 py-1 bg-blue-600 text-white rounded"
                  disabled={!selectedPackage || selectedClientId !== client.id}
                  onClick={() => handleAssignPackage(client.id)}
                >
                  Assign
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminClientsPage;// ...existing code...

// Clear localStorage for demo purposes
// localStorage.clear(); // <-- REMOVE THIS LINE

// ...existing code...