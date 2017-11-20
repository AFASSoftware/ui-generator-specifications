//@flow
import type { Specification } from './../type-definition'
const specification: Specification = {
  NotificationPanel: {
    // _active: true,
    content: [
      {
        itemText: 'De door jouw geplaatste verkooporder (TCA32772) is geleverd.',
        itemTime: '1 uur geleden', // defaults to '1 uur geleden'
        itemRead: 'unRead', // [read, unRead] defaults to read
        itemHover: 'default' // [default, hover] defaults to default
      }
    ]
  }
}
