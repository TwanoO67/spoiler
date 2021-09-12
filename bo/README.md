# CRUD for Angular Material Table

Project showcasing my CRUD (Create, Read, Update, Delete) implementation on Angular's Mat-Table. Most importantly frontend updates accordingly
with operations. This is important if you're using data from backend (some DB like MySQL) but I guess It can be used for local generated data
as well.

**Project is updated and now runs on Angular version 8 including Angular Material 8.**
* For Angular 6 clone [angular_6 branch](https://github.com/marinantonio/angular-mat-table-crud/tree/angular_6).
* For Angular 4 clone [angular_4 branch](https://github.com/marinantonio/angular-mat-table-crud/tree/angular_4).

## Screenshots

Code in action:

![Alt Text](https://i.imgur.com/QcXMtzK.gif)


## REST API
Here's a sample from my real-life application (sorry for Croatian):

![Alt Text](https://i.stack.imgur.com/atzqB.gif)

Angular app using PHP RESTful API does backend updates to MySQL DB.
You can find entire HttpClient REST code from this project inside dataService.

## Demo

You can play around with code demo [here](https://marinantonio.github.io/angular-mat-table-crud/).

## Refresh function

Material Table updates if you do a pagination or filter update. You can trigger that with simple method
as follows:

```
private refreshTable() {
  this.paginator._changePageSize(this.paginator.pageSize);
}
```
Credits to [yeager-j](https://github.com/marinantonio/angular-mat-table-crud/issues/12) for providing the refresh function

Old method:
```
private refreshTable() {
    // if there's a paginator active we're using it for refresh
    if (this.dataSource._paginator.hasNextPage()) {
      this.dataSource._paginator.nextPage();
      this.dataSource._paginator.previousPage();
      // in case we're on last page this if will tick
    } else if (this.dataSource._paginator.hasPreviousPage()) {
      this.dataSource._paginator.previousPage();
      this.dataSource._paginator.nextPage();
      // in all other cases including active filter we do it like this
    } else {
      this.dataSource.filter = '';
      this.dataSource.filter = this.filter.nativeElement.value;
    }
  }
```

In case you have smaller dataset without need for a paginator you can update just using filter:

```
private refreshTable() {
    // if there's nothing in filter
    if (this.dataSource._filterChange.getValue() === '') {
        this.dataSource.filter = ' ';
        this.dataSource.filter = '';
    } else {
        // if there's something, we make a simple change and then put back old value
        this.dataSource.filter = '';
        this.dataSource.filter = this.filter.nativeElement.value;
    }
  }
```
