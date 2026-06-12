import Navbar from '../../components/Navbar/Navbar';
import HeroSection from '../../components/HeroSection/HeroSection';

const LandingPage = () => {
    return (
        <div className='min-h-screen flex flex-col'>
            <Navbar />
            <HeroSection />
        </div>
    );
};

export default LandingPage;