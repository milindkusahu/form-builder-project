import React from "react";
import { PreviewIcon, SaveDraftIcon, AddIcon } from "../icons/index";

const Button = ({
  children,
  variant = "default",
  onClick,
  className = "",
  type = "button",
}) => {
  const baseStyles =
    "inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-colors text-sm sm:text-base w-full sm:w-auto";

  const variants = {
    default: "px-3 sm:px-4 py-2 text-gray-700 bg-white hover:bg-gray-50",
    primary: "px-3 sm:px-4 py-2 bg-blue-600 text-white hover:bg-blue-700",
    success: "px-3 sm:px-4 py-2 bg-emerald-600 text-white hover:bg-emerald-700",
    outline:
      "px-3 sm:px-4 py-2 border border-gray-300 bg-white text-gray-700 font-semibold hover:bg-gray-50",
    ghost: "text-gray-700 hover:bg-gray-100",
  };

  const presets = {
    "add-question": {
      variant: "outline",
      children: (
        <>
          <AddIcon size={15} />
          <span>Add Question</span>
        </>
      ),
      className: "py-2 px-3 sm:px-4",
    },
    preview: {
      variant: "outline",
      children: (
        <>
          <span>Preview</span>
          <PreviewIcon size={10} className="sm:w-3 sm:h-3" />
        </>
      ),
      className: "py-2 px-3 sm:px-4",
    },
    "save-draft": {
      variant: "outline",
      children: (
        <>
          <SaveDraftIcon size={18} className="sm:w-5 sm:h-5" />
          <span>Save as Draft</span>
        </>
      ),
      className: "py-2 px-3 sm:px-4",
    },
    publish: {
      variant: "success",
      children: "Publish form",
      className: "py-2 px-3 sm:px-4",
    },
  };

  const preset = presets[variant] || {};
  const variantStyle = variants[preset.variant || variant];
  const content = preset.children || children;
  const additionalClasses = `${preset.className || ""} ${className}`;

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseStyles} ${variantStyle} ${additionalClasses}`}
    >
      {content}
    </button>
  );
};

export default Button;
