import e from "method-override";
import { useState } from "react";
import { useMutate } from "restful-react";

export default function Submit() {
  const [selectedImage, setSelectedImage] = useState();
  // const { mutate: uploadImage } = useMutate({
  //   verb: "POST",
  //   path: "/api/submitVideo",
  // });

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

    const form = event.currentTarget;
    const fileInput = Array.from(form.elements).find(
      ({ name }) => name === "file"
    );

    const formData = new FormData();

    for (const file of fileInput.files) {
      formData.append("file", file);
    }
    // handleImageUpload();
    console.log(fileInput);

    formData.append("upload_preset", "TimelessFamilyRecipeUploads");

    const data = await fetch(
      "https://api.cloudinary.com/v1_1/dbb7dy9r1/image/upload",
      {
        method: "POST",
        body: formData,
      }
    ).then((res) => res.json());

    console.log("data", data);
  }
  // const submitPost = async (property) => {
  //   const data = await fetch(`http://localhost:3000/api/posts`, {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(property),
  //   });
  // };

  // return (
  //   <div>
  //     <form
  //       action="/api/submitVideo"
  //       method="POST"
  //       encType="multipart/form-data"
  //     >
  //       <input type="file" name="image" id="file" />
  //       <label htmlFor="file">Choose File</label>
  //       <input type="submit" value="submit" />
  //     </form>
  //   </div>
  // );

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
