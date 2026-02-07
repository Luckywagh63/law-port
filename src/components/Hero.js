import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden bg-white dark:bg-black transition-colors duration-300">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-white/90 dark:bg-black/80 z-10"></div>
        <img
          src="/hero-bg.jpg"
          alt="Background"
          className="w-full h-full object-cover opacity-20 dark:opacity-40"
        />
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        <div className="space-y-8 animate-fade-in-up">
          <div className="inline-block px-3 py-1 border border-purple-500/30 rounded-full bg-purple-500/10 backdrop-blur-md mb-4">
            <h2 className="text-purple-600 dark:text-purple-400 font-medium tracking-wider uppercase text-xs md:text-sm">
              Portfolio
            </h2>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-zinc-900 dark:text-white tracking-tight">
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-600">Lucky Wagh</span>
          </h1>

          <p className="text-xl md:text-2xl text-zinc-600 dark:text-zinc-300 max-w-2xl mx-auto font-light leading-relaxed">
            Full Stack Web Developer | AI & ML Enthusiast
          </p>

          <p className="text-zinc-500 dark:text-zinc-400 max-w-xl mx-auto text-base md:text-lg leading-relaxed">
            Third-year Engineering Student crafting robust web solutions and exploring the frontiers of Artificial Intelligence.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-10">
            <Link
              href="#projects"
              className="group px-8 py-4 bg-zinc-900 dark:bg-white text-white dark:text-black hover:bg-zinc-800 dark:hover:bg-zinc-200 rounded-full font-semibold transition-all duration-300 flex items-center gap-2 shadow-lg dark:shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-xl dark:hover:shadow-[0_0_30px_rgba(255,255,255,0.5)]"
            >
              View Work
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="#contact"
              className="px-8 py-4 border border-zinc-200 dark:border-zinc-700 hover:border-zinc-900 dark:hover:border-white text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white rounded-full font-medium transition-all duration-300 backdrop-blur-sm bg-white/30 dark:bg-black/30"
            >
              Contact Me
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
