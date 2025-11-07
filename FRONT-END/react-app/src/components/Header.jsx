import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { PenSquare, Search } from "lucide-react";

const Header = () => {
    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="wide-container flex h-16 items-center justify-between">
                <Link to="/" className="flex items-center space-x-2">
                    <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                        DevBlog
                    </h1>
                </Link>

                <nav className="flex items-center gap-2">
                    <Button variant="ghost" size="icon">
                        <Search className="h-5 w-5" />
                    </Button>
                    <Button asChild>
                        <Link to="/create">
                            <PenSquare className="mr-2 h-4 w-4" />
                            Write
                        </Link>
                    </Button>
                </nav>
            </div>
        </header>
    );
};

export default Header;
