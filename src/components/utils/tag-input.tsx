import React, { ChangeEvent, useState } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import CloseIcon from "@mui/icons-material/Close";

export default function TagInput({
  tags,
  setTags,
}: {
  tags: string[];
  setTags: any;
}) {
  const [currentTag, setCurrentTag] = useState<string>("");

  const removeTag = (tagName: string) => {
    if (!tags.includes(tagName)) return;

    setTags(
      "tags",
      tags.filter((tag) => tag !== tagName, tags),
    );
  };

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = String(event.target.value);
    setCurrentTag(value);
    if (!value.endsWith(",")) {
      return;
    }
    addTag();
  };

  const addTag = () => {
    const refinedValue = currentTag.replaceAll(",", "");
    if (
      !refinedValue ||
      !refinedValue.length ||
      refinedValue.length <= 2 ||
      tags.includes(refinedValue) ||
      tags.length === 10
    )
      return;

    setTags("tags", [...tags, refinedValue]);
    setCurrentTag("");
  };
  return (
    <div className="flex flex-col gap-2">
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => {
          return (
            <Button
              key={tag}
              size="sm"
              type="button"
              className="flex items-center justify-between gap-2 text-xs px-2 py-3"
              variant="outline"
              onClick={() => removeTag(tag)}
            >
              <span>{tag}</span>
              <CloseIcon fontSize="small" />
            </Button>
          );
        })}
      </div>
      <Input
        disabled={tags.length === 10}
        onKeyDown={(event) => {
          event.preventDefault();
          event.key === "Enter" && addTag();
        }}
        onChange={onChange}
        id="tags"
        type="text"
        value={currentTag}
        placeholder="Add tags related to your channel."
      />
    </div>
  );
}
