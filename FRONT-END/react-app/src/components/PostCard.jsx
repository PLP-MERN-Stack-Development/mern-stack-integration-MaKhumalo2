import { Link } from "react-router-dom";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import CategoryBadge from "./CategoryBadge";
import { Clock, Heart } from "lucide-react";

const PostCard = ({
    id,
    title,
    excerpt,
    author,
    category,
    readTime,
    likes,
    publishedAt,
    image,
}) => {
    return (
        <Card className="group overflow-hidden transition-all hover:shadow-lg" style={{ boxShadow: 'var(--card-shadow)' }}>
            <Link to={`/post/${id}`}>
                {image && (
                    <div className="relative overflow-hidden h-48">
                        <img
                            src={image}
                            alt={title}
                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                    </div>
                )}

                <CardHeader className="space-y-3">
                    <div className="flex items-center justify-between">
                        <CategoryBadge category={category} />
                        <span className="text-xs text-muted-foreground">{publishedAt}</span>
                    </div>

                    <h3 className="text-2xl font-bold leading-tight transition-colors group-hover:text-accent">
                        {title}
                    </h3>
                </CardHeader>

                <CardContent>
                    <p className="text-muted-foreground line-clamp-3">{excerpt}</p>
                </CardContent>

                <CardFooter className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <Avatar className="h-8 w-8">
                            <AvatarImage src={author.avatar} />
                            <AvatarFallback>{author.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <span className="text-sm font-medium">{author.name}</span>
                    </div>

                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                            <Clock className="h-4 w-4" />
                            <span>{readTime} min</span>
                        </div>
                        <div className="flex items-center gap-1">
                            <Heart className="h-4 w-4" />
                            <span>{likes}</span>
                        </div>
                    </div>
                </CardFooter>
            </Link>
        </Card>
    );
};

export default PostCard;
