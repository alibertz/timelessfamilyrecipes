import { useState } from "react";

export default function Submit() {
  const [selectedImage, setSelectedImage] = useState();

  const handleChange = (event) => {
    setSelectedImage(event.target.files[0]);
  };

  const handleImageUpload = async () => {
    console.log(selectedImage);
    if (!selectedImage) {
      return;
    }
    // const formData = new FormData();
    // formData.append("image", selectedImage);

    // uploadImage(formData)
    //   .then((uploadedImage) => {
    //     console.log(uploadedImage);
    //   })
    //   .catch((_) => {
    //     console.log("Oooops, something went wrong!!!!");
    //   });

    // const res = await fetch("http://localhost:3000/api/submitVideo", {
    //   method: "POST",
    //   body: formData,
    // });

    const file = await res.json();
  };

  async function handleOnSubmit(event) {
    event.preventDefault();
    const formData = new FormData();
    const canvas = document.getElementById("myPostCanvas");
    canvas.toBlob(function (blob) {
      formData.append("file", blob, imageKey);
    }, "image/jpeg");

    axios.post("http://localhost:3000/api/submitVideo", formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
  }

  return (
    <>
      <form
        method="post"
        onSubmit={handleOnSubmit}
        onChange={handleChange}
        encType="multipart/form-data"
      >
        <input
          accept=".jpg, .png, .jpeg"
          className="fileInput mb-2"
          type="file"
          name="file"
        ></input>
        <div>
          <button
            type="submit"
            disabled={!selectedImage}
            className="btn btn-primary mb-2"
          >
            Upload
          </button>
        </div>
      </form>
    </>
  );
}
