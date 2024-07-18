import { book } from './book'
import { color } from './color'
import { icon } from './icon'
import { other } from './other'
import { tool } from './tool'

export const bookmarks: Record<string, any[]> = {
  ...color,
  ...book,
  ...icon,
  ...tool,
  ...other
}
