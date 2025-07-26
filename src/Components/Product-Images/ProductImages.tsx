import { useParams } from "react-router-dom";
import { ProductDetailsApi } from "../../Utils/Apis";
import { useDataSWR } from "../../Utils/SWR";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import "./style.css";

function ProductImages() {
  // Get Id From Url
  const { id } = useParams();

  // //Get Data From SWR File
  const { data } = useDataSWR({ api: ProductDetailsApi + `/${id}` });

  //Looping Product Images To Show
  const showImages = data?.images.map((img: string) => {
    return { original: img, thumbnail: img };
  });

  return <ImageGallery items={showImages !== undefined ? showImages : []} />;
}

export default ProductImages;
