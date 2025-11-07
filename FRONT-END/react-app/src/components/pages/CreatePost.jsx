import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";

const CreatePost = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        title: "",
        excerpt: "",
        category: "",
        content: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        // Basic validation
        if (!formData.title || !formData.excerpt || !formData.category || !formData.content) {
            toast.error("Please fill in all fields");
            return;
        }

        // Mock submission - will be replaced with real API call
        console.log("Submitting post:", formData);
        toast.success("Post created successfully!");
        navigate("/");
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    return (
        <div className="min-h-screen bg-background">
            <Header />

            <main className="wide-container py-8">
                <Card className="mx-auto max-w-4xl">
                    <CardHeader>
                        <CardTitle className="text-3xl">Create New Post</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="space-y-2">
                                <Label htmlFor="title">Title</Label>
                                <Input
                                    id="title"
                                    name="title"
                                    placeholder="Enter your post title"
                                    value={formData.title}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="excerpt">Excerpt</Label>
                                <Textarea
                                    id="excerpt"
                                    name="excerpt"
                                    placeholder="Brief summary of your post"
                                    value={formData.excerpt}
                                    onChange={handleChange}
                                    rows={3}
                                    required
                                />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="category">Category</Label>
                                <Input
                                    id="category"
                                    name="category"
                                    placeholder="e.g., React, JavaScript, CSS"
                                    value={formData.category}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="content">Content</Label>
                                <Textarea
                                    id="content"
                                    name="content"
                                    placeholder="Write your post content here..."
                                    value={formData.content}
                                    onChange={handleChange}
                                    rows={15}
                                    required
                                />
                            </div>

                            <div className="flex gap-4">
                                <Button type="submit" size="lg">
                                    Publish Post
                                </Button>
                                <Button
                                    type="button"
                                    variant="outline"
                                    size="lg"
                                    onClick={() => navigate("/")}
                                >
                                    Cancel
                                </Button>
                            </div>
                        </form>
                    </CardContent>
                </Card>
            </main>
        </div>
    );
};

export default CreatePost;
