import { resolveReference } from "@/lib"

export const Slide = ({ slide, active }: { slide: Sanity.CarouselItem; active: boolean }) => {
  return (
    <div className={active ? "slide active" : "slide"} style={{ backgroundImage: `url(${resolveReference(slide.image?.asset)?.url})` }}>
      {!!slide.video && (
        <video autoPlay muted playsInline loop>
          <source type="video/mp4" src={resolveReference(slide.video?.asset)?.url} />
        </video>
      )}
      {slide.caption && <div className="caption">{slide.caption}</div>}
    </div>
  )
}
