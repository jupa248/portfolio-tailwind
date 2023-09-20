import aboutSvg from '../assets/about.svg';
import SectionTitle from './SectionTitle';
const About = () => {
  return (
    <section className="bg-white py-20" id="about">
      <div className="align-element grid md:grid-cols-2 items-center gap-16">
        <img src={aboutSvg} alt="about" className="w-full h-64" />
        <article>
          <SectionTitle text="code and coffee" />
          <p className="text-slate-600 mt-8 leading-loose">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
            ipsum provident impedit aspernatur at est et sunt. Eos modi vitae,
            voluptas magnam id ut repudiandae nihil maxime repellendus corporis!
            Ut!
          </p>
        </article>
      </div>
    </section>
  );
};
export default About;
