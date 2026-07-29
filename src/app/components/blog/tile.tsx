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
      <TileImage
        src={imageUrl}
        alt={altText}
        width={800}
        height={450}
        sizes={
          variant === "small"
            ? "(min-width: 768px) 300px, calc(100vw - 4rem)"
            : "(min-width: 768px) 400px, calc(100vw - 4rem)"
        }
      />
      <TileContent>
        <TileTitle>{title}</TileTitle>
        <TileDescription>{description}</TileDescription>
        <TileDate>{date}</TileDate>
      </TileContent>
    </Tile>
  );
};
