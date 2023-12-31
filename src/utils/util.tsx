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

export function convertDriveLinkToDirectLink(driveLink: string) {
  const baseLink = "https://drive.google.com/uc?export=view&id=";
  if (typeof driveLink === "string" && driveLink.trim() !== "") {
    const matches = driveLink.match(/\/d\/(.+?)\//);

    if (matches && matches.length > 1) {
      return baseLink + matches[1];
    } else {
      throw new Error("Invalid Google Drive URL");
    }
  } else {
    return "";
  }
}

export function getTruncatedContent(
  content: string,
  maxChars: number,
  maxLines: number
) {
  const splitContent = content.split("\n");
  let truncatedContent = splitContent.slice(0, maxLines).join("\n");

  if (truncatedContent.length > maxChars) {
    truncatedContent = truncatedContent.slice(0, maxChars);
  }

  return truncatedContent;
}

export const MAX_CHARACTERS = 235;
export const MAX_LINES = 4;