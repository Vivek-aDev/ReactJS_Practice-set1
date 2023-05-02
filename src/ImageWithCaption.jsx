import { imageLink } from "./App";

export const ImageWithCaption = ({ imagelink, caption }) => {
  return (
    <div>
      <h1>Image Link</h1>
      <img src={imageLink} alt={caption} />
      <p>{caption}</p>
    </div>
  );
};
