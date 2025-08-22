import React, { useState, useEffect } from 'react';
import { AuthProvider, useAuth } from '@/contexts/AuthContext';
import { UserRoleProvider, useUserRole } from '@/contexts/UserRoleContext';
import LoginPage from '@/components/LoginPage';
import DashboardLayout from '@/components/DashboardLayout';
import DashboardHome from '@/components/DashboardHome';
import PoliciesManagement from '@/components/PoliciesManagement';
import ClientsManagement from '@/components/ClientsManagement';
import CarInsuranceManagement from '@/components/CarInsuranceManagement';
import TravelInsuranceManagement from '@/components/TravelInsuranceManagement';
import BikeInsuranceManagement from '@/components/BikeInsuranceManagement';
import LifeInsuranceManagement from '@/components/LifeInsuranceManagement';
import EmployeeHealthManagement from '@/components/EmployeeHealthManagement';
import CorporateInsuranceManagement from '@/components/CorporateInsuranceManagement';
import CarTrackerService from '@/components/CarTrackerService';
import EmployeeLifeInsurance from '@/components/EmployeeLifeInsurance';
import ClientServiceSelection from '@/components/ClientServiceSelection';
import UserManagement from '@/components/UserManagement';
import Reports from '@/components/Reports';
import Settings from '@/components/Settings';

// Service placeholder components for remaining services
const ServicePlaceholder = ({ serviceName, description, icon: Icon }: { 
  serviceName: string; 
  description: string; 
  icon: React.ComponentType<{ className?: string }> 
}) => (
  <div className="flex flex-col items-center justify-center min-h-[60vh] p-4 lg:p-8">
    <div className="bg-gradient-primary rounded-full p-4 lg:p-6 mb-4 lg:mb-6">
      <Icon className="h-8 w-8 lg:h-12 lg:w-12 text-white" />
    </div>
    <h2 className="text-2xl lg:text-3xl font-bold mb-2 lg:mb-4 text-center">{serviceName}</h2>
    <p className="text-base lg:text-lg text-muted-foreground text-center max-w-md mb-4 lg:mb-6 px-4">
      {description}
    </p>
    <div className="bg-accent p-4 lg:p-6 rounded-lg border-2 border-dashed border-border w-full max-w-md">
      <p className="text-sm text-muted-foreground text-center">
        This service management page is under development. 
        <br />
        Full functionality will be available soon.
      </p>
    </div>
  </div>
);

