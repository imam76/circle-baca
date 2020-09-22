import React from "react";
import { Quill } from "react-quill";
import "quill/dist/quill.core.css";
import "react-quill/dist/quill.snow.css";

// image svg
const Image = () => (
  <svg viewBox="0 0 18 18">
    <rect class="ql-stroke" height="10" width="12" x="3" y="4"></rect>
    <circle class="ql-fill" cx="6" cy="7" r="1"></circle>
    <polyline
      class="ql-even ql-fill"
      points="5 12 5 11 7 9 8 10 11 7 13 9 13 12 5 12"
    ></polyline>
  </svg>
);

// Link svg
const Link = () => (
  <svg viewBox="0 0 18 18">
    <line class="ql-stroke" x1="7" x2="11" y1="7" y2="11"></line>
    <path
      class="ql-even ql-stroke"
      d="M8.9,4.577a3.476,3.476,0,0,1,.36,4.679A3.476,3.476,0,0,1,4.577,8.9C3.185,7.5,2.035,6.4,4.217,4.217S7.5,3.185,8.9,4.577Z"
    ></path>
    <path
      class="ql-even ql-stroke"
      d="M13.423,9.1a3.476,3.476,0,0,0-4.679-.36,3.476,3.476,0,0,0,.36,4.679c1.392,1.392,2.5,2.542,4.679.36S14.815,10.5,13.423,9.1Z"
    ></path>
  </svg>
);

// video svg
const Video = () => (
  <svg viewBox="0 0 18 18">
    <rect class="ql-stroke" height="12" width="12" x="3" y="3"></rect>
    <rect class="ql-fill" height="12" width="1" x="5" y="3"></rect>
    <rect class="ql-fill" height="12" width="1" x="12" y="3"></rect>
    <rect class="ql-fill" height="2" width="8" x="5" y="8"></rect>
    <rect class="ql-fill" height="1" width="3" x="3" y="5"></rect>
    <rect class="ql-fill" height="1" width="3" x="3" y="7"></rect>
    <rect class="ql-fill" height="1" width="3" x="3" y="10"></rect>
    <rect class="ql-fill" height="1" width="3" x="3" y="12"></rect>
    <rect class="ql-fill" height="1" width="3" x="12" y="5"></rect>
    <rect class="ql-fill" height="1" width="3" x="12" y="7"></rect>
    <rect class="ql-fill" height="1" width="3" x="12" y="10"></rect>
    <rect class="ql-fill" height="1" width="3" x="12" y="12"></rect>
  </svg>
);

// Undo and redo functions for Custom Toolbar
function undoChange() {
  this.quill.history.undo();
}
function redoChange() {
  this.quill.history.redo();
}

// Add sizes to whitelist and register them
const Size = Quill.import("formats/size");
Size.whitelist = ["extra-small", "small", "medium", "large"];
Quill.register(Size, true);

// Add fonts to whitelist and register them
const Font = Quill.import("formats/font");
Font.whitelist = [
  "arial",
  "comic-sans",
  "courier-new",
  "georgia",
  "helvetica",
  "lucida",
];
Quill.register(Font, true);

// Modules object for setting up the Quill editor
export const modules = {
  toolbar: {
    container: "#toolbar",
    handlers: {
      undo: undoChange,
      redo: redoChange,
    },
  },
  history: {
    delay: 500,
    maxStack: 100,
    userOnly: true,
  },
};

// Formats objects for setting up the Quill editor
export const formats = [
  "header",
  "font",
  "size",
  "bold",
  "italic",
  "underline",
  "align",
  "strike",
  "script",
  "blockquote",
  "background",
  "list",
  "bullet",
  "indent",
  "link",
  "image",
  "color",
  "code-block",
];

// Quill Toolbar component
export const QuillToolbar = () => (
  <div id="custom-toolbar" className="ql-toolbar ql-snow">
    <span class="ql-formats">
      <button type="button" class="ql-link">
        <Link />
      </button>
      <button type="button" class="ql-image">
        <Image />
      </button>
      <button type="button" class="ql-video">
        <Video />
      </button>
    </span>
  </div>
);

export default QuillToolbar;
