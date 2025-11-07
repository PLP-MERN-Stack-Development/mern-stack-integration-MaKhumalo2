import { useParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import CategoryBadge from "@/components/CategoryBadge";
import { ArrowLeft, Heart, Bookmark, Share2, Clock } from "lucide-react";

const PostDetail = () => {
    const { id } = useParams();

    // Mock data - will be replaced with real API calls
    const post = {
        id,
        title: "Getting Started with React Hooks",
        content: `
      <p>React Hooks revolutionized the way we write React components by allowing us to use state and other React features in functional components. In this comprehensive guide, we'll explore the most commonly used hooks and best practices.</p>
      
      <h2>What are React Hooks?</h2>
      <p>Hooks are functions that let you "hook into" React state and lifecycle features from function components. They don't work inside classes — they let you use React without classes.</p>
      
      <h2>The useState Hook</h2>
      <p>The useState hook is the most basic hook. It allows you to add state to functional components. Here's a simple example:</p>
      
      <pre><code>const [count, setCount] = useState(0);</code></pre>
      
      <h2>The useEffect Hook</h2>
      <p>The useEffect hook lets you perform side effects in function components. It serves the same purpose as componentDidMount, componentDidUpdate, and componentWillUnmount in React classes.</p>
      
      <h2>Best Practices</h2>
      <ul>
        <li>Only call hooks at the top level of your function</li>
        <li>Only call hooks from React function components</li>
        <li>Use the ESLint plugin to enforce these rules</li>
      </ul>
      
      <p>By following these guidelines and understanding how hooks work, you'll be able to write more maintainable and cleaner React code.</p>
    `,
        author: {
            name: "Sarah Johnson",
            avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
            bio: "Full-stack developer passionate about React and modern web technologies"
        },
        category: "React",
        readTime: 5,
        likes: 42,
        publishedAt: "March 15, 2024",
        image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=1200&auto=format&fit=crop",
    };

    return (
        <div className="min-h-screen bg-background">
            <Header />

            <main className="wide-container py-8">
                <Button variant="ghost" asChild className="mb-6">
                    <Link to="/">
                        <ArrowLeft className="mr-2 h-4 w-4" />
                        Back to posts
                    </Link>
                </Button>

                <article className="mx-auto max-w-4xl">
                    {post.image && (
                        <div className="mb-8 overflow-hidden rounded-lg">
                            <img
                                src={post.image}
                                alt={post.title}
                                className="w-full h-[400px] object-cover"
                            />
                        </div>
                    )}

                    <div className="mb-6 flex items-center justify-between">
                        <CategoryBadge category={post.category} />
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Clock className="h-4 w-4" />
                            <span>{post.readTime} min read</span>
                        </div>
                    </div>

                    <h1 className="mb-6 text-4xl lg:text-5xl font-bold leading-tight">
                        {post.title}
                    </h1>

                    <div className="mb-8 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <Avatar className="h-12 w-12">
                                <AvatarImage src={post.author.avatar} />
                                <AvatarFallback>{post.author.name.charAt(0)}</AvatarFallback>
                            </Avatar>
                            <div>
                                <p className="font-medium">{post.author.name}</p>
                                <p className="text-sm text-muted-foreground">{post.publishedAt}</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-2">
                            <Button variant="outline" size="icon">
                                <Heart className="h-4 w-4" />
                            </Button>
                            <Button variant="outline" size="icon">
                                <Bookmark className="h-4 w-4" />
                            </Button>
                            <Button variant="outline" size="icon">
                                <Share2 className="h-4 w-4" />
                            </Button>
                        </div>
                    </div>

                    <Separator className="mb-8" />

                    <div
                        className="prose prose-lg max-w-none"
                        dangerouslySetInnerHTML={{ __html: post.content }}
                    />

                    <Separator className="my-8" />

                    <div className="rounded-lg border bg-card p-6">
                        <div className="flex items-start gap-4">
                            <Avatar className="h-16 w-16">
                                <AvatarImage src={post.author.avatar} />
                                <AvatarFallback>{post.author.name.charAt(0)}</AvatarFallback>
                            </Avatar>
                            <div className="flex-1">
                                <h3 className="text-xl font-bold mb-2">About {post.author.name}</h3>
                                <p className="text-muted-foreground">{post.author.bio}</p>
                            </div>
                        </div>
                    </div>
                </article>
            </main>
        </div>
    );
};

export default PostDetail;
