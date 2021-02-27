import bgMain from '../../images/Sustracción 2.svg';
import About from './About';
import Testimonials from './Testimonials';

const Main = () => {
    return (
        <main class="main">
            <img src={bgMain} alt="fondo2" class="fondo-main" />
            <About></About>
            <Testimonials></Testimonials>
        </main>
    );
}

export default Main;