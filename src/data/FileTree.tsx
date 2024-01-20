import { IFile } from "../interfaces";
import { v4 as uuidv4 } from "uuid";

export const FileTree: IFile = {
  id: uuidv4(),
  name: "VS code",
  isFolder: true,
  children: [
    {
      id: uuidv4(),
      name: "node_modules",
      isFolder: true,
    },
    {
      id: uuidv4(),
      name: "public",
      isFolder: true,
      children: [
        {
          id: uuidv4(),
          name: "vite.svg",
          isFolder: false,
          content: "some svg image",
        },
      ],
    },
    {
      id: uuidv4(),
      name: "src",
      isFolder: true,
      children: [
        {
          id: uuidv4(),
          name: "assets",
          isFolder: true,
          children: [{ id: uuidv4(), name: "react.svg", isFolder: false }],
        },
        {
          id: uuidv4(),
          name: "components",
          isFolder: true,
          children: [
            {
              id: uuidv4(),
              name: "SVG",
              isFolder: true,
              children: [
                { id: uuidv4(), name: "Bottom.tsx", isFolder: false },
                { id: uuidv4(), name: "File.tsx", isFolder: false },
              ],
            },
            {
              id: uuidv4(),
              name: "RecursiveComponent.tsx",
              isFolder: false,
            },
            {
              id: uuidv4(),
              name: "RenderFileIcon.tsx",
              isFolder: false,
            },
          ],
        },
        {
          id: uuidv4(),
          name: "data",
          isFolder: true,
          children: [
            {
              id: uuidv4(),
              name: "FileTree.tsx",
              isFolder: false,
            },
          ],
        },
        {
          id: uuidv4(),
          name: "interfaces",
          isFolder: true,
          children: [
            {
              id: uuidv4(),
              name: "index.ts",
              isFolder: false,
            },
          ],
        },
        {
          id: uuidv4(),
          name: "App.tsx",
          isFolder: false,
        },
        {
          id: uuidv4(),
          name: "index.css",
          isFolder: false,
        },
      ],
    },
    {
      id: uuidv4(),
      name: "index.html",
      isFolder: false,
    },
  ],
};
