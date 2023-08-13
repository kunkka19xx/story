import { Content } from "@/model/PostModel";

export const setContentByLen = (content: Content[], len: number) => {
  if (!content || content.length === 0) return "";
  var finalContent = "";
  for (let i = 0; i < content.length; i++) {
    if (finalContent.length > len) return truncateContent(finalContent, len);
    finalContent = finalContent.concat(content[i].content);
  }
  return truncateContent(finalContent, len);
};

export const truncateContent = (text: string, length: number) => {
  const words = text.split(" ");
  const truncatedText = words.slice(0, length).join(" ");
  return truncatedText + "...";
};
