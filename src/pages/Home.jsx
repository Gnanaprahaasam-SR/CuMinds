import { Book, Compass, GlobeCentralSouthAsia, Question } from "react-bootstrap-icons";
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
import dummyClientImage1 from '../assets/4.jpg'
import Blog1 from '../assets/Data_Blog.png'
import Blog2 from '../assets/Blog2.png'
import Blog3 from '../assets/Blog3.png'
import CarouselSection from "../components/HeroSection";
import solution from "../images/askSolution.jpg";
import learn from "../images/library.jpg";
import explore from "../images/new-vision.jpg";
import knowledgeHub from "../images/education.jpg";



const cardItems = [
  {
    id: 1,
    icon: <Book fontSize={30} />,
    image: learn,
    title: "Learn & Grow",
    
    description: "Master the ever-evolving landscape of clinical research, healthcare, data science, and AI with L&G. Our platform offers concise, topic-specific video/visual presentations designed for efficient learning.",
    link: "/learnandgrow"
  },
  {
    id: 2,
    icon: <Compass fontSize={30} />,
    image: explore,
    title: "Explore & Gain",
    description: "We offer building comprehensive suite of knowledge-based applications specifically designed for the healthcare and clinical trial landscape. Tackle complex challenges and explore the frontiers of knowledge with tools tailored for researchers and scientists.",
    link: "/exploreandgain"

  },
  {
    id: 3,
    icon: <Question fontSize={34} />,
    image: solution,
    title: "Ask & Solve",
    description: "Get personalized advice, information, and guidance on clinical trials and healthcare. Leverage our network's expertise to tackle specific challenges.",
    link: "/askandsolve"

  },
  {
    id: 4,
    icon: <GlobeCentralSouthAsia fontSize={30} />,
    image: knowledgeHub,
    title: "Knowledge Hub",
    description: "We offer a powerful combination of a knowledge hub and a dynamic blog, designed to quench your thirst for knowledge and keep you at the forefront of the latest trends.",
    link: "/knoeledgehub"

  }
];

