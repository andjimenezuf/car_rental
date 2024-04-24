// Import the required modules from supabase-js and mantine
import { createClient } from '@supabase/supabase-js';
import { Button, Modal, TextInput, Table } from '@mantine/core';
import React, { useState, useEffect } from 'react';
import { primaryGradient, secondaryGradient } from '@/const';

// Define the type for employee data
interface Employee {
  id: number;
  created_at: string;
  name: string;
  email: string;
  location: string;
  role: string;
}

const supabaseClient = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL || '', process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '');

const App = () => {
  const [addModalOpen, setAddModalOpen] = useState(false);
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [newEmployee, setNewEmployee] = useState({
    name: '',
    email: '',
    location: '',
    role: ''
  });

  useEffect(() => {
    fetchEmployees();
  }, []);

  async function fetchEmployees() {
    const { data, error } = await supabaseClient
      .from('EmployeeAdmin')
      .select('*');
    if (error) {
      console.error('Error fetching employees:', error);
    } else {
      setEmployees(data);
    }
  }

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    setNewEmployee((prev) => ({
      ...prev,
      [name]: value
    }));
  }

  async function createEmployee() {
    setAddModalOpen(false)
    const { error } = await supabaseClient
      .from('EmployeeAdmin')
      .insert([newEmployee]);

    if (error) {
      console.error('Error creating new employee:', error);
    } else {
      fetchEmployees();
      setNewEmployee({ name: '', email: '', location: '', role: '' }); // Clear form
    }
  }

  async function deleteEmployee(employeeId: number) {
    const { error } = await supabaseClient
      .from('EmployeeAdmin')
      .delete()
      .eq('id', employeeId);

    if (error) {
      console.error('Error deleting employee:', error);
    } else {
      fetchEmployees();
    }
  }

  // Add your form and table JSX with Mantine components
  return (
    <div>
      <div style={{display: 'flex'}}>
        <div style={{flex: 8}}>
          <h1>Manage Staff</h1>
        </div>
        <div style={{flex: 1, marginTop: 30}}>
          <Button variant='gradient' gradient={primaryGradient} onClick={() => setAddModalOpen(true)}>Add Employee</Button>
        </div>
      </div>
      <Modal
      opened={addModalOpen}
      onClose={() => setAddModalOpen(false)}
      withCloseButton={false}
      >
        <h2>Add New Staff Member</h2>
        <form onSubmit={createEmployee}>
        <TextInput
          label="Name"
          name="name"
          value={newEmployee.name}
          onChange={handleChange}
        />
        <TextInput
          label="Email"
          name="email"
          value={newEmployee.email}
          onChange={handleChange}
        />
        <TextInput
          label="Location"
          name="location"
          value={newEmployee.location}
          onChange={handleChange}
        />
        <TextInput
          label="Role"
          name="role"
          value={newEmployee.role}
          onChange={handleChange}
        />
      </form>
    
      <Button style={{marginTop: 30}}variant='gradient' gradient={primaryGradient} onClick={createEmployee}>Add Employee</Button>

      </Modal>
       
      <Table>
        <thead style={{height: 30}}>
          <tr>
            <th>Full Name</th>
            <th>Email</th>
            <th>Location</th>
            <th>Role</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr style={{height: 80, border: "1px solid rgba(150, 150, 150)", textAlign: "center", fontSize: 16}} key={employee.id}>
              <td>{employee.name}</td>
              <td>{employee.email}</td>
              <td>{employee.location}</td>
              <td>{employee.role}</td>
              <td>
                <Button variant='gradient' gradient={secondaryGradient} onClick={() => deleteEmployee(employee.id)}>Delete</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default App;
