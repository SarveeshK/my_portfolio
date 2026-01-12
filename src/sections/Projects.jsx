import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaFolder } from 'react-icons/fa';

const ProjectCard = ({ title, description, tags, link, github, featured = false, variants }) => {
    return (
        <motion.div
            variants={variants}
            style={{
                background: 'var(--surface)',
                padding: '30px',
                borderRadius: '10px',
                position: 'relative',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                border: '1px solid var(--surface-hover)',
                height: '100%',
                display: 'flex',
                flexDirection: 'column'
            }}
            whileHover={{ y: -10, borderColor: 'var(--accent-green)' }}
        >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                <FaFolder size={40} color="var(--accent-green)" />
                <div style={{ display: 'flex', gap: '15px' }}>
                    {github && <a href={github} target="_blank" rel="noopener noreferrer"><FaGithub size={20} color="var(--text-secondary)" /></a>}
                    {link && <a href={link} target="_blank" rel="noopener noreferrer"><FaExternalLinkAlt size={20} color="var(--text-secondary)" /></a>}
                </div>
            </div>

            <h3 style={{ fontSize: '1.4rem', color: 'var(--text-primary)', marginBottom: '10px', fontFamily: 'var(--font-display)' }}>{title}</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', marginBottom: '20px', flex: 1 }}>{description}</p>

            <ul style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', fontSize: '0.8rem', fontFamily: 'var(--font-display)', color: 'var(--text-secondary)' }}>
                {tags.map(tag => <li key={tag}>{tag}</li>)}
            </ul>
        </motion.div>
    );
};

const Projects = () => {
    const projects = [
        {
            title: "Docky",
            description: "A complete SaaS-style document submission & management system. Features User/Admin dashboards, secure file storage, and a professional UI inspired by modern SaaS platforms.",
            tags: ["Flask", "React", "SaaS", "Module-based"],
            github: "https://github.com/SarveeshK"
        },
        {
            title: "WorkHub - CES",
            description: "A comprehensive workflow management and issue tracking system featuring RBAC, bug reporting pipelines, and real-time status updates. Designed to streamline operations for the CES community.",
            tags: ["React", "Workflow", "RBAC", "Debugging"],
            github: "https://github.com/SarveeshK"
        },
        {
            title: "Vision Color Sorter",
            description: "Embedded system using ESP32-CAM to identify RGB colors and sort objects via servo motors. Demonstrated at ECE Symposium.",
            tags: ["ESP32-CAM", "IoT", "Embedded C", "Robotics"],
            github: null
        },
    ];

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 }
    };

    return (
        <section id="projects" className="section-padding">
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', marginBottom: '40px', display: 'flex', alignItems: 'center', gap: '20px' }}>
                <span style={{ color: 'var(--accent-green)' }}>04.</span> Some Things I've Built
                <div style={{ height: '1px', background: 'var(--border)', flex: 1, maxWidth: '300px' }}></div>
            </h2>

            <motion.div
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
                    gap: '20px'
                }}
            >
                {projects.map((proj, i) => (
                    <ProjectCard key={i} {...proj} variants={item} />
                ))}
            </motion.div>
        </section>
    );
};

export default Projects;
