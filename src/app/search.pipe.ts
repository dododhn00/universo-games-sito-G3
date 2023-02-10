import { Pipe, PipeTransform } from '@angular/core';
import { Observable } from 'rxjs';
import { SingleNews } from './model/singleNews';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(items: SingleNews[], searchText: string): any[] {
    if (!items) {
      return [];
    }
    if (!searchText) {
      return items;
    }
    searchText = searchText.toLocaleLowerCase();

    return items.filter(it => {
      return it.title.toLocaleLowerCase().includes(searchText) 
      || it.tags.some(tag => tag.toLocaleLowerCase() == searchText)
      || it.category.toLocaleLowerCase().includes(searchText)
      || it.content.toLocaleLowerCase().includes(searchText)
    });
  }

}
