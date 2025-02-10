
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAuth } from "./AuthProvider";
import { supabase } from "@/integrations/supabase/client";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/components/ui/use-toast";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { session } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSignOut = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      toast({
        variant: "destructive",
        title: "Error signing out",
        description: error.message,
      });
    } else {
      navigate("/");
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-lg z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0 flex items-center">
            <span className="text-primary font-bold text-2xl cursor-pointer" onClick={() => navigate("/")}>
              BANKBRIDGE
            </span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-700 hover:text-primary transition-colors">Product</a>
            <a href="#" className="text-gray-700 hover:text-primary transition-colors">Company</a>
            <a href="#" className="text-gray-700 hover:text-primary transition-colors">Feature</a>
            {session ? (
              <Button onClick={handleSignOut} variant="outline">Sign Out</Button>
            ) : (
              <Button onClick={() => navigate("/auth")} variant="default">Sign In</Button>
            )}
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-primary"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
            <a href="#" className="block px-3 py-2 text-gray-700 hover:text-primary transition-colors">Product</a>
            <a href="#" className="block px-3 py-2 text-gray-700 hover:text-primary transition-colors">Company</a>
            <a href="#" className="block px-3 py-2 text-gray-700 hover:text-primary transition-colors">Feature</a>
            {session ? (
              <Button onClick={handleSignOut} variant="outline" className="w-full justify-start">Sign Out</Button>
            ) : (
              <Button onClick={() => navigate("/auth")} variant="default" className="w-full justify-start">Sign In</Button>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
