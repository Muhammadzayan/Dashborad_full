import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => {
  console.log('App component rendering...');
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/dashboard/*" element={<Index />} />
            <Route path="/policies/*" element={<Index />} />
            <Route path="/clients/*" element={<Index />} />
            <Route path="/car-insurance/*" element={<Index />} />
            <Route path="/bike-insurance/*" element={<Index />} />
            <Route path="/life-insurance/*" element={<Index />} />
            <Route path="/travel-insurance/*" element={<Index />} />
            <Route path="/employee-health/*" element={<Index />} />
            <Route path="/corporate-insurance/*" element={<Index />} />
            <Route path="/user-management/*" element={<Index />} />
            <Route path="/reports/*" element={<Index />} />
            <Route path="/settings/*" element={<Index />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);
};

export default App;
