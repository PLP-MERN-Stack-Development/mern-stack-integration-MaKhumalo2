import { Badge } from "@/components/ui/badge";

const CategoryBadge = ({ category, variant = "secondary" }) => {
    return (
        <Badge variant={variant} className="rounded-full">
            {category}
        </Badge>
    );
};

export default CategoryBadge;
