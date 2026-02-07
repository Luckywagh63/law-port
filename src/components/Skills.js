const Skills = () => {
    const skillCategories = [
        {
            title: "Frontend",
            skills: ["HTML5", "CSS3", "JavaScript (ES6+)", "React.js", "Next.js", "Tailwind CSS"],
        },
        {
            title: "Backend",
            skills: ["Node.js", "MongoDB", "Express", "REST APIs"],
        },
        {
            title: "AI / ML",
            skills: ["Machine Learning", "Computer Vision", "OCR", "Deep Learning"],
        },
        {
            title: "Tools",
            skills: ["Git", "GitHub", "VS Code", "Google Colab", "Postman"],
        }
    ];

    return (
        <section id="skills" className="py-24 bg-white dark:bg-zinc-950 text-zinc-900 dark:text-white border-t border-zinc-100 dark:border-white/5 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-4">
                    <div>
                        <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">Technical Arsenal</h2>
                        <p className="text-zinc-500 dark:text-zinc-400">The tools and technologies I use to build ideas.</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {skillCategories.map((category, index) => (
                        <div
                            key={index}
                            className="group"
                        >
                            <h3 className="text-xl font-bold mb-6 text-zinc-800 dark:text-zinc-200 border-l-4 border-purple-500 pl-4">{category.title}</h3>
                            <div className="flex flex-wrap gap-3">
                                {category.skills.map((skill, idx) => (
                                    <span
                                        key={idx}
                                        className="px-4 py-2 bg-zinc-100 dark:bg-zinc-900/50 text-zinc-700 dark:text-zinc-400 rounded-lg text-sm border border-zinc-200 dark:border-zinc-800 hover:border-purple-500/50 hover:text-black dark:hover:text-white hover:bg-white dark:hover:bg-zinc-800 transition-all duration-300 cursor-default shadow-sm dark:shadow-none"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
