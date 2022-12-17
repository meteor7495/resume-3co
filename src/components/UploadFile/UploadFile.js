import React, { useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import { Upload } from "@mui/icons-material";
import { useDispatch } from "react-redux";
import {Typography} from "@mui/material";
import useStyles from "./styles";

export default function UploadFile({children,...props}) {
  const { onDrop: onDropProp, fileManager, type } = props;
  const [types, setTypes] = useState({});
  const [maxSize, setMaxSize] = useState({});
  const [supportText, setSupportText] = useState({});
  const classes = useStyles();
  const maxSizes = {
    video: 10485760,
    image: 3145728,
  };
  const dispatch = useDispatch();
  useEffect(() => {
    let types = {};
    let maxSize;
    let supportText = "JPG, PNG, PDF, MP3, MP4";

    setMaxSize(maxSize);
    setTypes(types);
    setSupportText(supportText);
  }, [type, maxSizes.image, maxSizes.video]);
  const { getRootProps, getInputProps } = useDropzone({
    maxFiles: 1,
    accept: types && types,
    onDrop: (files, fileRejections) => {
      fileRejections[0]?.errors.forEach(({ code, message }) => {
        /*dispatch(
          addNotification(
            NotificationModel({
              message,
              options: { variant: "error" },
            })
          )
        );*/
      });
      files?.forEach((x) => {
        let error;
        switch (x.type) {
          case "video/mp4":
          case "video/mpeg":
          case "video/webm":
          case "audio/mpeg":
          case "audio/ogg":
          case "audio/wav":
            if (x.size >= maxSizes.video) {
              error = "file-too-large";
            }
            break;
          case "image/png":
          case "image/jpeg":
          case "application/pdf":
            if (x.size >= maxSizes.image) {
              error = "file-too-large";
            }
            // const path = x.path.split(".");
            // if (path[path.length - 1] === "jpeg") {
            //   error = "file-invalid-type";
            // }
            break;
          default:
            error = "file-invalid-type";
            break;
        }
        if (error) {
          /*dispatch(
            addNotification(
              NotificationModel({
                message: tv(error),
                options: { variant: "error", autoHideDuration: 2000 },
              })
            )
          );*/
          return;
        }
        onDropProp({
          file: files[0],
        });
      });
    },
    maxSize: maxSize && maxSize,
  });

  return (
    children ?
      <div
        className={'flex w-full items-center gap-1'}
        {...getRootProps()}
      >
        <input {...getInputProps()} />
        {children}
      </div>
      :
    <>
      <div
        className={
          `flex flex-col items-center gap-[20px] p-[30px] cursor-pointer`
        }
        {...getRootProps()}
      >
        <input {...getInputProps()} />
        <Typography>Import or drop file here</Typography>
      </div>
    </>
  );
}
