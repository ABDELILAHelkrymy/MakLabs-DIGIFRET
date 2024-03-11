export const handleDownload = async (attachment) => {
  const baseUrl = process.env.REACT_APP_API_URL;
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

