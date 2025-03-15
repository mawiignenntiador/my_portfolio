import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
    const frontendSkills = [ // Corrected the variable name here
        "React", 
        "Vue", 
        "Tailwind", 
        "CSS", 
        "HTML"
    ];

    const backendSkills = [
        "Node.js", 
        "Python", 
        "MongoDB",
        "GraphQL",
        "SQL"
    ];

    return (
        <section 
            id="about" 
            className="min-h-screen flex items-center justify-center py-20"
        >
            <RevealOnScroll>
            <div className="max-w-3xl mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-teal-400 bg-clip-text text-transparent text-center"> 
                    About Me
                </h2>

                <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
                    <p className="text-gray-300 mb-6">
                        Passionate developer in training with experience in problem-solving using Python 
                        and a curiosity for neural networks and quantum computing solutions.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4">Frontend</h3>
                            <div className="flex flex-wrap gap-2">
                                {frontendSkills.map((tec, key) => ( // Corrected the variable name here
                                    <span 
                                        key={key}
                                        className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                                    hover:shadow-[0_2px_8px_rgba(59, 130, 2224, 0.1)] transition"
                                    >
                                        {tec} {/* Corrected the variable name here */}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4"> Backend</h3>
                            <div className="flex flex-wrap gap-2">
                                {backendSkills.map((tec, key) => ( // Corrected the variable name here
                                    <span 
                                        key={key}
                                        className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                                    hover:shadow-[0_2px_8px_rgba(59, 130, 2224, 0.1)] transition"
                                    >
                                        {tec} {/* Corrected the variable name here */}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                    <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4">📖 Education</h3>
                            <ul className="list-disc list-inside text-gray-300 space-y-2">
                                <li>
                                    <strong>B.S in Computer Science</strong> - Davidson College (2024 - 2028)
                                </li>
                                <li>
                                    Relevant Coursework: Data Structures, General Physics 1 & 2, Multivariable Calculus, Programming and Problem 
                                        Solving...
                                </li>
                            </ul>
                    </div>
                    <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4">💼 Work Experience</h3>
                            <div className="space-y-4 text-gray-300">
                                <div>
                                    <h4 className="font-semibold"> Student Technology Support Associate (Aug. 2025 - Present)</h4>
                                    <p>
                                        Provided technical support, troubleshooting, and system maintenance to enhance user experience and efficiency.
                                    </p>
                                </div>
                                <div>
                                    <h4 className="font-semibold"> Student Researcher in the Davidson Research in Immersive Virtual Environments (Summer 2025)</h4>
                                    <p>
                                        Conducted Research in computer graphics, and data analysis to explore innovative VR solutions.
                                    </p>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
            </RevealOnScroll>
        </section>
    );
};