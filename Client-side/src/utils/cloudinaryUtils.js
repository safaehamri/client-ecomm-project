export const generateCloudinaryUrl = (url, transformations = "") => {
  if (!url.includes("cloudinary.com")) {
    console.warn("Not a Cloudinary URL, returning original:", url);
    return url; // If not a Cloudinary URL, return it as is
  }

  const [base, path] = url.split("/upload/");
  if (!path) {
    console.error("Invalid Cloudinary URL:", url);
    return url;
  }

  const transformedUrl = `${base}/upload/${transformations}/${path}`;
  return transformedUrl;
};
