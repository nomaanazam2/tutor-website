const Section = ({ id, className, children }) => (
  <section id={id} className={`py-20 ${className}`}>
    {children}
  </section>
);

export default Section;
