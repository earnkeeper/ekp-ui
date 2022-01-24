import { UiElement } from '../ui.element';
import { Col } from '../components/col.component';
import { Row } from '../components/row.component';

export class Layout {
  static autocol(children: UiElement[]): UiElement {
    return Row({
      children: children.map((child) =>
        Col({
          className: 'col-auto my-auto',
          children: [child],
        }),
      ),
    });
  }
}
