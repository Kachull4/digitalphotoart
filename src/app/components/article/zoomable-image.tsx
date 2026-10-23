"use client";

import Image, { type ImageProps } from "next/image";
import { useRef } from "react";
import styles from "./zoomable-image.module.css";

export function ZoomableImage(props: ImageProps) {
  const dialog = useRef<HTMLDialogElement>(null);

  return (
    <>
      <button
        type="button"
        className={styles.trigger}
        aria-label={`Zvětšit fotografii: ${props.alt}`}
        onClick={() => dialog.current?.showModal()}
      >
        <Image {...props} alt={props.alt} />
      </button>
      <dialog
        ref={dialog}
        className={styles.dialog}
        aria-label={props.alt}
        onClick={(event) => {
          if (event.target === event.currentTarget) dialog.current?.close();
        }}
      >
        <button
          type="button"
          className={styles.close}
          aria-label="Zavřít fotografii"
          onClick={() => dialog.current?.close()}
        >
          ×
        </button>
        <Image
          src={props.src}
          alt={props.alt}
          width={Number(props.width)}
          height={Number(props.height)}
          sizes="100vw"
          className={styles.expanded}
        />
      </dialog>
    </>
  );
}
