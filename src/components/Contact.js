import { Mail, Github, Send, Instagram, Linkedin } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="py-24 bg-white dark:bg-black text-zinc-900 dark:text-white relative overflow-hidden transition-colors duration-300">
            {/* Background decoration */}
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500/5 dark:bg-purple-900/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-24">

                    {/* Contact Info */}
                    <div className="lg:col-span-2 space-y-8">
                        <div>
                            <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">Let's Work Together</h2>
                            <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                                Have a project in mind or just want to discuss the latest in tech? I'm always open to new opportunities and collaborations.
                            </p>
                        </div>

                        <div className="space-y-6 pt-8">
                            <a href="mailto:waghlucky63@gmail.com" className="flex items-center gap-4 group">
                                <div className="w-12 h-12 bg-zinc-100 dark:bg-zinc-900/50 rounded-full flex items-center justify-center text-zinc-500 dark:text-zinc-400 group-hover:text-white group-hover:bg-purple-600 transition-all duration-300">
                                    <Mail size={20} />
                                </div>
                                <div>
                                    <p className="text-xs text-zinc-500 uppercase tracking-wider mb-1">Email</p>
                                    <span className="text-lg font-medium text-zinc-900 dark:text-zinc-200 group-hover:text-purple-600 dark:group-hover:text-white transition-colors">waghlucky63@gmail.com</span>
                                </div>
                            </a>

                            <div className="pt-8 border-t border-zinc-200 dark:border-white/5">
                                <p className="text-sm text-zinc-500 mb-4">Follow me on</p>
                                <div className="flex gap-4">
                                    <a href="https://github.com/Luckywagh63" className="w-10 h-10 rounded-full bg-zinc-100 dark:bg-zinc-900 flex items-center justify-center text-zinc-600 dark:text-zinc-400 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all">
                                        <Github size={18} />
                                    </a>
                                    <a href="#" className="w-10 h-10 rounded-full bg-zinc-100 dark:bg-zinc-900 flex items-center justify-center text-zinc-600 dark:text-zinc-400 hover:bg-[#0077b5] hover:text-white transition-all">
                                        <Linkedin size={18} />
                                    </a>
                                    <a href="#" className="w-10 h-10 rounded-full bg-zinc-100 dark:bg-zinc-900 flex items-center justify-center text-zinc-600 dark:text-zinc-400 hover:bg-[#E1306C] hover:text-white transition-all">
                                        <Instagram size={18} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="lg:col-span-3">
                        <form
                            action="https://formsubmit.co/waghlucky63@gmail.com"
                            method="POST"
                            className="space-y-6 bg-zinc-50/50 dark:bg-zinc-900/30 p-8 rounded-3xl border border-zinc-200 dark:border-white/5 backdrop-blur-sm"
                        >
                            {/* FormSubmit Configuration */}
                            <input type="hidden" name="_captcha" value="false" />
                            <input type="hidden" name="_next" value="http://localhost:3000" />
                            <input type="hidden" name="_subject" value="New Portfolio Message!" />

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm text-zinc-600 dark:text-zinc-400 ml-1">Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        required
                                        className="w-full bg-white dark:bg-black/50 border border-zinc-200 dark:border-zinc-800 rounded-xl px-4 py-3 text-zinc-900 dark:text-white focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all placeholder-zinc-400 dark:placeholder-zinc-600"
                                        placeholder="John Doe"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm text-zinc-600 dark:text-zinc-400 ml-1">Email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        required
                                        className="w-full bg-white dark:bg-black/50 border border-zinc-200 dark:border-zinc-800 rounded-xl px-4 py-3 text-zinc-900 dark:text-white focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all placeholder-zinc-400 dark:placeholder-zinc-600"
                                        placeholder="john@example.com"
                                    />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm text-zinc-600 dark:text-zinc-400 ml-1">Message</label>
                                <textarea
                                    name="message"
                                    required
                                    rows="4"
                                    className="w-full bg-white dark:bg-black/50 border border-zinc-200 dark:border-zinc-800 rounded-xl px-4 py-3 text-zinc-900 dark:text-white focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all placeholder-zinc-400 dark:placeholder-zinc-600"
                                    placeholder="Tell me about your project..."
                                ></textarea>
                            </div>
                            <div className="pt-2">
                                <button
                                    type="submit"
                                    className="w-full bg-zinc-900 dark:bg-white text-white dark:text-black hover:bg-zinc-800 dark:hover:bg-zinc-200 font-semibold py-4 rounded-xl flex items-center justify-center gap-2 transition-all duration-300 shadow-lg dark:shadow-none"
                                >
                                    Send Message
                                    <Send size={18} />
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