const Home = () => {


  return (
    <div>

      <CarouselSection />
      <section className="global-background">
        <div className="container py-5">
          <div className="welcome-section w-75">
            <div className="title">WELCOME TO CuMinds</div>
            <b className="sub-title">Your trusted Knowledge- as- a-Solution (KaaS) Partner.</b>
            <p className="description">CuMinds Innovations is your dedicated Knowledge-as-a-Solution (KaaS) partner. We offer a wide range of knowledge and expertise to empower individuals and organizations. We aim to deliver valuable insights tailored to address the unique real-world business challenges within the Pharmaceutical, Healthcare, and Clinical Trial sectors.</p>
          </div>
        </div>
      </section>

      <div className="bg-white py-3 container">
        <div className="row">
          {cardItems.map((item, index) => (
            <div key={index} className="col-md-3 col-sm-12 g-4 position-relative">
              <div className={`card-item card-item-${index+1} shadow`}>
                <img src={item.image} alt={item.title} className={`w-100 `}/>
                <div className={`card-content card-content-${index + 1}`}>
                  <span className="card-icon px-2">{item.icon}</span>
                  <b className="card-item-title px-2">{item.title}</b>
                  <div className="card-description p-2">{item.description}</div>
                  <Link to={item.link} className="text-decoration-none">
                    <button className="card-button mx-1">
                      <FaArrowRight fontSize={23} className="card-button-icon me-3" />  learn More
                    </button>
                  </Link>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>


      <div className="bg-white py-2">
        <div className="container">
          <div className="whychooseus-section my-5">
            <div className="title">WHY CHOOSE US</div>
            <b className="sub-title">Discover What Sets Us Apart.</b>
            <div className="row ">
              <div className="col-md-4 my-3">
                <div className="whychooseus-card-overset  ">
                  <div
                    className="whychooseus-card-item"
                  >
                    <b className="whychooseus-card-item-title">Customer-Centric</b>
                  </div>
                  <div className="whychooseus-card-description">
                    Your satisfaction is our priority. We listen to your needs and tailor our offerings accordingly.
                  </div>
                </div>
              </div>
              <div className="col-md-4 my-3">
                <div className="whychooseus-card-overset  ">
                  <div
                    className="whychooseus-card-item "
                  >
                    <b className="whychooseus-card-item-title">Affordability</b>
                  </div>
                  <div className="whychooseus-card-description">
                    We offer competitive pricing without compromising on quality.</div>
                </div>
              </div>
              <div className="col-md-4 my-3">
                <div className="whychooseus-card-overset ">
                  <div
                    className="whychooseus-card-item"
                  >
                    <b className="whychooseus-card-item-title">Flexibility</b>
                  </div>
                  <div className="whychooseus-card-description">
                    We adapt to your unique requirements, providing personalized solutions. </div>
                </div>
              </div>
              <div className="col-md-4 my-3 ">
                <div className="whychooseus-card-overset ">
                  <div
                    className="whychooseus-card-item"
                  >
                    <b className="whychooseus-card-item-title">Sustainabilitiy</b>
                  </div>
                  <div className="whychooseus-card-description">
                    We are committed to sustainable practices and environmentally friendly options.</div>
                </div>
              </div>
              <div className="col-md-4 my-3">
                <div className="whychooseus-card-overset">
                  <div
                    className="whychooseus-card-item "
                  >
                    <b className="whychooseus-card-item-title">Reliability</b>
                  </div>
                  <div className="whychooseus-card-description">
                    You can count on us to deliver on time, every time. We meet deadlines and exceed expectations.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="global-background py-2">
        <div className="container my-5">
          <div className="testimonial-section">
            <div className="m-5">
              <div className="testimonial-title">WHAT OUR CLIENTS SAY</div>
              <b className="testimonial-subtitle">Testimonials.</b>

            </div>
            <div className="testimonial-sub-section">
              <div className="row">
                <div className="col-md-4">
                  <div className="testimonial-card">
                    <div style={{ fontSize: "62px", fontWeight: "800" }}>"</div>
                    <div>
                      This AI course online completely changed my perspective on artificial intelligence. I
                      went in with a basic understanding, but the course gave me the tools and knowledge
                      to actually apply AI concepts to my work. Now I can confidently discuss AI with
                      colleagues and even propose AI-powered solutions to improve our efficiency. This
                      course is a must for anyone who wants to stay ahead of the curve in today's job
                      market.
                    </div>
                    <div className="d-flex justify-content-between">
                      <div className="d-flex my-2 gap-1">
                        <b className="text-primary">@</b><b>Sara Lee</b>
                      </div>
                      <img src={dummyClientImage1} alt="client" width="40px" className="rounded-circle" />
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="testimonial-card">
                    <div style={{ fontSize: "62px", fontWeight: "800" }}>"</div>
                    <div>
                      This AI course online completely changed my perspective on artificial intelligence. I
                      went in with a basic understanding, but the course gave me the tools and knowledge
                      to actually apply AI concepts to my work. Now I can confidently discuss AI with
                      colleagues and even propose AI-powered solutions to improve our efficiency. This
                      course is a must for anyone who wants to stay ahead of the curve in today's job
                      market.
                    </div>
                    <div className="d-flex justify-content-between">
                      <div className="d-flex my-2 gap-1">
                        <b className="text-primary">@</b><b>Sara Lee</b>
                      </div>
                      <img src={dummyClientImage1} alt="client" width="40px" className="rounded-circle" />
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="testimonial-card">
                    <div style={{ fontSize: "62px", fontWeight: "800" }}>"</div>
                    <div>
                      This AI course online completely changed my perspective on artificial intelligence. I
                      went in with a basic understanding, but the course gave me the tools and knowledge
                      to actually apply AI concepts to my work. Now I can confidently discuss AI with
                      colleagues and even propose AI-powered solutions to improve our efficiency. This
                      course is a must for anyone who wants to stay ahead of the curve in today's job
                      market.
                    </div>
                    <div className="d-flex justify-content-between">
                      <div className="d-flex my-2 gap-1">
                        <b className="text-primary">@</b><b>Sara Lee</b>
                      </div>
                      <img src={dummyClientImage1} alt="client" width="40px" className="rounded-circle" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container my-5">
          <div className="news-section">
            <div className="title">LATEST NEWS</div>
            <b className="subtitle">Our Insights & Articles.</b>
            <div className="row">
              <div className="col-md-4 my-3">
                <div className="news-card">
                  <div className="image">
                    <img src={Blog1} alt="blog" width="100%" />
                  </div>
                  <div>
                    <div className="date">29 APR, 2024</div>
                    <b className="description">Bridging the Gap: How Data Governance and Data Quality acts as an enabler for Real-World Data Science.
                    </b>
                    <div className="d-flex justify-content-end">
                      <button className="button-secondary " style={{ padding: "5px 20px" }}>Read More</button>
                    </div>
                  </div>

                </div>
              </div>
              <div className="col-md-4 my-3">
                <div className="news-card">
                  <div className="image">
                    <img src={Blog2} alt="blog" width="100%" />
                  </div>
                  <div>
                    <div className="date">20 DECEMBER, 2023</div>
                    <b className="description">Data to Intelligence: How AI Empowers RWD for Target Disease Selection
                    </b>
                    <div className="d-flex justify-content-end">
                      <button className="button-secondary " style={{ padding: "5px 20px" }}>Read More</button>
                    </div>
                  </div>

                </div>
              </div>
              <div className="col-md-4 my-3">
                <div className="news-card">
                  <div className="image">
                    <img src={Blog3} alt="blog" width="100%" />
                  </div>
                  <div>
                    <div className="date">13 DECEMBER, 2023</div>
                    <b className="description">Generative AI in Clinical Trials: A Revolutionizing Force </b>
                    <div className="d-flex justify-content-end">
                      <button className="button-secondary " style={{ padding: "5px 20px" }}>Read More</button>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


    </div>
  );
};

export default Home;
