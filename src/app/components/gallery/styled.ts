"use client"

import styled from "styled-components"
import { Container, Heading } from "@/app/(home)/styled";

export const GalleryContainer = styled(Container)`
    min-height: 100svh;
    position: relative;
`

export const GalleryHeading = styled(Heading)`
    text-align: center;
    font-size: 5rem;
`

export const GalleryBox = styled.div`
    margin: 5rem auto;
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    padding: 0 2rem;

    img {
        border-radius: 10px;
        width: 100%;
        height: auto;
        cursor: pointer;
        width: auto;
        height: 25rem;
    }
`