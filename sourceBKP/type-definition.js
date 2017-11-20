// @flow
export type Specification = {|
  layoutSizes?: Array<number|Array<number>>,
  layoutDirection?: 'vertical' | 'horizontal',
  pages?: Array<Page>,
  // Standalone Components (size and pages become obsolete)
  Popover?: Popover,
  NotificationPanel?: NotificationPanel
|}

export type Page = {|
  model?: any,
  title?: string, // default: inherited from model
  content: DetailPage | CollectionPage,
  pages?: Array<Page>
|}

export type DetailPage = {

}

export type CollectionPage = {

}

export type Popover = {|
  color?: 'background' | 'foreground' | 'primary' | 'tertiary' | 'negative',
  size?: 'normal' | 'small',
  position?: 'top' | 'right' | 'bottom' | 'left',
  content?: {|
    Menu?: Menu,
    NotificationPanel?: NotificationPanel
  |},
|}

export type NotificationPanel = {|
  content?: Array<NotificationItem|string>
|}

export type NotificationItem = {|
  itemText?: string, // default: random `notificatie` sampleData
  itemTime?: string, // default: random date
  itemRead?: 'read' | 'unRead', // default: 'read'
  itemHover?: 'default' | 'hover' // default: 'default'
|}

export type Menu = {|
  content: Array<MenuItem|string>
|}

export type MenuItem = {|
  title: string,
  state?: 'default' | 'active', // default: 'default'
  indentLevel?: 0 | 1 | 2 | 3, // default: 0
  suffixType?: 'none' | 'icon' | 'text', // default: 'none'
  prefixType?: 'none' | 'icon', // default: 'none'
  titleType?: 'default' | 'subTitle', // default: 'default'
  borderType?: 'default' | 'lastInGroup' | 'firstInGroup', // default: 'default'
|}
