import { motion } from 'framer-motion';

const SkillCategory = ({ title, skills, delay }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay }}
        style={{
            background: 'var(--surface)',
            padding: '25px',
            borderRadius: '8px',
            border: '1px solid var(--border)',
            transition: 'transform 0.3s ease'
        }}
        whileHover={{ y: -5 }}
    >
        <h3 style={{ color: 'var(--accent-green)', fontFamily: 'var(--font-display)', marginBottom: '15px' }}>{title}</h3>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
            {skills.map(skill => (
                <span key={skill} style={{
                    background: 'rgba(32, 194, 14, 0.1)',
                    color: 'var(--text-primary)',
                    padding: '5px 12px',
                    borderRadius: '4px',
                    fontSize: '0.9rem'
                }}>
                    {skill}
                </span>
            ))}
        </div>
    </motion.div>
);

const Skills = () => {
    return (
        <section id="skills" className="section-padding">
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', marginBottom: '40px', display: 'flex', alignItems: 'center', gap: '20px' }}>
                <span style={{ color: 'var(--accent-green)' }}>02.</span> Tools and Technologies I Have Worked With
                <div style={{ height: '1px', background: 'var(--border)', flex: 1, maxWidth: '300px' }}></div>
            </h2>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
                <SkillCategory
                    title="Frontend"
                    skills={["React", "TypeScript", "JavaScript", "HTML5/CSS3", "Tailwind Connectivity", "Framer Motion"]}
                    delay={0}
                />
                <SkillCategory
                    title="Backend"
                    skills={["Python", "Flask", "Node.js", "REST APIs", "SQL", "Authentication"]}
                    delay={0.1}
                />

                <SkillCategory
                    title="Tools & Platforms"
                    skills={["Git & GitHub", "Cursor AI", "VS Code", "Blink.new", "Google Apps Script", "Lovable", "Replit", "Antigravity"]}
                    delay={0.3}
                />
            </div>
        </section>
    );
};

export default Skills;
