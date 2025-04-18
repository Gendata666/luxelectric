/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function PlaneIcon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 36 36"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M30 23.828a.997.997 0 01-1.414 0l-1.414-1.414a.997.997 0 010-1.414L30 18.172a.999.999 0 011.414 0l1.414 1.414a.997.997 0 010 1.414L30 23.828zm-15-15a.997.997 0 01-1.414 0l-1.414-1.414a.997.997 0 010-1.414L15 3.172a.999.999 0 011.414 0l1.414 1.414a.997.997 0 010 1.414L15 8.828z"
        }
        fill={"#66757F"}
      ></path>

      <path
        d={
          "M2 22c2 0 11 1 11 1s1 9 1 11-2 2-3 1-4-6-4-6-5-3-6-4-1-3 1-3zM4 6.039C7 6 29 7 29 7s.924 22 .962 25c.038 3-2.763 4.002-3.862.001C25.001 28 21 15 21 15S7.045 10.583 3.995 9.898C0 9 1 6.077 4 6.039z"
        }
        fill={"#55ACEE"}
      ></path>

      <path
        d={
          "M27 3c2-2 7-3 8-2s0 6-2 8-19 18-19 18-6.5 4.5-8 3 3-8 3-8S25 5 27 3z"
        }
        fill={"#CCD6DD"}
      ></path>

      <path
        d={
          "M14 22s.5.5-4 5-5 4-5 4-.5-.5 4-5 5-4 5-4zM29 4a3 3 0 013 3h.805c.114-.315.195-.645.195-1a3 3 0 00-3-3c-.355 0-.685.081-1 .195V4z"
        }
        fill={"#66757F"}
      ></path>
    </svg>
  );
}

export default PlaneIcon;
/* prettier-ignore-end */
