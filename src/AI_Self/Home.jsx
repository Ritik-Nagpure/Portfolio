
import Banner from './Sections/Banner';
import Introduction from './Sections/Introduction';
import Experience from './Sections/Experience';
import Projects from './Sections/Projects';
import Contact from './Sections/Contact';

const App = () => {
    return (
        <div className=' flex flex-col gap-y-30 g-gradient-to-br from-gray-900 via-gray-800 to-black w-full'>
            <div className=''>
                <Banner />
            </div>
            <div className='p-4 m-4'><Introduction /></div>
            <div className='p-4 m-4'><Experience /></div>
            <div className='p-4 m-4'><Projects /></div>
            <div className='p-4 m-4'><Contact /></div>
        </div>
    )
};

export default App;
