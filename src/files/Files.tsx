import Window from "../components/Window"
import File from "./File"
import { files } from "../lib/consts"

const FilesComponent = () => {
  files.bind()

  return <File file={files.value} name="files" deep={0} old />
}

export default function Files() {
  return (
    <Window name="Files" className="w-(--width2) h-(--height2)">
      <div className="overflow-y-scroll">
        <FilesComponent />
      </div>
    </Window>
  )
}
