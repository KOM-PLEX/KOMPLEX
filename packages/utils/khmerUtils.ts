export const getContentTypeKhmer = (contentType: string) => {
  switch (contentType) {
    case "blog":
      return "ប្លុក";
    case "forum":
      return "សំណួរ";
    case "video":
      return "វីដេអូ";
    case "exercise":
      return "លំហាត់";
    default:
      return "គ្មាន";
  }
};
