import React, { ChangeEvent, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";

export default function TagInput({
  tags,
  setTags,
}: {
  tags: string[];
  setTags: any;
}) {
  const [currentTag, setCurrentTag] = useState<string>("");
  const remaningTags: string = tags.length > 0 ? `(${tags.length}/10)` : "";
  const removeTag = (tagName: string) => {
    if (!tags.includes(tagName)) return;

    setTags(
      "tags",
      tags.filter((tag) => tag !== tagName, tags),
    );
  };

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = String(event.target.value).trim();
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
    <div className="flex flex-wrap items-center bg-card border rounded-md p-2 w-full gap-1 relative">
      {tags &&
        tags.map((tag) => (
          <Tag key={tag} name={tag} onClick={() => removeTag(tag)} />
        ))}
      {tags.length !== 10 && (
        <input
          className="bg-transparent p-1 border-none rounded-none focus-visible:outline-none focus-visible:ring-0 w-fit h-full"
          onKeyDown={(event) => {
            event.preventDefault();
            event.key === "Enter" && addTag();
          }}
          onChange={onChange}
          id="tags"
          type="text"
          value={currentTag}
        />
      )}
      <span className="absolute right-2 bottom-1 text-xs text-muted-foreground">
        {remaningTags}
      </span>
    </div>
  );
}

const Tag = ({ name, onClick }: { name: string; onClick: () => void }) => {
  return (
    <button
      className="bg-secondary py-1 px-2 flex items-center gap-1 rounded-md shadow"
      onClick={() => onClick()}
    >
      <span className="text-xs font-semibold">{name}</span>
      <CloseIcon fontSize="small" />
    </button>
  );
};
