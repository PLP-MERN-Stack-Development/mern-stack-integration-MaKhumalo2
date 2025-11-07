import { useState } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import PostCard from "@/components/PostCard";
import { Button } from "@/components/ui/button";

const Home = () => {
    const [selectedCategory, setSelectedCategory] = useState("All");

    // Mock data - will be replaced with real API calls
    const mockPosts = [
        {
            id: "1",
            title: "Getting Started with React Hooks",
            excerpt: "Learn how to use React Hooks to manage state and side effects in your functional components. A comprehensive guide for beginners.",
            author: { name: "Sarah Johnson", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah" },
            category: "React",
            readTime: 5,
            likes: 42,
            publishedAt: "2 days ago",
            image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&auto=format&fit=crop",
        },
        {
            id: "2",
            title: "Building RESTful APIs with Express",
            excerpt: "A step-by-step guide to creating scalable and maintainable REST APIs using Express.js and Node.js best practices.",
            author: { name: "Michael Chen", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Michael" },
            category: "Backend",
            readTime: 8,
            likes: 89,
            publishedAt: "1 week ago",
            image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&auto=format&fit=crop",
        },
        {
            id: "3",
            title: "CSS Grid vs Flexbox: When to Use What",
            excerpt: "Understanding the differences between CSS Grid and Flexbox, and knowing which one to use for your layout needs.",
            author: { name: "Emma Davis", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emma" },
            category: "CSS",
            readTime: 6,
            likes: 67,
            publishedAt: "3 days ago",
        },
        {
            id: "4",
            title: "Introduction to TypeScript",
            excerpt: "Discover how TypeScript can improve your JavaScript development experience with static typing and better tooling.",
            author: { name: "David Martinez", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=David" },
            category: "JavaScript",
            readTime: 10,
            likes: 124,
            publishedAt: "5 days ago",
            image: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=800&auto=format&fit=crop",
        },
    ];

    const categories = ["All", "React", "Backend", "CSS", "JavaScript"];

    const filteredPosts = selectedCategory === "All"
        ? mockPosts
        : mockPosts.filter(post => post.category === selectedCategory);

    return (
        <div className="min-h-screen bg-background">
            <Header />
            <HeroSection />

            <main className="wide-container py-12">
                <div className="mb-8 flex flex-wrap gap-2">
                    {categories.map((category) => (
                        <Button
                            key={category}
                            variant={selectedCategory === category ? "default" : "outline"}
                            onClick={() => setSelectedCategory(category)}
                        >
                            {category}
                        </Button>
                    ))}
                </div>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {filteredPosts.map((post) => (
                        <PostCard key={post.id} {...post} />
                    ))}
                </div>
            </main>
        </div>
    );
};

export default Home;
