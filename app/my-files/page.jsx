import FilesViewer from "@/components/files-viewer";
export default function Home() {
  return (
    <div className="w-full h-full">
      <h1 className=" text-white text-2xl">My Files</h1>
      <FilesViewer />
    </div>
  );
}
