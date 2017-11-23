import {Component, OnInit} from '@angular/core';
import {DraggableDirective} from '../../exports';
import {Source} from './draggable-demo.model';

@Component({
  selector: 're-draggable-demo',
  templateUrl: './draggable-demo.component.html'
})
export class DraggableDemoComponent implements OnInit {
  source: Source[];
  target = [];

  ngOnInit(): void {
    this.source = [
      {
        name: 'xx',
        id: 1,
      }, {
        name: 'aa',
        id: 2,
      }, {
        name: 'cc',
        id: 3,
      }, {
        name: 'gg',
        id: 121,
      }, {
        name: 'hh',
        id: 213,
      }, {
        name: 'jj',
        id: 313,
      },
    ]
  }

  onDrop2Right($event) {
    const targetValue = $event.toElement.innerText;
    const newIndex = this.findIndex(targetValue);
    const data = $event.dataTransfer.getData(DraggableDirective.DRAGGABLE_DATA_KEY);
    const fromValue = JSON.parse(data).data.name;
    const oldIndex = this.findIndex(fromValue);
    this.arrayMove(oldIndex, newIndex);
  }

  findIndex(targetName: string) {
    return this.source.map(s => s.name).indexOf(targetName);
  }

  arrayMove(oldIndex, newIndex) {
    const element = this.source[oldIndex];
    this.source.splice(oldIndex, 1);
    this.source.splice(newIndex, 0, element);
  }
}
