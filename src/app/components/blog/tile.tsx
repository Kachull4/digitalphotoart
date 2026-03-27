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
}

export const BlogTile: React.FC<BlogTileProps> = ({
  title,
  description,
  date,
  imageUrl,
  altText,
  readMoreLink,
}) => {
  return (
    <Tile href={readMoreLink}>
      <TileImage src={imageUrl} alt={altText} />
      <TileContent>
        <TileTitle>{title}</TileTitle>
        <TileDescription>{description}</TileDescription>
        <TileDate>{date}</TileDate>
      </TileContent>
    </Tile>
  );
};
