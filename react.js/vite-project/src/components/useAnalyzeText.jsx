import { useCallback } from "react";

export default function AnalyzeText() {
  const analyzeText = useCallback((text) => {
    const charCount = text.length;
    const wordCount = text.trim() === "" ? 0 : text.trim().split(/\s+/).length;
    const specialCount = (text.match(/[^a-zA-Z0-9 ]/g) || []).length;
    const limit = 200;

    return {
      charCount,
      wordCount,
      specialCount,
      remaining: limit - charCount,
      isLimitReached: charCount > limit,
      is80Reached: charCount >= limit * 0.8,
    };
  }, []);

  return {AnalyzeText};
}
