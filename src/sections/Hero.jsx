import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section
            style={{
                height: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                overflow: 'hidden'
            }}
        >
            {/* Background Decorative Elements */}
            <div style={{
                position: 'absolute',
                top: '20%',
                right: '-10%',
                width: '600px',
                height: '600px',
                background: 'radial-gradient(circle, rgba(32,194,14,0.15) 0%, rgba(0,0,0,0) 70%)',
                zIndex: -1
            }} />

            <div className="section-padding" style={{ width: '100%', textAlign: 'left' }}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h3 style={{ color: 'var(--accent-green)', fontFamily: 'var(--font-display)', marginBottom: '10px' }}>
                        Hi, my name is
                    </h3>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    style={{
                        fontSize: 'clamp(40px, 6vw, 80px)', // Adjusted responsive font size for longer name
                        fontWeight: '900',
                        color: 'var(--text-primary)',
                        lineHeight: 1.1,
                        marginBottom: '10px'
                    }}
                >
                    Sarveesh Kaarthic Ramesh Kannan
                </motion.h1>

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    style={{
                        fontSize: 'clamp(30px, 5vw, 60px)',
                        fontWeight: '700',
                        color: 'var(--text-secondary)',
                        lineHeight: 1.1,
                        marginBottom: '30px'
                    }}
                >
                    I build things for the web &amp; beyond.
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    style={{
                        maxWidth: '600px',
                        fontSize: '1.1rem',
                        color: 'var(--text-secondary)',
                        marginBottom: '50px'
                    }}
                >
                    I'm an <b>AI Assisted Full Stack Developer</b>, AI Enthusiast, and a passionate <b>Learner</b>.
                    My passion lies in <b>App Building</b> and leveraging <b>Artificial Intelligence</b> to create impactful solutions.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    style={{ display: 'flex', gap: '20px' }}
                >
                    <a href="#projects" className="btn-primary">Check out my work</a>
                    <a href="https://github.com/SarveeshK" target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ borderColor: 'var(--text-secondary)', color: 'var(--text-secondary)' }}>
                        GitHub Profile
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
