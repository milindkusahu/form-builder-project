import {
  ShortTextIcon,
  LongTextIcon,
  SingleSelectIcon,
  NumberIcon,
  UrlIcon,
} from "../components/icons/";

export const QUESTION_TYPES = [
  {
    id: "short",
    icon: ShortTextIcon,
    label: "Short Answer",
    placeholder: "Short answer text",
  },
  {
    id: "long",
    icon: LongTextIcon,
    label: "Long Answer",
    placeholder: "Long answer text",
  },
  {
    id: "single",
    icon: SingleSelectIcon,
    label: "Single Select",
    placeholder: "Option",
  },
  {
    id: "number",
    icon: NumberIcon,
    label: "Number",
    placeholder: "Number input",
  },
  {
    id: "url",
    icon: UrlIcon,
    label: "URL",
    placeholder: "URL input",
  },
];
