import Navbar from '../../components/Navbar/Navbar';
import HeroSection from '../../components/HeroSection/HeroSection';
import HowItWorksSection from '../../components/HowItWorksSection/HowItWorksSection';

const LandingPage = () => {
    return (
        <div className='min-h-screen flex flex-col'>
            <Navbar />
            <HeroSection />
            <HowItWorksSection />
        </div>
    );
};

export default LandingPage;