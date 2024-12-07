import React from 'react';
import IntroAnimation from '../components/Animation/IntroAnimation.tsx';
import ProblemSolution from '../components/Panels/ProblemSolution.tsx';
import FeatureDashboard from '../components/Dashboard/FeatureDashboard.tsx';
import Testimonials from '../components/Testimonials/Testimonials.tsx';
import Roadmap from '../components/Roadmap/Roadmap.tsx';
import Community from '../components/Community/Community.tsx';
import Footer from '../components/Footer/Footer.tsx';
import Navbar from '../components/Navbar/Navbar.tsx';

const Home: React.FC = () => {
    return (
        <div className="font-sans bg-gray-900 text-white w-full overflow-x-hidden">
            <Navbar />
            <IntroAnimation />
            <ProblemSolution />
            <FeatureDashboard />
            <Testimonials />
            <Roadmap />
            <Community />
            <Footer />
        </div>
    );
};

export default Home;