// User-specific components
const MyPoliciesView = () => {
  const { user } = useAuth();
  
  // Mock user policies data
  const userPolicies = [
    {
      id: 'pol-001',
      type: 'Car Insurance',
      policyNumber: 'CAR-2024-001',
      status: 'Active',
      startDate: '2024-01-01',
      endDate: '2024-12-31',
      premium: 1200,
      coverage: 50000,
      vehicle: 'Toyota Camry 2020'
    },
    {
      id: 'pol-002',
      type: 'Life Insurance',
      policyNumber: 'LIFE-2024-001',
      status: 'Active',
      startDate: '2024-01-01',
      endDate: '2029-12-31',
      premium: 600,
      coverage: 100000,
      beneficiaries: ['Fatima Khan', 'Ali Khan']
    },
    {
      id: 'pol-003',
      type: 'Health Insurance',
      policyNumber: 'HEALTH-2024-001',
      status: 'Active',
      startDate: '2024-01-01',
      endDate: '2024-12-31',
      premium: 800,
      coverage: 25000,
      familyMembers: ['Ahmed Khan', 'Fatima Khan', 'Ali Khan']
    }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-primary p-6 rounded-xl text-white">
        <h2 className="text-2xl font-bold mb-2">Welcome back, {user?.name}!</h2>
        <p className="text-blue-100">Manage your personal insurance policies and coverage</p>
      </div>

      {/* Policy Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Active Policies</p>
                <p className="text-2xl font-bold">{userPolicies.length}</p>
              </div>
              <div className="h-12 w-12 bg-green-100 rounded-lg flex items-center justify-center">
                <Shield className="h-6 w-6 text-green-600" />
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Total Coverage</p>
                <p className="text-2xl font-bold">$175K</p>
              </div>
              <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <Heart className="h-6 w-6 text-blue-600" />
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Annual Premium</p>
                <p className="text-2xl font-bold">$2,600</p>
              </div>
              <div className="h-12 w-12 bg-purple-100 rounded-lg flex items-center justify-center">
                <Calculator className="h-6 w-6 text-purple-600" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Policies List */}
      <Card>
        <CardHeader>
          <CardTitle>My Insurance Policies</CardTitle>
          <CardDescription>View and manage your active insurance policies</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {userPolicies.map((policy) => (
              <div key={policy.id} className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                    <Shield className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold">{policy.type}</h3>
                    <p className="text-sm text-muted-foreground">Policy: {policy.policyNumber}</p>
                    <p className="text-sm text-muted-foreground">
                      {policy.startDate} - {policy.endDate}
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <Badge className="bg-green-100 text-green-800">{policy.status}</Badge>
                  <div className="mt-2">
                    <p className="text-sm font-medium">Coverage: ${policy.coverage.toLocaleString()}</p>
                    <p className="text-sm text-muted-foreground">Premium: ${policy.premium}/year</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

const ClaimsView = () => {
  const { user } = useAuth();
  
  // Mock user claims data
  const userClaims = [
    {
      id: 'claim-001',
      type: 'Car Insurance',
      policyNumber: 'CAR-2024-001',
      description: 'Minor accident damage to front bumper',
      amount: 2500,
      status: 'Approved',
      submittedDate: '2024-01-15',
      processedDate: '2024-01-20',
      documents: ['Police Report', 'Photos', 'Repair Estimate']
    },
    {
      id: 'claim-002',
      type: 'Health Insurance',
      policyNumber: 'HEALTH-2024-001',
      description: 'Annual health checkup and blood tests',
      amount: 350,
      status: 'Pending',
      submittedDate: '2024-01-18',
      processedDate: null,
      documents: ['Medical Bills', 'Prescription']
    }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-secondary p-6 rounded-xl text-white">
        <h2 className="text-2xl font-bold mb-2">Claims Management</h2>
        <p className="text-green-100">File new insurance claims and track existing ones</p>
      </div>

      {/* Claims Summary */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Total Claims</p>
                <p className="text-2xl font-bold">{userClaims.length}</p>
              </div>
              <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <FileText className="h-6 w-6 text-blue-600" />
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Approved Claims</p>
                <p className="text-2xl font-bold">1</p>
              </div>
              <div className="h-12 w-12 bg-green-100 rounded-lg flex items-center justify-center">
                <CheckCircle className="h-6 w-6 text-green-600" />
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Total Amount</p>
                <p className="text-2xl font-bold">$2,850</p>
              </div>
              <div className="h-12 w-12 bg-purple-100 rounded-lg flex items-center justify-center">
                <Calculator className="h-6 w-6 text-purple-600" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* New Claim Button */}
      <Card>
        <CardContent className="p-6">
          <div className="text-center">
            <h3 className="text-lg font-semibold mb-2">Need to file a new claim?</h3>
            <p className="text-muted-foreground mb-4">
              Submit a new insurance claim for any covered incident
            </p>
            <Button className="gap-2">
              <Plus className="h-4 w-4" />
              File New Claim
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Claims List */}
      <Card>
        <CardHeader>
          <CardTitle>My Claims</CardTitle>
          <CardDescription>Track the status of your insurance claims</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {userClaims.map((claim) => (
              <div key={claim.id} className="p-4 border rounded-lg">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-secondary rounded-lg flex items-center justify-center">
                      <Shield className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold">{claim.type}</h3>
                      <p className="text-sm text-muted-foreground">Policy: {claim.policyNumber}</p>
                    </div>
                  </div>
                  <Badge className={
                    claim.status === 'Approved' ? 'bg-green-100 text-green-800' :
                    claim.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-red-100 text-red-800'
                  }>
                    {claim.status}
                  </Badge>
                </div>
                <p className="text-sm mb-3">{claim.description}</p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                  <div>
                    <span className="text-muted-foreground">Amount:</span>
                    <p className="font-medium">${claim.amount.toLocaleString()}</p>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Submitted:</span>
                    <p className="font-medium">{claim.submittedDate}</p>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Processed:</span>
                    <p className="font-medium">{claim.processedDate || 'Pending'}</p>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Documents:</span>
                    <p className="font-medium">{claim.documents.length} files</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

const ProfileView = () => {
  const { user } = useAuth();
  
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-tertiary p-6 rounded-xl text-white">
        <h2 className="text-2xl font-bold mb-2">Profile & Settings</h2>
        <p className="text-purple-100">Manage your account and preferences</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Profile Information */}
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Personal Information</CardTitle>
              <CardDescription>Update your personal details and contact information</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name">Full Name</Label>
                  <Input id="name" defaultValue={user?.name} />
                </div>
                <div>
                  <Label htmlFor="email">Email Address</Label>
                  <Input id="email" type="email" defaultValue={user?.email} disabled />
                </div>
                <div>
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" defaultValue="+92 300 1234567" />
                </div>
                <div>
                  <Label htmlFor="department">Department</Label>
                  <Input id="department" defaultValue={user?.department} disabled />
                </div>
              </div>
              <div>
                <Label htmlFor="address">Address</Label>
                <Input id="address" defaultValue="123 Main Street, Karachi, Pakistan" />
              </div>
              <Button>Update Profile</Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Security Settings</CardTitle>
              <CardDescription>Manage your password and security preferences</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="current-password">Current Password</Label>
                <Input id="current-password" type="password" />
              </div>
              <div>
                <Label htmlFor="new-password">New Password</Label>
                <Input id="new-password" type="password" />
              </div>
              <div>
                <Label htmlFor="confirm-password">Confirm New Password</Label>
                <Input id="confirm-password" type="password" />
              </div>
              <Button>Change Password</Button>
            </CardContent>
          </Card>
        </div>

        {/* Profile Summary */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Profile Summary</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-center">
                <div className="w-24 h-24 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl font-bold">
                    {user?.name?.charAt(0)}
                  </span>
                </div>
                <h3 className="text-lg font-semibold">{user?.name}</h3>
                <p className="text-sm text-muted-foreground">{user?.email}</p>
                <Badge className="mt-2">{user?.role}</Badge>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Member Since:</span>
                  <span>January 2024</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Last Login:</span>
                  <span>Today</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Status:</span>
                  <Badge className="bg-green-100 text-green-800">Active</Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button variant="outline" className="w-full justify-start gap-2">
                <Download className="h-4 w-4" />
                Download Documents
              </Button>
              <Button variant="outline" className="w-full justify-start gap-2">
                <FileText className="h-4 w-4" />
                View Policy Documents
              </Button>
              <Button variant="outline" className="w-full justify-start gap-2">
                <Shield className="h-4 w-4" />
                Contact Support
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

// Import icons for placeholders
import { 
  Car, 
  UserCheck,
  Shield,
  Heart,
  Calculator,
  FileText,
  CheckCircle,
  Plus,
  Download
} from 'lucide-react';

const DashboardApp = () => {
  const { isAuthenticated, user } = useAuth();
  const { canAccessService, currentRole, setUserRole } = useUserRole();
  const [activeTab, setActiveTab] = useState('dashboard');

  // Sync user role when user changes
  useEffect(() => {
    if (user && user.role !== currentRole) {
      setUserRole(user.role);
    }
  }, [user, currentRole, setUserRole]);

  if (!isAuthenticated) {
    return <LoginPage />;
  }

  const handleTabChange = (tab: string) => {
    console.log(`Attempting to navigate to: ${tab}`);
    console.log(`User role: ${user?.role}`);
    console.log(`Current role: ${currentRole}`);
    console.log(`Can access service: ${canAccessService(tab)}`);
    
    // Always allow navigation, but show appropriate content based on permissions
    setActiveTab(tab);
  };

  const renderContent = () => {
    console.log(`Rendering content for tab: ${activeTab}`);
    console.log(`User role: ${user?.role}`);
    console.log(`Current role: ${currentRole}`);
    
    // Check access before rendering
    if (!canAccessService(activeTab)) {
      return (
        <div className="flex flex-col items-center justify-center min-h-[60vh] p-4 lg:p-8">
          <div className="bg-red-100 rounded-full p-4 lg:p-6 mb-4 lg:mb-6">
            <div className="h-8 w-8 lg:h-12 lg:w-12 text-red-600 text-2xl lg:text-4xl flex items-center justify-center">🔒</div>
          </div>
          <h2 className="text-2xl lg:text-3xl font-bold mb-4 text-red-700 text-center">Access Restricted</h2>
          <p className="text-base lg:text-lg text-muted-foreground text-center max-w-md mb-4 lg:mb-6 px-4">
            You don't have permission to access this service with your current role: <strong>{currentRole}</strong>
          </p>
          <p className="text-sm text-muted-foreground text-center px-4">
            Please contact your administrator or switch to an appropriate role.
          </p>
        </div>
      );
    }

    switch (activeTab) {
      case 'dashboard':
        return <DashboardHome />;
      case 'policies':
        return <PoliciesManagement />;
      case 'my-policies':
        return <MyPoliciesView />;
      case 'clients':
        return <ClientsManagement />;
      case 'car-insurance':
        return <CarInsuranceManagement />;
      case 'car-tracker':
        return <CarTrackerService />;
      case 'bike-insurance':
        return <BikeInsuranceManagement />;
      case 'life-insurance':
        return <LifeInsuranceManagement />;
      case 'employee-life':
        return <EmployeeLifeInsurance />;
      case 'corporate-insurance':
        return <CorporateInsuranceManagement />;
      case 'travel-insurance':
        return <TravelInsuranceManagement />;
      case 'employee-health':
        return <EmployeeHealthManagement />;
      case 'user-management':
        return <UserManagement />;
      case 'reports':
        return <Reports />;
      case 'settings':
        return <Settings />;
      case 'claims':
        return <ClaimsView />;
      case 'profile':
        return <ProfileView />;
      case 'client-services':
        return <ClientServiceSelection />;
      default:
        return <DashboardHome />;
    }
  };

  return (
    <DashboardLayout activeTab={activeTab} onTabChange={handleTabChange}>
      {renderContent()}
    </DashboardLayout>
  );
};

const AuthWrapper = () => {
  const { user, isAuthenticated } = useAuth();
  
  // Don't render UserRoleProvider until we have a user
  if (!isAuthenticated || !user) {
    return <LoginPage />;
  }
  
  return (
    <UserRoleProvider initialRole={user.role}>
      <DashboardApp />
    </UserRoleProvider>
  );
};

const Index = () => {
  return (
    <AuthProvider>
      <AuthWrapper />
    </AuthProvider>
  );
};

export default Index;
