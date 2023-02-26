import classes from "./About.module.css";
const About = () => {
  return (
    <section className={classes.about}>
      <h3 className={classes["tertiary-heading"]}>About US</h3>
      <p className={classes.paragraph}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
        repudiandae architecto qui adipisci in officiis, aperiam sequi atque
        perferendis eos, autem maiores nisi saepe quisquam hic odio consectetur
        nobis veritatis quasi explicabo obcaecati doloremque? Placeat ratione
        hic aspernatur error blanditiis?
      </p>
    </section>
  );
};

export default About;
