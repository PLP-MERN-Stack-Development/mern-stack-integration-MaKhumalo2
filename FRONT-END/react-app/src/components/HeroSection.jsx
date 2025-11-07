import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-blog.jpg";

const HeroSection = () => {
    return (
        <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary to-accent/20">
            <div className="absolute inset-0 opacity-10">
                <img src={heroImage} alt="" className="w-full h-full object-cover" />
            </div>

            <div className="wide-container relative py-24 lg:py-32">
                <div className="max-w-3xl">
                    <h1 className="text-5xl lg:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
                        Welcome to DevBlog
                    </h1>
                    <p className="text-xl text-primary-foreground/90 mb-8 leading-relaxed">
                        Discover insightful articles, tutorials, and stories from developers around the world.
                        Share your knowledge and grow together.
                    </p>
                    <div className="flex flex-wrap gap-4">
                        <Button size="lg" variant="secondary" asChild>
                            <Link to="/create">
                                Start Writing
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </Link>
                        </Button>
                        <Button size="lg" variant="outline" className="bg-transparent text-primary-foreground border-primary-foreground hover:bg-primary-foreground/10">
                            Explore Posts
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
