export const handleDownload = async (attachment) => {
  const baseUrl = process.env.REACT_APP_BACKEND_URL;
  const token = localStorage.getItem("token");
  if (!attachment._id) return;
  console.log("Downloading file", attachment._id);
  const response = await fetch(
    `${baseUrl}/api/v1/attachments/download/${attachment._id}`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  if (response.ok) {
    await downloadFile(response, attachment.name, attachment.extension);
  } else {
    console.error("File download failed:", await response.text());
  }
};
const downloadFile = async (response, name, extension) => {
  const blob = await response.blob();
  const url = window.URL.createObjectURL(new Blob([blob]));
  const link = document.createElement("a");
  link.href = url;
  link.setAttribute("download", `download_${name}.${extension}`);
  document.body.appendChild(link);
  link.click();
  link.parentNode.removeChild(link);
};

export const donwloadLogo = async (logo) => {
  // download logo and put it in a folder to be created dont use handleDownload
  const baseUrl = process.env.REACT_APP_BACKEND_URL;
  const token = localStorage.getItem("token");
  if (!logo._id) return;
  console.log("Downloading file", logo._id);
  const response = await fetch(
    `${baseUrl}/api/v1/attachments/download/${logo._id}`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  if (response.ok) {
    const blob = await response.blob();
    const url = window.URL.createObjectURL(new Blob([blob]));
    return url;
  } else {
    console.error("File download failed:", await response.text());
  }
  // fetch(`${baseUrl}/api/v1/attachments/download/${logo._id}`, {
  //   method: "GET",
  //   headers: {
  //     Authorization: `Bearer ${token}`,
  //   },
  // })
  //   .then((response) => {
  //     if (response.ok) {
  //       return response.blob();
  //     } else {
  //       console.error("File download failed:", response.text());
  //     }
  //   })
  //   .then((blob) => {
  //     const url = window.URL.createObjectURL(new Blob([blob]));
  //     return url;
  //   });
};

