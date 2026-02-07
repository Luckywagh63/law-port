const Experience = () => {
    const experiences = [
        {
            title: "NativeSoft",
            role: "Web Developer",
            period: "Present",
            description: "Developing responsive and scalable web applications using modern technologies.",
            type: "work"
        },
        {
            title: "IBM Internship",
            role: "Software Developer Intern",
            period: "2024",
            description: "Gained hands-on experience in enterprise software development and cloud technologies.",
            type: "internship"
        },
        {
            title: "IIT Bombay",
            role: "Student Ambassador",
            period: "2023 - Present",
            description: "Representing the institution and fostering a tech coding culture among peers.",
            type: "position"
        },
        {
            title: "Hackathons & Competitions",
            role: "Active Participant",
            period: "Ongoing",
            description: "Participated in numerous hackathons and tech competitions, building innovative solutions under time constraints.",
            type: "achievement"
        }
    ];

    return (
        <section id="experience" className="py-24 bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-white relative transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-20">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">Experience</h2>
                    <p className="text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">My professional journey and achievements.</p>
                </div>

                <div className="max-w-4xl mx-auto">
                    <div className="grid gap-8 md:grid-cols-2">
                        {experiences.map((exp, index) => (
                            <div
                                key={index}
                                className="group relative p-8 bg-white dark:bg-black/40 border border-zinc-200 dark:border-zinc-800 rounded-2xl hover:border-purple-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-purple-900/5 dark:hover:shadow-purple-900/10"
                            >
                                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                    {/* Icon placeholder */}
                                </div>

                                <span className="inline-block px-3 py-1 bg-zinc-100 dark:bg-zinc-900 rounded-full text-xs font-medium text-purple-600 dark:text-purple-400 mb-4 border border-zinc-200 dark:border-zinc-800">
                                    {exp.period}
                                </span>

                                <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-1 group-hover:text-purple-600 dark:group-hover:text-purple-300 transition-colors">{exp.title}</h3>
                                <h4 className="text-lg text-zinc-600 dark:text-zinc-400 mb-4 font-medium">{exp.role}</h4>
                                <p className="text-zinc-500 dark:text-zinc-500 leading-relaxed text-sm">
                                    {exp.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
