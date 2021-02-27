import { Link } from "react-router-dom";

import anisha from '../../images/avatar-anisha.png';
import ali from '../../images/avatar-ali.png';
import richard from '../../images/avatar-richard.png';

const Testimonials = () => {
    return (
        <section class="testimonial">
            <h2>What they've said?</h2>
            <div class="testimonial__items flex flex-jc-sb">
                <div class="testimonial__item flex flex-jc-c flex-ai-c">
                    <img src={anisha} alt="foto" />
                    <h3>Anisha Li</h3>
                    <p>"Has supercharge our team's workflow. The <br />
                        maintain visibility on larger milestones at all times<br />
                        keeps everyone motivated."
                    </p>
                </div>
                <div class="testimonial__item flex flex-jc-c flex-ai-c">
                    <img src={ali} alt="foto" />
                    <h3>Anisha Li</h3>
                    <p>"We have been able to cancle so many other subscriptions <br />
                        since using Manage. There is no more cross-channel<br />
                        confusion and everyone is much more focused.""
                    </p>
                </div>
                <div class="testimonial__item flex flex-jc-c flex-ai-c">
                    <img src={richard} alt="foto" />
                    <h3>Anisha Li</h3>
                    <p>"Manage allows us the provide structure and approval <br />
                        keeps us organized and focused I can´t stop records<br />
                        them to everyone i talk to!".
                    </p>
                </div>
            </div>
            <Link to="#" class="button flex flex-jc-c flex-ai-c">Get Started</Link>
        </section>
    );
}

export default Testimonials;