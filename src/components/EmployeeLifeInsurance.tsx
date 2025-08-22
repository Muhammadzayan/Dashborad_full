import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { 
  Users, 
  Heart, 
  Shield, 
  Calculator, 
  FileText, 
  Download,
  Plus,
  Edit,
  Trash2,
  Eye,
  CheckCircle,
  AlertTriangle,
  Info,
  Building2,
  UserCheck
} from 'lucide-react';

const EmployeeLifeInsurance: React.FC = () => {
  const [selectedPlan, setSelectedPlan] = useState('plan-001');
  const [selectedEmployee, setSelectedEmployee] = useState('emp-001');

  // Mock data for demonstration
  const plans = [
    {
      id: 'plan-001',
      name: 'Basic Group Life',
      description: 'Essential life insurance coverage for all employees',
      coverage: 50000,
      premium: 25,
      maxAge: 65,
      waitingPeriod: '30 days',
      features: ['Death benefit', 'Accidental death', 'Basic coverage'],
      status: 'active'
    },
    {
      id: 'plan-002',
      name: 'Premium Group Life',
      description: 'Enhanced coverage with additional benefits',
      coverage: 100000,
      premium: 45,
      maxAge: 70,
      waitingPeriod: '15 days',
      features: ['Death benefit', 'Accidental death', 'Critical illness', 'Disability benefit'],
      status: 'active'
    },
    {
      id: 'plan-003',
      name: 'Executive Life Plus',
      description: 'Comprehensive coverage for senior management',
      coverage: 250000,
      premium: 85,
      maxAge: 75,
      waitingPeriod: 'Immediate',
      features: ['Death benefit', 'Accidental death', 'Critical illness', 'Disability benefit', 'Travel coverage'],
      status: 'active'
    }
  ];

  const employees = [
    {
      id: 'emp-001',
      name: 'Ahmed Khan',
      employeeId: 'EMP001',
      department: 'Engineering',
      position: 'Senior Developer',
      age: 32,
      salary: 85000,
      plan: 'plan-001',
      coverage: 50000,
      premium: 25,
      startDate: '2024-01-15',
      status: 'active',
      beneficiaries: ['Fatima Khan', 'Ali Khan']
    },
    {
      id: 'emp-002',
      name: 'Sarah Ahmed',
      employeeId: 'EMP002',
      department: 'Marketing',
      position: 'Marketing Manager',
      age: 28,
      salary: 75000,
      plan: 'plan-002',
      coverage: 100000,
      premium: 45,
      startDate: '2024-02-01',
      status: 'active',
      beneficiaries: ['Usman Ahmed', 'Aisha Ahmed']
    },
    {
      id: 'emp-003',
      name: 'Muhammad Ali',
      employeeId: 'EMP003',
      department: 'Sales',
      position: 'Sales Director',
      age: 45,
      salary: 120000,
      plan: 'plan-003',
      coverage: 250000,
      premium: 85,
      startDate: '2024-01-01',
      status: 'active',
      beneficiaries: ['Amina Ali', 'Hassan Ali', 'Zara Ali']
    }
  ];

  const claims = [
    {
      id: 'claim-001',
      employeeId: 'EMP001',
      employeeName: 'Ahmed Khan',
      type: 'Death Benefit',
      amount: 50000,
      status: 'pending',
      submittedDate: '2024-01-20',
      description: 'Natural death claim'
    },
    {
      id: 'claim-002',
      employeeId: 'EMP002',
      employeeName: 'Sarah Ahmed',
      type: 'Critical Illness',
      amount: 50000,
      status: 'approved',
      submittedDate: '2024-01-15',
      description: 'Cancer diagnosis claim'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-100 text-green-800';
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'approved': return 'bg-blue-100 text-blue-800';
      case 'rejected': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const selectedPlanData = plans.find(p => p.id === selectedPlan);
  const selectedEmployeeData = employees.find(e => e.id === selectedEmployee);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Employee Life Insurance</h1>
          <p className="text-muted-foreground">
            Group life insurance plans and employee coverage management
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline" className="gap-2">
            <Download className="h-4 w-4" />
            Export Report
          </Button>
          <Button className="gap-2">
            <Plus className="h-4 w-4" />
            Add Employee
          </Button>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Total Employees</p>
                <p className="text-2xl font-bold">{employees.length}</p>
              </div>
              <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <Users className="h-6 w-6 text-blue-600" />
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Active Plans</p>
                <p className="text-2xl font-bold">{plans.length}</p>
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
                <p className="text-2xl font-bold">$400K</p>
              </div>
              <div className="h-12 w-12 bg-purple-100 rounded-lg flex items-center justify-center">
                <Heart className="h-6 w-6 text-purple-600" />
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Monthly Premium</p>
                <p className="text-2xl font-bold">$155</p>
              </div>
              <div className="h-12 w-12 bg-orange-100 rounded-lg flex items-center justify-center">
                <Calculator className="h-6 w-6 text-orange-600" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Main Interface */}
      <Tabs defaultValue="plans" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="plans">Insurance Plans</TabsTrigger>
          <TabsTrigger value="employees">Employees</TabsTrigger>
          <TabsTrigger value="claims">Claims</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
        </TabsList>

        {/* Insurance Plans */}
        <TabsContent value="plans" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Available Plans</CardTitle>
              <CardDescription>Group life insurance plans and their features</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {plans.map((plan) => (
                  <div
                    key={plan.id}
                    className={`p-6 rounded-lg border-2 cursor-pointer transition-all ${
                      selectedPlan === plan.id
                        ? 'border-primary bg-primary/5'
                        : 'border-border hover:border-primary/50'
                    }`}
                    onClick={() => setSelectedPlan(plan.id)}
                  >
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-semibold">{plan.name}</h3>
                      <Badge className={getStatusColor(plan.status)}>
                        {plan.status}
                      </Badge>
                    </div>
                    <p className="text-muted-foreground mb-4">{plan.description}</p>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">Coverage:</span>
                        <span className="font-semibold">${plan.coverage.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">Monthly Premium:</span>
                        <span className="font-semibold">${plan.premium}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">Max Age:</span>
                        <span className="font-semibold">{plan.maxAge} years</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">Waiting Period:</span>
                        <span className="font-semibold">{plan.waitingPeriod}</span>
                      </div>
                    </div>
                    <div className="mt-4">
                      <h4 className="font-medium mb-2">Features:</h4>
                      <ul className="space-y-1">
                        {plan.features.map((feature, index) => (
                          <li key={index} className="flex items-center gap-2 text-sm">
                            <CheckCircle className="h-4 w-4 text-green-600" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Employees */}
        <TabsContent value="employees" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Employee Coverage</CardTitle>
              <CardDescription>Manage employee life insurance enrollments</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {employees.map((employee) => (
                  <div
                    key={employee.id}
                    className={`p-4 rounded-lg border-2 cursor-pointer transition-all ${
                      selectedEmployee === employee.id
                        ? 'border-primary bg-primary/5'
                        : 'border-border hover:border-primary/50'
                    }`}
                    onClick={() => setSelectedEmployee(employee.id)}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                          <span className="text-white font-semibold">
                            {employee.name.charAt(0)}
                          </span>
                        </div>
                        <div>
                          <h3 className="font-semibold">{employee.name}</h3>
                          <p className="text-sm text-muted-foreground">
                            {employee.position} • {employee.department}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            ID: {employee.employeeId} • Age: {employee.age}
                          </p>
                        </div>
                      </div>
                      <div className="text-right">
                        <Badge className={getStatusColor(employee.status)}>
                          {employee.status}
                        </Badge>
                        <div className="mt-2">
                          <p className="text-sm font-medium">Coverage: ${employee.coverage.toLocaleString()}</p>
                          <p className="text-sm text-muted-foreground">Premium: ${employee.premium}/month</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Claims */}
        <TabsContent value="claims" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Insurance Claims</CardTitle>
              <CardDescription>Track and manage life insurance claims</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {claims.map((claim) => (
                  <div key={claim.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center gap-4">
                      <div className={`p-2 rounded-full ${getStatusColor(claim.status)}`}>
                        <FileText className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="font-medium">{claim.employeeName}</p>
                        <p className="text-sm text-muted-foreground">
                          {claim.type} • ${claim.amount.toLocaleString()}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          Submitted: {claim.submittedDate}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge className={getStatusColor(claim.status)}>
                        {claim.status}
                      </Badge>
                      <Button variant="outline" size="sm">
                        <Eye className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Analytics */}
        <TabsContent value="analytics" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Coverage Distribution</CardTitle>
                <CardDescription>Employee coverage by plan type</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center border-2 border-dashed border-gray-300">
                  <div className="text-center">
                    <Building2 className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-600 font-medium">Coverage Analytics</p>
                    <p className="text-sm text-gray-500">View coverage distribution and trends</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Claims Analysis</CardTitle>
                <CardDescription>Claims statistics and trends</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center border-2 border-dashed border-gray-300">
                  <div className="text-center">
                    <UserCheck className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-600 font-medium">Claims Analytics</p>
                    <p className="text-sm text-gray-500">View claims statistics and trends</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default EmployeeLifeInsurance;
