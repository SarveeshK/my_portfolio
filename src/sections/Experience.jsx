import { motion } from 'framer-motion';

const Experience = () => {
    return (
        <section id="experience" className="section-padding" style={{ maxWidth: '800px' }}>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', marginBottom: '40px', display: 'flex', alignItems: 'center', gap: '20px' }}>
                <span style={{ color: 'var(--accent-green)' }}>03.</span> Where I've Worked
                <div style={{ height: '1px', background: 'var(--border)', flex: 1, maxWidth: '300px' }}></div>
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>

                {/* Internship 3: InfoTact (Current) */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    style={{
                        borderLeft: '2px solid var(--accent-green)',
                        paddingLeft: '30px',
                        position: 'relative'
                    }}
                >
                    <div style={{ position: 'absolute', left: '-6px', top: '0', width: '10px', height: '10px', borderRadius: '50%', background: 'var(--accent-green)' }} />

                    <h3 style={{ fontSize: '1.5rem', color: 'var(--text-primary)' }}>Python Development Intern</h3>
                    <div style={{ fontFamily: 'var(--font-display)', marginBottom: '10px' }}>
                        <span style={{ color: 'var(--accent-green)' }}>Infotact Solutions, Bangalore</span>
                        <span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginLeft: '10px' }}>| Remote • Pursuing (3 Months)</span>
                    </div>

                    <ul style={{ color: 'var(--text-secondary)' }}>
                        <li style={{ marginBottom: '10px' }}>
                            ▹ Currently undergoing intensive training in <b>Python Development</b>.
                        </li>
                        <li style={{ marginBottom: '10px' }}>
                            ▹ Implementing weekly mini-projects to reinforce core concepts and logical thinking.
                        </li>
                    </ul>
                </motion.div>

                {/* Internship 2: MACS (Dec 2025 - Jan 2026) */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    style={{
                        borderLeft: '2px solid var(--accent-green)',
                        paddingLeft: '30px',
                        position: 'relative'
                    }}
                >
                    <div style={{ position: 'absolute', left: '-6px', top: '0', width: '10px', height: '10px', borderRadius: '50%', background: 'var(--accent-green)' }} />

                    <h3 style={{ fontSize: '1.5rem', color: 'var(--text-primary)' }}>Web Developer Intern</h3>
                    <div style={{ fontFamily: 'var(--font-display)', marginBottom: '10px' }}>
                        <span style={{ color: 'var(--accent-green)' }}>MACS Solutions</span>
                        <span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginLeft: '10px' }}>| Offline • Dec 28 2025 - Jan 3 2026</span>
                    </div>

                    <ul style={{ color: 'var(--text-secondary)' }}>
                        <li style={{ marginBottom: '10px' }}>
                            ▹ Developed <b>WorkHub-CES</b>, a workflow management system, leveraging AI assistance for code optimization.
                        </li>
                        <li style={{ marginBottom: '10px' }}>
                            ▹ Focused on rapid prototyping and implementation of core business logic.
                        </li>
                    </ul>
                </motion.div>

                {/* Internship 1: Nuvai (July 2025) */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    style={{
                        borderLeft: '2px solid var(--accent-green)',
                        paddingLeft: '30px',
                        position: 'relative'
                    }}
                >
                    <div style={{ position: 'absolute', left: '-6px', top: '0', width: '10px', height: '10px', borderRadius: '50%', background: 'var(--accent-green)' }} />

                    <h3 style={{ fontSize: '1.5rem', color: 'var(--text-primary)' }}>Full Stack Developer with AI Intern</h3>
                    <div style={{ fontFamily: 'var(--font-display)', marginBottom: '10px' }}>
                        <span style={{ color: 'var(--accent-green)' }}>Nuvai Ai Solutions, Bengaluru</span>
                        <span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginLeft: '10px' }}>| Offline • July 2025</span>
                    </div>

                    <ul style={{ color: 'var(--text-secondary)' }}>
                        <li style={{ marginBottom: '10px' }}>
                            ▹ Built full-stack applications like <b>Docky</b> (SaaS Document Management) using React, TypeScript, and Flask.
                        </li>
                        <li style={{ marginBottom: '10px' }}>
                            ▹ Integrated AI-assisted workflows using tools like Cursor AI and Blink.new.
                        </li>
                        <li style={{ marginBottom: '10px' }}>
                            ▹ Managed a team of interns, coordinating tasks and ensuring timely delivery of the <b>Grok Networking</b> app.
                        </li>
                    </ul>
                </motion.div>

            </div>
        </section>
    );
};

export default Experience;
