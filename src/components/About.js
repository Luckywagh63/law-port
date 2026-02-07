const About = () => {
    return (
        <section id="about" className="py-24 bg-zinc-50 dark:bg-black text-zinc-900 dark:text-white relative overflow-hidden transition-colors duration-300">
            {/* Decorative gradient blob */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/10 dark:bg-purple-900/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">About Me</h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
                </div>

                <div className="flex flex-col md:flex-row items-center gap-16">
                    {/* Image/Avatar Placeholder */}
                    <div className="w-full md:w-5/12 flex justify-center">
                        <div className="relative w-72 h-72 md:w-80 md:h-80 rounded-2xl overflow-hidden border border-zinc-200 dark:border-zinc-700 shadow-2xl bg-white dark:bg-zinc-900 group">
                            <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            <img
                                src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1000&auto=format&fit=crop"
                                alt="Coding Setup"
                                className="w-full h-full object-cover transition-all duration-500 group-hover:grayscale"
                            />
                        </div>
                    </div>

                    <div className="w-full md:w-7/12 space-y-6 text-zinc-600 dark:text-zinc-300 text-lg leading-relaxed font-light">
                        <p className="text-xl text-zinc-900 dark:text-white font-normal">
                            Hello! I'm <span className="text-purple-600 dark:text-purple-400 font-semibold">Lucky Wagh</span>, a passionate Third-year Engineering Student and Full Stack Web Developer.
                        </p>
                        <p>
                            My journey in tech is driven by a curiosity to understand how things work and a desire to build solutions that make a difference. I specialize in the MERN stack and have a growing interest in Artificial Intelligence and Machine Learning.
                        </p>
                        <p>
                            I love participating in hackathons, solving algorithmic problems, and collaborating on open-source projects. Whether it's building a complex web application or training a machine learning model, I enjoy the challenge of turning ideas into reality.
                        </p>

                        <div className="grid grid-cols-2 gap-6 pt-8">
                            <div className="p-4 rounded-xl bg-white dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 hover:border-purple-500/50 transition-colors shadow-sm dark:shadow-none">
                                <span className="block text-3xl font-bold text-zinc-900 dark:text-white mb-1">5+</span>
                                <span className="text-sm text-zinc-500 uppercase tracking-wider">Projects Completed</span>
                            </div>
                            <div className="p-4 rounded-xl bg-white dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 hover:border-purple-500/50 transition-colors shadow-sm dark:shadow-none">
                                <span className="block text-3xl font-bold text-zinc-900 dark:text-white mb-1">3rd</span>
                                <span className="text-sm text-zinc-500 uppercase tracking-wider">Year Student</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
