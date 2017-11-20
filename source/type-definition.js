// @flow
export type Specification = {|
  layoutSizes?: Array<number | Array<number>>,
  layoutDirection?: 'vertical' | 'horizontal',
  pages?: Array<Page>,
  // Standalone Components (size and pages become obsolete)
  Page?: Page,
  Popover?: Popover,
  NotificationPanel?: NotificationPanel,
  Collection?: Collection
|}

export type Page = {|
  model?: any,
  title?: string, // default: inherited from model
  Detail?: DetailPage,
  CollectionPage?: CollectionPage,
  // content: DetailPage | CollectionPage,
  pages?: Array<Page>
|}

export type DetailPage = {

}

export type CollectionPage = {

}
export type Collection = {|
  model?: any,
  actions?: ActionGroup,
  switcher?: Switcher,
  Table?: Table
|}
// [icon, type, text]
export type Button = {|
  _type: 'default' | 'blank' | 'primary' | 'negative' | 'positive',
  _state: 'default' | 'hover' | 'diabled' | 'focus',
  _iconSize: 'small' | 'large',
  _Icon: Icon
|}

export type Icon = {|
  _iconType: '',
  _Color: Color
|}

export type Color = {|
  _colorBase?: any,
  _colorShade?: any
|}

export type ActionGroup = Array<string | ActionGroupItem>
export type ActionGroupItem = {|
  type?: any,
  switcher?: Switcher,
  Table?: Table
|}

export type Switcher = Array<any>

export type Table = {

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
  content?: Array<NotificationItem | string>
|}

export type NotificationItem = {|
  itemText?: string, // default: random `notificatie` sampleData
  itemTime?: string, // default: random date
  itemRead?: 'read' | 'unRead', // default: 'read'
  itemHover?: 'default' | 'hover' // default: 'default'
|}

export type Menu = {|
  content: Array<MenuItem | string>
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
