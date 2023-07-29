import React, { useEffect, useState } from "react";

function MiniContent() {
  const [content, setContent] = useState("");

  useEffect(() => {
    // Fetch content from the API
    fetch("/api/sample-content")
      .then((response) => response.json())
      .then((data) => {
        // Update the content state with the fetched data
        setContent(data.content);
      })
      .catch((error) => {
        console.error("Error fetching content:", error);
      });
  }, []);

  // Function to truncate the content to the first 50 words
  const truncateContent = (text: string, length: number) => {
    const words = text.split(" ");
    const truncatedText = words.slice(0, length).join(" ");
    return truncatedText + (words.length > length ? "..." : "");
  };

  return (
    <div>
      <div className="h-50">
        <p className="h-50">{truncateContent(content, 60)}</p>
      </div>
    </div>
  );
}

export default MiniContent;
