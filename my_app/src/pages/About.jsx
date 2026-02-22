import { Award, BookOpen, Target, Heart, MapPin, Calendar } from "lucide-react";

export const About= () => {
    return (
        <section id="about" className="py-20 bg-card/30">
            <div className="container mx-auto px-4">
                <h2 className="section-title text-center">About Me</h2>
                
                <div className="grid md:grid-cols-2 gap-12 mt-12">
                    <div className="space-y-6">
                        <h3 className="text-2xl font-bold flex items-center gap-2">
                            <BookOpen className="text-primary" size={24} />
                            My Journey
                        </h3>
                        <div className="space-y-4 text-foreground/80 leading-relaxed">
                            <p>
                                I'm a third-year student majoring in Digital Business and AI at the University of Economics and Law (UEL), VNU-HCM. My passion lies at the intersection of data, technology, and business decision-making.
                            </p>
                            <p>
                                Over the past three years, I've developed a strong foundation in financial analysis, machine learning, and business intelligence through both coursework and hands-on projects. I believe in the power of data to drive strategic decisions and create real-world impact.
                            </p>
                            <p>
                                Currently, I'm serving as the President of the Reading Culture Club and actively contributing to the AI4I Research & Development team, where I explore applied technologies and organize AI competitions.
                            </p>
                        </div>
                    </div>

                    <div className="space-y-6">
                        <h3 className="text-2xl font-bold flex items-center gap-2">
                            <Target className="text-primary" size={24} />
                            Quick Facts
                        </h3>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="p-4 rounded-xl bg-card border border-border hover:border-primary/30 transition-all">
                                <BookOpen className="text-primary mb-2" size={24} />
                                <div className="font-semibold">Major</div>
                                <div className="text-sm text-foreground/60">Digital Business & AI</div>
                            </div>
                            <div className="p-4 rounded-xl bg-card border border-border hover:border-primary/30 transition-all">
                                <Award className="text-primary mb-2" size={24} />
                                <div className="font-semibold">GPA</div>
                                <div className="text-sm text-foreground/60">3.6/4.0</div>
                            </div>
                            <div className="p-4 rounded-xl bg-card border border-border hover:border-primary/30 transition-all">
                                <Target className="text-primary mb-2" size={24} />
                                <div className="font-semibold">Career Goal</div>
                                <div className="text-sm text-foreground/60">Data/Business Analyst</div>
                            </div>
                            <div className="p-4 rounded-xl bg-card border border-border hover:border-primary/30 transition-all">
                                <Heart className="text-primary mb-2" size={24} />
                                <div className="font-semibold">Interests</div>
                                <div className="text-sm text-foreground/60">ML, Finance, Analytics</div>
                            </div>
                        </div>

                        <div className="mt-8 p-6 rounded-xl bg-card border border-border">
                            <h4 className="font-semibold mb-4 flex items-center gap-2">
                                <Calendar size={18} className="text-primary" />
                                Education
                            </h4>
                            <div className="space-y-4">
                                <div className="flex gap-3">
                                    <div className="w-2 h-2 mt-2 rounded-full bg-primary" />
                                    <div>
                                        <div className="font-medium">University of Economics and Law (UEL), VNU-HCM</div>
                                        <div className="text-sm text-foreground/60">2022 - Present · Bachelor's in Digital Business & AI</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};