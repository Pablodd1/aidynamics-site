import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import ROICalculator from '@/components/ROICalculator';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import LeadForm from '@/components/LeadForm';
import Footer from '@/components/Footer';
import AIChat from '@/components/AIChat';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <div className="relative">
          {/* Clients / stats bar */}
          <div className="bg-white border-b border-gray-100 py-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                <div>
                  <div className="text-3xl font-bold gradient-text">50+</div>
                  <div className="text-gray-500 text-sm mt-1">AI Systems Deployed</div>
                </div>
                <div>
                  <div className="text-3xl font-bold gradient-text">$2M+</div>
                  <div className="text-gray-500 text-sm mt-1">Client Savings Generated</div>
                </div>
                <div>
                  <div className="text-3xl font-bold gradient-text">6</div>
                  <div className="text-gray-500 text-sm mt-1">Industries Served</div>
                </div>
                <div>
                  <div className="text-3xl font-bold gradient-text">100%</div>
                  <div className="text-gray-500 text-sm mt-1">Data Ownership</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Services />
        <ROICalculator />
        <Testimonials />
        <FAQ />
        <LeadForm />
      </main>
      <Footer />
      <AIChat />
    </>
  );
}
