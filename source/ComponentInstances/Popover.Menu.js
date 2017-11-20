//@flow
import type { Specification } from './../type-definition'
const specification: Specification = {
  Popover: {
    color: 'background',
    size: 'normal',// [normal], small
    position: 'bottom', // top, right, [bottom], left
    content: {
      Menu: {
        // content: [
        //   'Hello',
        //   'world'
        // ]
        items: [
          {
            title: 'Hello'
          },
          {
            title: 'World'
          }
        ]
      }
    }
  }
}
