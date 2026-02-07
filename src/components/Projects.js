import { Github, ArrowUpRight } from 'lucide-react';

const Projects = () => {
    const projects = [
        {
            title: "Car Pooling Website",
            description: "A platform connecting drivers with empty seats to passengers traveling the same route, reducing carbon footprint.",
            tech: ["MERN Stack", "Google Maps API", "Socket.io"],
            github: "https://github.com/Luckywagh63/Car-poolin",
            image: "/carpooling.jpg"
        },
        {
            title: "Crop Diagnosis",
            description: "AI-powered tool that diagnoses crop diseases from images and suggests treatments for farmers.",
            tech: ["Python", "TensorFlow", "React.js", "FastAPI"],
            github: "https://github.com/Luckywagh63/KrishiMitra",
            image: "/crop-diagnosis.jpg"
        },
        {
            title: "Resume Screening System",
            description: "Automated system to screen resumes and rank candidates based on job descriptions using NLP.",
            tech: ["Python", "NLP", "Machine Learning", "Flask"],
            github: "https://github.com/Luckywagh63",
            image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?q=80&w=800&auto=format&fit=crop"
        },
        {
            title: "Zero-Chem Food Lookup",
            description: "Platform connecting consumers with organic food suppliers to promote healthy eating.",
            tech: ["React.js", "Node.js", "MongoDB"],
            github: "https://github.com/Luckywagh63",
            image: "https://images.unsplash.com/photo-1490818387583-1baba5e638af?q=80&w=800&auto=format&fit=crop"
        },
        {
            title: "Health Symptom Analyzer",
            description: "Next.js application that predicts potential health issues based on user-inputted symptoms.",
            tech: ["Next.js", "AI Integration", "Tailwind CSS"],
            github: "https://github.com/Luckywagh63/NeuroSeva-front",
            image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=800&auto=format&fit=crop"
        },
        {
            title: "Face Recog. Attendance",
            description: "Contactless attendance system using face recognition technology for schools/offices.",
            tech: ["Python", "OpenCV", "Face Recognition"],
            github: "https://github.com/Luckywagh63",
            image: "/face-recognition.jpg"
        }
    ];

    return (
        <section id="projects" className="py-24 bg-white dark:bg-black text-zinc-900 dark:text-white transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                    <div>
                        <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">Featured Work</h2>
                        <div className="w-20 h-1 bg-purple-600 rounded-full"></div>
                        <p className="mt-4 text-zinc-600 dark:text-zinc-400 max-w-xl">
                            A collection of projects driven by problems I've encountered and solutions I've engineered.
                        </p>
                    </div>
                    <a href="https://github.com/Luckywagh63" target="_blank" rel="noopener noreferrer" className="text-zinc-900 dark:text-white flex items-center gap-2 hover:text-purple-600 dark:hover:text-purple-400 transition-colors border-b border-zinc-900/20 dark:border-white/20 pb-1 hover:border-purple-600 dark:hover:border-purple-400">
                        View Github <ArrowUpRight size={18} />
                    </a>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="group bg-zinc-50 dark:bg-zinc-900/50 rounded-2xl overflow-hidden border border-zinc-200 dark:border-zinc-800 hover:border-purple-500/30 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-900/10 dark:hover:shadow-purple-900/20 flex flex-col"
                        >
                            {/* Card Image */}
                            <div className="h-48 overflow-hidden relative">
                                <div className="absolute inset-0 bg-black/5 dark:bg-black/20 group-hover:bg-transparent transition-colors z-10"></div>
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 group-hover:grayscale"
                                />
                            </div>

                            <div className="p-6 flex flex-col flex-grow">
                                <h3 className="text-xl font-bold mb-3 text-zinc-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-zinc-600 dark:text-zinc-400 mb-6 text-sm leading-relaxed flex-grow">
                                    {project.description}
                                </p>

                                <div className="mt-auto">
                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {project.tech.map((t, i) => (
                                            <span key={i} className="text-xs px-2.5 py-1 bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-md text-zinc-600 dark:text-zinc-400 shadow-sm">
                                                {t}
                                            </span>
                                        ))}
                                    </div>

                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 text-sm font-medium text-zinc-900 dark:text-white hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                                    >
                                        <Github size={18} /> Source Code
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
