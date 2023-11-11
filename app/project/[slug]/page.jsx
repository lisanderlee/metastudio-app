"use client";
import FilesViewer from "@/components/files-viewer";
import DataModel from "@/data.json"
function findById(arr, id) {
  return arr.find((item) => item.id === id);
}

export default function Home({ params }) {
  const project = findById(DataModel, params.slug);

  return (
    <div className="">
      <FilesViewer {...project} />
    </div>
  );
}
