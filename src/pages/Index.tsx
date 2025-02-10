
import Navbar from "@/components/Navbar";
import ServiceCard from "@/components/ServiceCard";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <main className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">
        {/* Hero Section */}
        <section className="text-center space-y-6 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            Smart Financial Solutions
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Empowering your financial journey with advanced tools and intelligent analysis
          </p>
        </section>

        {/* Services Section */}
        <section className="space-y-8">
          <ServiceCard
            title="Loan analysis"
            description="Loan analysis helps assess a borrower's financial health, repayment capacity, and risk factors to ensure informed lending decisions."
            buttonText="Give loan analysis"
            imagePath="/lovable-uploads/58db3a5c-7eba-49d2-b022-e7df784521c7.png"
          />
          
          <ServiceCard
            title="Tax Tracker"
            description="A tax tracker helps individuals and businesses monitor tax payments, deadlines, deductions, and filings, ensuring compliance and avoiding penalties."
            buttonText="Start now"
            imagePath="/lovable-uploads/58db3a5c-7eba-49d2-b022-e7df784521c7.png"
          />
          
          <ServiceCard
            title="Finance Enhancer"
            description="A finance enhancer optimizes budgeting, investments, and savings strategies to improve financial health and maximize wealth growth."
            buttonText="Get Enhance Now"
            imagePath="/lovable-uploads/58db3a5c-7eba-49d2-b022-e7df784521c7.png"
          />
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
