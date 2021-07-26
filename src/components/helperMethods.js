import jwt_decode from 'jwt-decode';

export const checkStorage = () => {
  return localStorage.getItem('currentUser');
};
export const getInfo = () => {
    return jwt_decode(localStorage.getItem('currentUser')) ;
  };
export const getId = ()=>{
  if(checkStorage()){
    return   getInfo().data._id
 }
}
export const validFileType = (file) => {
  const fileTypes = [
      "image/apng",
      "image/bmp",
      "image/gif",
      "image/jpeg",
      "image/pjpeg",
      "image/png",
      "image/svg+xml",
      "image/tiff",
      "image/webp",
      "image/x-icon"
  ];
  return fileTypes.includes(file.type);
}