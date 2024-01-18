import { IFile } from "../interfaces";

export const FileTree: IFile = {
  name: "VS code",
  isFolder: true,
  children: [
    {
      name: "node_modules",
      isFolder: true,
    },
    {
      name: "public",
      isFolder: true,
      children: [
        {
          name: "vite.svg",
          isFolder: false,
        },
      ],
    },
    {
      name: "src",
      isFolder: true,
      children: [
        {
          name: "assets",
          isFolder: true,
          children: [{ name: "react.svg", isFolder: false }],
        },
        {
          name: "components",
          isFolder: true,
          children: [
            {
              name: "SVG",
              isFolder: true,
              children: [
                { name: "Bottom.tsx", isFolder: false },
                { name: "File.tsx", isFolder: false },
              ],
            },
            {
              name: "RecursiveComponent.tsx",
              isFolder: false,
            },
            {
              name: "RenderFileIcon.tsx",
              isFolder: false,
            },
          ],
        },
        {
          name: "data",
          isFolder: true,
          children: [
            {
              name: "FileTree.tsx",
              isFolder: false,
            },
          ],
        },
        {
          name: "interfaces",
          isFolder: true,
          children: [
            {
              name: "index.ts",
              isFolder: false,
            },
          ],
        },
        {
          name: "App.tsx",
          isFolder: false,
        },
        {
          name: "index.css",
          isFolder: false,
        },
      ],
    },
    {
      name: "index.html",
      isFolder: false,
    },
  ],
};
