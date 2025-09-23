  import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile"
  import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf"
  import PhotoIcon from "@mui/icons-material/Photo"
  export const getFileIcon = (filepath: string,size?:number) => {
    if (!filepath) return <InsertDriveFileIcon />

    const extension = filepath.split(".").pop()?.toLowerCase()

    switch (extension) {
      case "pdf":
        return <PictureAsPdfIcon color="error" sx={{fontSize:size??22}} />
      case "jpg":
      case "jpeg":
      case "png":
      case "gif":
        return <PhotoIcon color="primary" sx={{fontSize:size??22}} />
      default:
        return <InsertDriveFileIcon color="action" sx={{fontSize:size??22}} />
    }
  }
