import { Component, Input, OnInit } from '@angular/core';
import { NavigationMenuModel, NavigationMenuType } from '../navigation-menu/navigation-menu.model';
import { Router } from '@angular/router';

@Component({
    selector: 'list-menu',
    templateUrl: './list-menu.component.html',
    styleUrls: ['./list-menu.component.css']
})
export class ListMenuComponent implements OnInit {

    @Input() menuList: NavigationMenuModel[] = [];
    navigationMenuType = NavigationMenuType;
    @Input() isExpanded: boolean = false;

    constructor(private router: Router) { }

    ngOnInit() {
        this.setTextTypes();
    }

    setTextTypes() {
        this.menuList.map((m) => m.type = m.type ? m.type : this.navigationMenuType.Normal);
    }

    navigateToUrl(url: string[]) {
        this.router.navigate(url);
    }
}
