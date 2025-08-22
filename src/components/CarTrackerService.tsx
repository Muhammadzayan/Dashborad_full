import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  MapPin, 
  Car, 
  Navigation, 
  Clock, 
  Gauge, 
  Fuel, 
  AlertTriangle,
  Play,
  Pause,
  RefreshCw,
  Download,
  Eye,
  Settings,
  Phone,
  Mail
} from 'lucide-react';

const CarTrackerService: React.FC = () => {
  const [selectedVehicle, setSelectedVehicle] = useState('car-001');
  const [trackingStatus, setTrackingStatus] = useState('active');

  // Mock data for demonstration
  const vehicles = [
    {
      id: 'car-001',
      name: 'Toyota Camry',
      plateNumber: 'ABC-123',
      status: 'active',
      location: 'Karachi, Pakistan',
      coordinates: { lat: 24.8607, lng: 67.0011 },
      speed: 45,
      fuel: 75,
      lastUpdate: '2 minutes ago',
      driver: 'Ahmed Khan',
      phone: '+92 300 1234567'
    },
    {
      id: 'car-002',
      name: 'Honda Civic',
      plateNumber: 'XYZ-789',
      status: 'idle',
      location: 'Lahore, Pakistan',
      coordinates: { lat: 31.5204, lng: 74.3587 },
      speed: 0,
      fuel: 60,
      lastUpdate: '5 minutes ago',
      driver: 'Fatima Ali',
      phone: '+92 300 7654321'
    },
    {
      id: 'car-003',
      name: 'Suzuki Swift',
      plateNumber: 'DEF-456',
      status: 'maintenance',
      location: 'Islamabad, Pakistan',
      coordinates: { lat: 33.6844, lng: 73.0479 },
      speed: 0,
      fuel: 90,
      lastUpdate: '1 hour ago',
      driver: 'Usman Ahmed',
      phone: '+92 300 9876543'
    }
  ];

  const alerts = [
    {
      id: '1',
      type: 'speed',
      message: 'Vehicle ABC-123 exceeding speed limit',
      severity: 'warning',
      time: '2 minutes ago',
      vehicle: 'car-001'
    },
    {
      id: '2',
      type: 'fuel',
      message: 'Vehicle XYZ-789 fuel level low',
      severity: 'critical',
      time: '15 minutes ago',
      vehicle: 'car-002'
    },
    {
      id: '3',
      type: 'maintenance',
      message: 'Vehicle DEF-456 due for service',
      severity: 'info',
      time: '1 hour ago',
      vehicle: 'car-003'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-100 text-green-800';
      case 'idle': return 'bg-yellow-100 text-yellow-800';
      case 'maintenance': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'critical': return 'bg-red-100 text-red-800';
      case 'warning': return 'bg-yellow-100 text-yellow-800';
      case 'info': return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const selectedVehicleData = vehicles.find(v => v.id === selectedVehicle);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Car Tracker Service</h1>
          <p className="text-muted-foreground">
            Real-time vehicle tracking, monitoring, and fleet management
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline" className="gap-2">
            <RefreshCw className="h-4 w-4" />
            Refresh Data
          </Button>
          <Button className="gap-2">
            <Download className="h-4 w-4" />
            Export Report
          </Button>
        </div>
      </div>

      {/* Vehicle Selection */}
      <Card>
        <CardHeader>
          <CardTitle>Select Vehicle</CardTitle>
          <CardDescription>Choose a vehicle to track and monitor</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {vehicles.map((vehicle) => (
              <div
                key={vehicle.id}
                className={`p-4 rounded-lg border-2 cursor-pointer transition-all ${
                  selectedVehicle === vehicle.id
                    ? 'border-primary bg-primary/5'
                    : 'border-border hover:border-primary/50'
                }`}
                onClick={() => setSelectedVehicle(vehicle.id)}
              >
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-semibold">{vehicle.name}</h3>
                  <Badge className={getStatusColor(vehicle.status)}>
                    {vehicle.status}
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground mb-2">
                  {vehicle.plateNumber}
                </p>
                <p className="text-sm text-muted-foreground mb-3">
                  {vehicle.location}
                </p>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Speed: {vehicle.speed} km/h</span>
                  <span className="text-muted-foreground">Fuel: {vehicle.fuel}%</span>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Main Tracking Interface */}
      <Tabs defaultValue="tracking" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="tracking">Live Tracking</TabsTrigger>
          <TabsTrigger value="alerts">Alerts</TabsTrigger>
          <TabsTrigger value="history">History</TabsTrigger>
          <TabsTrigger value="settings">Settings</TabsTrigger>
        </TabsList>

        {/* Live Tracking */}
        <TabsContent value="tracking" className="space-y-6">
          {selectedVehicleData && (
            <>
              {/* Map Placeholder */}
              <Card>
                <CardHeader>
                  <CardTitle>Live Location</CardTitle>
                  <CardDescription>
                    Real-time GPS tracking for {selectedVehicleData.name}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-96 bg-gray-100 rounded-lg flex items-center justify-center border-2 border-dashed border-gray-300">
                    <div className="text-center">
                      <MapPin className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                      <p className="text-gray-600 font-medium">Interactive Map</p>
                      <p className="text-sm text-gray-500">
                        Coordinates: {selectedVehicleData.coordinates.lat}, {selectedVehicleData.coordinates.lng}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Vehicle Details */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Vehicle Information</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label className="text-sm font-medium">Vehicle Name</Label>
                        <p className="text-lg font-semibold">{selectedVehicleData.name}</p>
                      </div>
                      <div>
                        <Label className="text-sm font-medium">Plate Number</Label>
                        <p className="text-lg font-semibold">{selectedVehicleData.plateNumber}</p>
                      </div>
                      <div>
                        <Label className="text-sm font-medium">Driver</Label>
                        <p className="text-lg font-semibold">{selectedVehicleData.driver}</p>
                      </div>
                      <div>
                        <Label className="text-sm font-medium">Status</Label>
                        <Badge className={getStatusColor(selectedVehicleData.status)}>
                          {selectedVehicleData.status}
                        </Badge>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <Button variant="outline" className="gap-2">
                        <Phone className="h-4 w-4" />
                        Call Driver
                      </Button>
                      <Button variant="outline" className="gap-2">
                        <Mail className="h-4 w-4" />
                        Send Message
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Real-time Metrics</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center p-4 bg-blue-50 rounded-lg">
                        <Gauge className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                        <p className="text-2xl font-bold text-blue-600">{selectedVehicleData.speed}</p>
                        <p className="text-sm text-blue-600">km/h</p>
                      </div>
                      <div className="text-center p-4 bg-green-50 rounded-lg">
                        <Fuel className="h-8 w-8 text-green-600 mx-auto mb-2" />
                        <p className="text-2xl font-bold text-green-600">{selectedVehicleData.fuel}%</p>
                        <p className="text-sm text-green-600">Fuel Level</p>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">Last Update</span>
                        <span className="text-sm font-medium">{selectedVehicleData.lastUpdate}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">Location</span>
                        <span className="text-sm font-medium">{selectedVehicleData.location}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </>
          )}
        </TabsContent>

        {/* Alerts */}
        <TabsContent value="alerts" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>System Alerts</CardTitle>
              <CardDescription>Real-time notifications and warnings</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {alerts.map((alert) => (
                  <div key={alert.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center gap-4">
                      <div className={`p-2 rounded-full ${getSeverityColor(alert.severity)}`}>
                        <AlertTriangle className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="font-medium">{alert.message}</p>
                        <p className="text-sm text-muted-foreground">
                          Vehicle: {vehicles.find(v => v.id === alert.vehicle)?.name} • {alert.time}
                        </p>
                      </div>
                    </div>
                    <Badge className={getSeverityColor(alert.severity)}>
                      {alert.severity}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* History */}
        <TabsContent value="history" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Trip History</CardTitle>
              <CardDescription>Detailed journey logs and analytics</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center border-2 border-dashed border-gray-300">
                <div className="text-center">
                  <Clock className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-600 font-medium">Trip History</p>
                  <p className="text-sm text-gray-500">View detailed journey logs and analytics</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Settings */}
        <TabsContent value="settings" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Tracking Settings</CardTitle>
              <CardDescription>Configure tracking parameters and notifications</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center border-2 border-dashed border-gray-300">
                <div className="text-center">
                  <Settings className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-600 font-medium">Tracking Settings</p>
                  <p className="text-sm text-gray-500">Configure tracking parameters and notifications</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default CarTrackerService;
