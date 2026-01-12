import { motion } from 'framer-motion';

const About = () => {
    return (
        <section id="about" className="section-padding">
            <motion.h2
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '2rem',
                    marginBottom: '40px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '20px'
                }}
            >
                <span style={{ color: 'var(--accent-green)' }}>01.</span> About Me
                <div style={{ height: '1px', background: 'var(--border)', flex: 1, maxWidth: '300px' }}></div>
            </motion.h2>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '50px' }}>
                <div style={{ color: 'var(--text-secondary)', fontSize: '1.1rem' }}>
                    <p style={{ marginBottom: '20px' }}>
                        Hello! My journey started with a curiosity for how things work, which led me to dive deep into Full Stack Development and Artificial Intelligence.
                        I enjoy creating scalable, user-centric applications and exploring how AI can enhance digital experiences.
                    </p>

                    <p style={{ marginBottom: '20px', borderLeft: '3px solid var(--accent-green)', paddingLeft: '20px', fontStyle: 'italic', color: 'var(--text-primary)' }}>
                        "My intent is to continuously learn and grow. I believe in 'learning by building,' and I thrive in environments
                        where I can challenge myself with new technologies, from advanced Web Frameworks to Generative AI models."
                    </p>

                    <p>
                        I've also actively participated in workshops and hackathons to sharpen my skills:
                    </p>
                    <ul style={{ marginTop: '20px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '10px' }}>
                        {[
                            "Web Development Hackathons",
                            "PCB Design Workshop (IIST Trivandrum)",
                            "Robotics & IoT Workshops (Centers of Excellence)"
                        ].map((item, i) => (
                            <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                <span style={{ color: 'var(--accent-green)' }}>▹</span> {item}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default About;
