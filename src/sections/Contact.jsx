import { motion } from 'framer-motion';

const Contact = () => {
    return (
        <section id="contact" className="section-padding" style={{ textAlign: 'center', maxWidth: '600px', marginBottom: '100px' }}>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
            >
                <p style={{ color: 'var(--accent-green)', fontFamily: 'var(--font-display)', marginBottom: '20px' }}>05. What's Next?</p>
                <h2 style={{ fontSize: '3rem', color: 'var(--text-primary)', marginBottom: '20px' }}>Get In Touch</h2>
                <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', marginBottom: '50px' }}>
                    I'm currently looking for new opportunities to apply my Full Stack and IoT skills.
                    Whether you have a question or just want to say hi, I'll try my best to get back to you!
                </p>

                <div style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
                    <a href="mailto:sarveeshkaarthic05@gmail.com" className="btn-primary">Say Hello</a>
                    <a href="https://www.linkedin.com/in/sarveesh-kaarthic-ramesh-kannan-750569380" target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ borderColor: 'var(--accent-cyan)', color: 'var(--accent-cyan)' }}>
                        LinkedIn
                    </a>
                </div>
            </motion.div>
        </section>
    );
};

export default Contact;
