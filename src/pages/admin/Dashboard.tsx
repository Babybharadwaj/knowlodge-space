
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  SidebarProvider,
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarFooter,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
  SidebarTrigger,
  SidebarInset
} from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { Users, Home, BookOpen, Settings, LogOut } from "lucide-react";

const AdminDashboard: React.FC = () => {
  const [registeredUsers, setRegisteredUsers] = useState<any[]>([]);
  const navigate = useNavigate();

  // Fetch all registered users from localStorage
  useEffect(() => {
    const fetchUsers = () => {
      try {
        // Get all users from localStorage
        const allUsers = [];
        for (let i = 0; i < localStorage.length; i++) {
          const key = localStorage.key(i);
          if (key === 'user') {
            const user = JSON.parse(localStorage.getItem(key) || '{}');
            allUsers.push(user);
          }
        }
        
        // Add mock users for demonstration purposes
        const mockUsers = [
          { name: 'Jane Smith', email: 'jane.smith@example.com', registeredOn: '2025-04-01' },
          { name: 'John Doe', email: 'john.doe@example.com', registeredOn: '2025-04-05' },
          { name: 'Alice Johnson', email: 'alice@example.com', registeredOn: '2025-04-08' },
        ];
        
        setRegisteredUsers([...allUsers, ...mockUsers]);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []);

  const handleSignOut = () => {
    localStorage.removeItem('isAdminAuthenticated');
    toast.success("Admin signed out successfully");
    navigate('/admin/login');
  };

  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full bg-gray-50">
        <Sidebar>
          <SidebarHeader>
            <div className="p-2">
              <h2 className="text-xl font-bold">Admin Panel</h2>
              <p className="text-xs text-gray-500">Manage your platform</p>
            </div>
          </SidebarHeader>
          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupLabel>Navigation</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton isActive={true} tooltip="Dashboard">
                      <Home size={18} />
                      <span>Dashboard</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton tooltip="Users">
                      <Users size={18} />
                      <span>Users</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton tooltip="Courses">
                      <BookOpen size={18} />
                      <span>Courses</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton tooltip="Settings">
                      <Settings size={18} />
                      <span>Settings</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>
          <SidebarFooter>
            <div className="p-2">
              <Button 
                variant="outline" 
                className="w-full flex justify-start gap-2"
                onClick={handleSignOut}
              >
                <LogOut size={16} />
                <span>Sign Out</span>
              </Button>
            </div>
          </SidebarFooter>
        </Sidebar>

        <SidebarInset>
          <div className="p-6">
            <SidebarTrigger className="mb-6" />
            
            <div className="mb-6">
              <h1 className="text-3xl font-bold mb-2">Dashboard</h1>
              <p className="text-gray-500">Welcome to the admin dashboard.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-xl font-semibold mb-4">Registered Users</h2>
              
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Name
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Email
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Registered On
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {registeredUsers.length > 0 ? (
                      registeredUsers.map((user, index) => (
                        <tr key={index}>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm font-medium text-gray-900">
                              {user.name || 'User ' + (index + 1)}
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-500">{user.email}</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-500">
                              {user.registeredOn || new Date().toISOString().split('T')[0]}
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <Button variant="ghost" size="sm" className="text-blue-600 hover:text-blue-800">
                              View
                            </Button>
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan={4} className="px-6 py-4 text-center text-sm text-gray-500">
                          No users found
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
};

export default AdminDashboard;
