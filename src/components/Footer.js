const Footer = () => {
    return (
        <footer className="bg-white dark:bg-black py-12 border-t border-zinc-200 dark:border-white/5 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
                <p className="text-zinc-600 dark:text-zinc-500 text-sm mb-4">
                    &copy; {new Date().getFullYear()} Lucky Wagh. Crafted with precision.
                </p>
                <div className="flex gap-6 text-xs text-zinc-500 dark:text-zinc-600">
                    <span>Next.js</span>
                    <span>Tailwind CSS</span>
                    <span>Vercel</span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
