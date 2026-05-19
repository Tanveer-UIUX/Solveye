import s from './Gallery3D.module.scss'

const IMAGES = [

  '/Picture/Index/gallery-pic-2.jpg',
  '/Picture/Index/gallery-pic-3.jpg',
  '/Picture/Index/gallery-pic-4.jpg',
  '/Picture/Index/gallery-pic-5.jpg',
  '/Picture/Index/gallery-pic-1.jpg',
  '/Picture/Index/gallery-pic-2.jpg',
]

export default function Gallery3D() {
  return (
    <div className={s.wrapper}>
      {IMAGES.map((_, i) => (
        <input key={i} type="checkbox" id={`gm${i + 1}`} className={s.toggle} />
      ))}

      <div className={s.gallery}>
        {IMAGES.map((src, i) => (
          <label key={i} htmlFor={`gm${i + 1}`} className={s.item}>
            <div className={s.photo} style={{ backgroundImage: `url('${src}')` }} />
          </label>
        ))}
      </div>

      {IMAGES.map((src, i) => (
        <div key={i} className={`${s.modal} ${s[`m${i + 1}`]}`}>
          <label htmlFor={`gm${i + 1}`} className={s.backdrop} aria-label="Close" />
          <div className={s.lightbox}>
            <label htmlFor={`gm${i + 1}`} className={s.close} aria-label="Close">&#215;</label>
            <div className={s.lightboxImg} style={{ backgroundImage: `url('${src}')` }} />
          </div>
        </div>
      ))}
    </div>
  )
}
