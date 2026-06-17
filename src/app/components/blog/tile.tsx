import { Article } from "@/app/articles";
import {
  Tile,
  TileContent,
  TileDate,
  TileDescription,
  TileImage,
  TileTitle,
} from "./styled";

type BlogTileProps = Pick<
  Article,
  "title" | "description" | "date" | "imageUrl" | "altText"
> & {
  readMoreLink: string;
  variant?: "default" | "small";
};

export const BlogTile: React.FC<BlogTileProps> = ({
  title,
  description,
  date,
  imageUrl,
  altText,
  readMoreLink,
  variant,
}) => {
  return (
    <Tile href={readMoreLink} $variant={variant}>
      <TileImage src={imageUrl} alt={altText} />
      <TileContent>
        <TileTitle>{title}</TileTitle>
        <TileDescription>{description}</TileDescription>
        <TileDate>{date}</TileDate>
      </TileContent>
    </Tile>
  );
};
