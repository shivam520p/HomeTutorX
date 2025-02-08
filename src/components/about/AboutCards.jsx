import AboutCard1 from "../../assets/images/About1.jpeg";
import AboutCard2 from "../../assets/images/About2.jpeg";
import AboutCard3 from "../../assets/images/About3.jpeg";
import AboutCard4 from "../../assets/images/About4.jpeg";
import AboutCard from "./AboutCard";

const cards = [
  {
    cardName: "Dharmendra Prasad",
    image: AboutCard1,
    rate: 4.9,
    desc: "As a teacher, HomeTutorX has been a game-changer for me. The platform is easy to use, and I love how I can set my own schedule and rates. The student-tutor matching system is efficient, and I've been able to connect with highly motivated students. Payments are secure and timely, making it a reliable platform for online tutoring.",
  },
  {
    cardName: "Pooja Tyagi",
    image: AboutCard2,
    rate: 4.8,
    desc: "One of my biggest concerns with online tutoring was payment security, but HomeTutorX has been 100% reliable. I get paid on time, and the system is transparent. Additionally, the platform fosters a great community of educators who share resources and best practices.",
  },
  {
    cardName: "Meenakshi Choudhary",
    image: AboutCard3,
    rate: 4.9,
    desc: "I’ve used several online tutoring platforms, but HomeTutorX stands out for its smooth interface and ease of use. The dashboard makes scheduling sessions simple, and communication with students is seamless. I appreciate the support team for their quick responses whenever I need assistance.",
  },
  {
    cardName: "Hariram Pal",
    image: AboutCard4,
    rate: 4.8,
    desc: "HomeTutorX has allowed me to reach students beyond my local area, giving me the opportunity to teach internationally. The platform helps me showcase my expertise and build a strong student base. I highly recommend it to any teacher looking to expand their tutoring services online.",
  },
];

const AboutCards = () => (
  <div className="px-4 pb-10 sm:px-6 lg:px-8">
    <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5 mt-5">
      {cards.map((room, index) => (
        <AboutCard key={index} {...room} />
      ))}
    </div>
  </div>
);

export default AboutCards;
