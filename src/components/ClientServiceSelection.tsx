import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Car, 
  Bike, 
  Heart, 
  Shield, 
  Building2, 
  Plane, 
  Activity, 
  UserCheck,
  MapPin,
  Star,
  CheckCircle,
  ArrowRight,
  Calculator,
  FileText,
  Phone,
  Mail
} from 'lucide-react';

const ClientServiceSelection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Mock data for insurance services
  const allServices = [
    {
      id: 'car-insurance',
      name: 'Car Insurance',
      category: 'vehicle',
      icon: Car,
      color: 'bg-blue-500',
      description: 'Comprehensive vehicle protection with roadside assistance',
      features: [
        'Accident coverage',
        'Theft protection',
        'Third-party liability',
        'Roadside assistance',
        'Personal accident cover'
      ],
      startingPrice: 1200,
      rating: 4.8,
      reviews: 1247,
      popular: true
    },
    {
      id: 'bike-insurance',
      name: 'Bike Insurance',
      category: 'vehicle',
      icon: Bike,
      color: 'bg-green-500',
      description: 'Motorcycle and scooter insurance with comprehensive coverage',
      features: [
        'Accident coverage',
        'Theft protection',
        'Third-party liability',
        'Personal accident cover',
        'Accessories coverage'
      ],
      startingPrice: 800,
      rating: 4.6,
      reviews: 892,
      popular: false
    },
    {
      id: 'life-insurance',
      name: 'Life Insurance',
      category: 'life',
      icon: Heart,
      color: 'bg-red-500',
      description: 'Secure your family\'s future with comprehensive life coverage',
      features: [
        'Death benefit',
        'Critical illness cover',
        'Disability benefit',
        'Maturity benefit',
        'Tax benefits'
      ],
      startingPrice: 600,
      rating: 4.9,
      reviews: 2156,
      popular: true
    },
    {
      id: 'health-insurance',
      name: 'Health Insurance',
      category: 'health',
      icon: Activity,
      color: 'bg-purple-500',
      description: 'Comprehensive health coverage for you and your family',
      features: [
        'Hospitalization cover',
        'Pre and post hospitalization',
        'Day care procedures',
        'Ambulance charges',
        'Health checkup benefits'
      ],
      startingPrice: 800,
      rating: 4.7,
      reviews: 1834,
      popular: true
    },
    {
      id: 'travel-insurance',
      name: 'Travel Insurance',
      category: 'travel',
      icon: Plane,
      color: 'bg-cyan-500',
      description: 'Travel with peace of mind with comprehensive travel protection',
      features: [
        'Trip cancellation',
        'Medical emergencies',
        'Baggage loss',
        'Flight delays',
        '24/7 assistance'
      ],
      startingPrice: 200,
      rating: 4.5,
      reviews: 567,
      popular: false
    },
    {
      id: 'home-insurance',
      name: 'Home Insurance',
      category: 'property',
      icon: Building2,
      color: 'bg-indigo-500',
      description: 'Protect your home and belongings with comprehensive coverage',
      features: [
        'Building coverage',
        'Contents protection',
        'Natural disasters',
        'Theft protection',
        'Liability coverage'
      ],
      startingPrice: 400,
      rating: 4.4,
      reviews: 734,
      popular: false
    },
    {
      id: 'car-tracker',
      name: 'Car Tracker Service',
      category: 'tracking',
      icon: MapPin,
      color: 'bg-orange-500',
      description: 'Advanced vehicle tracking and monitoring system',
      features: [
        'Real-time GPS tracking',
        'Geofencing alerts',
        'Speed monitoring',
        'Fuel monitoring',
        'Maintenance alerts'
      ],
      startingPrice: 300,
      rating: 4.6,
      reviews: 445,
      popular: false
    },
    {
      id: 'employee-life',
      name: 'Employee Life Insurance',
      category: 'corporate',
      icon: UserCheck,
      color: 'bg-pink-500',
      description: 'Group life insurance plans for employees',
      features: [
        'Group coverage',
        'Death benefit',
        'Critical illness',
        'Disability benefit',
        'Tax advantages'
      ],
      startingPrice: 500,
      rating: 4.7,
      reviews: 678,
      popular: false
    }
  ];

  const categories = [
    { id: 'all', name: 'All Services', count: allServices.length },
    { id: 'vehicle', name: 'Vehicle Insurance', count: allServices.filter(s => s.category === 'vehicle').length },
    { id: 'life', name: 'Life Insurance', count: allServices.filter(s => s.category === 'life').length },
    { id: 'health', name: 'Health Insurance', count: allServices.filter(s => s.category === 'health').length },
    { id: 'travel', name: 'Travel Insurance', count: allServices.filter(s => s.category === 'travel').length },
    { id: 'property', name: 'Property Insurance', count: allServices.filter(s => s.category === 'property').length },
    { id: 'tracking', name: 'Tracking Services', count: allServices.filter(s => s.category === 'tracking').length },
    { id: 'corporate', name: 'Corporate Plans', count: allServices.filter(s => s.category === 'corporate').length }
  ];

  const filteredServices = selectedCategory === 'all' 
    ? allServices 
    : allServices.filter(service => service.category === selectedCategory);

  const getCategoryColor = (category: string) => {
    const colors = {
      vehicle: 'bg-blue-100 text-blue-800',
      life: 'bg-red-100 text-red-800',
      health: 'bg-purple-100 text-purple-800',
      travel: 'bg-cyan-100 text-cyan-800',
      property: 'bg-indigo-100 text-indigo-800',
      tracking: 'bg-orange-100 text-orange-800',
      corporate: 'bg-pink-100 text-pink-800'
    };
    return colors[category as keyof typeof colors] || 'bg-gray-100 text-gray-800';
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">Choose Your Insurance Service</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Browse through our comprehensive range of insurance services and choose the perfect coverage for your needs
        </p>
      </div>

      {/* Category Tabs */}
      <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="w-full">
        <TabsList className="grid w-full grid-cols-4 lg:grid-cols-8">
          {categories.map((category) => (
            <TabsTrigger key={category.id} value={category.id} className="flex flex-col gap-1">
              <span className="text-xs">{category.name}</span>
              <Badge variant="secondary" className="text-xs">{category.count}</Badge>
            </TabsTrigger>
          ))}
        </TabsList>

        <TabsContent value={selectedCategory} className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredServices.map((service) => (
              <Card key={service.id} className="group hover:shadow-lg transition-all duration-300">
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <div className={`w-12 h-12 ${service.color} rounded-lg flex items-center justify-center`}>
                      <service.icon className="h-6 w-6 text-white" />
                    </div>
                    {service.popular && (
                      <Badge className="bg-yellow-100 text-yellow-800">
                        <Star className="h-3 w-3 mr-1" />
                        Popular
                      </Badge>
                    )}
                  </div>
                  <CardTitle className="text-lg">{service.name}</CardTitle>
                  <CardDescription className="text-sm leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {/* Features */}
                  <div className="space-y-2">
                    <h4 className="text-sm font-medium text-muted-foreground">Key Features:</h4>
                    <ul className="space-y-1">
                      {service.features.slice(0, 3).map((feature, index) => (
                        <li key={index} className="flex items-center gap-2 text-sm">
                          <CheckCircle className="h-3 w-3 text-green-600" />
                          {feature}
                        </li>
                      ))}
                      {service.features.length > 3 && (
                        <li className="text-xs text-muted-foreground">
                          +{service.features.length - 3} more features
                        </li>
                      )}
                    </ul>
                  </div>

                  {/* Rating and Price */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 text-yellow-500 fill-current" />
                        <span className="text-sm font-medium">{service.rating}</span>
                      </div>
                      <span className="text-xs text-muted-foreground">({service.reviews} reviews)</span>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-muted-foreground">Starting from</p>
                      <p className="text-lg font-bold">${service.startingPrice}/year</p>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2">
                    <Button className="flex-1 gap-2">
                      <Calculator className="h-4 w-4" />
                      Get Quote
                    </Button>
                    <Button variant="outline" className="gap-2">
                      <ArrowRight className="h-4 w-4" />
                      Learn More
                    </Button>
                  </div>

                  {/* Quick Actions */}
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <Button variant="ghost" size="sm" className="h-6 px-2 gap-1">
                      <FileText className="h-3 w-3" />
                      Documents
                    </Button>
                    <Button variant="ghost" size="sm" className="h-6 px-2 gap-1">
                      <Phone className="h-3 w-3" />
                      Call
                    </Button>
                    <Button variant="ghost" size="sm" className="h-6 px-2 gap-1">
                      <Mail className="h-3 w-3" />
                      Email
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>

      {/* Call to Action */}
      <Card className="bg-gradient-primary text-white">
        <CardContent className="p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Need Help Choosing?</h2>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Our insurance experts are here to help you find the perfect coverage. 
            Get personalized recommendations based on your needs and budget.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg" className="gap-2">
              <Phone className="h-5 w-5" />
              Speak to Expert
            </Button>
            <Button variant="outline" size="lg" className="gap-2 border-white text-white hover:bg-white hover:text-primary">
              <Calculator className="h-5 w-5" />
              Get Free Consultation
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ClientServiceSelection;
