export function Data() {
  return (
    <div className="flex flex-col w-full h-auto justify-center gap-8 bg-white dark:bg-zinc-800">
      <div className="h-auto w-full gap-4 md:gap-8 bg-white dark:bg-zinc-800">
        <div className="flex flex-col pl-16 py-4 md:py-8 gap-4 h-full">
          <p className="font-extrabold text-xl md:text-4xl dark:text-white">
            Map
          </p>
          <iframe
            className="w-full rounded pr-16 aspect-[3/4] md:aspect-[2/1]"
            title="TestMap2"
            src="//lelt7ufvoowrrx8q.maps.arcgis.com/apps/Embed/index.html?webmap=6918d94e2a574d05a3806af89fa69c3b&extent=32.7162,29.4834,40.8296,33.6793&home=true&zoom=true&previewImage=true&scale=true&search=false&searchextent=true&details=true&legendlayers=true&active_panel=details&basemap_gallery=true&disable_scroll=true&theme=light"
          />
        </div>
      </div>
      <div className="h-auto w-full gap-4 md:gap-8">
        <div className="flex flex-col pl-16 py-4 md:py-8 md:gap-4">
          <p className="font-extrabold text-xl md:text-4xl dark:text-white">
            Download Data
          </p>
        </div>
      </div>
    </div>
  )
}
