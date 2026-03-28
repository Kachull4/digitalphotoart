"use client";

import {
  Tile,
  TileContent,
  TileDate,
  TileDescription,
  TileImage,
  TileTitle,
} from "./styled";

interface BlogTileProps {
  title: string;
  description: string;
  date: string;
  imageUrl: string;
  altText: string;
  readMoreLink: string;
  variant?: "default" | "small";
}

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
