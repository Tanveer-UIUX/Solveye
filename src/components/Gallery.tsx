import GalleryClient from './GalleryClient'

const IMAGES = [
  '/Picture/Index/gallery-pic-1.jpg',
  '/Picture/Index/gallery-pic-2.jpg',
  '/Picture/Index/gallery-pic-3.jpg',
  '/Picture/Index/gallery-pic-4.jpg',
  '/Picture/Index/gallery-pic-5.jpg',
  '/Picture/Index/gallery-pic-1.jpg',
  '/Picture/Index/gallery-pic-2.jpg',
  '/Picture/Index/gallery-pic-3.jpg',
]

export default function Gallery() {
  return <GalleryClient images={IMAGES} />
}
