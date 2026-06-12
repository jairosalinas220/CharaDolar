import Navbar from '../../components/Navbar/Navbar';



const ContentLayout = ({ children }) => {
    return (
        <div className='min-h-screen flex flex-col'>
            <Navbar />
            <main className='flex-grow'>
                {children}
            </main>
        </div>
    );
};

export default ContentLayout;