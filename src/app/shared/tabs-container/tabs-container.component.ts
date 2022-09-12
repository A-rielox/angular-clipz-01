import { TagContentType } from '@angular/compiler';
import {
   Component,
   AfterContentInit,
   ContentChildren,
   QueryList,
} from '@angular/core';
import { TabComponent } from '../tab/tab.component';

@Component({
   selector: 'app-tabs-container',
   templateUrl: './tabs-container.component.html',
   styleUrls: ['./tabs-container.component.css'],
})
export class TabsContainerComponent implements AfterContentInit {
   // me da acceso a lo children elements q sean TabComponent (componentes TabComponent) y asi puedo acceder a sus props como tabTitle
   // <app-tab tabTitle="Login">
   @ContentChildren(TabComponent) tabs: QueryList<TabComponent> =
      new QueryList();

   constructor() {}

   // ngAfterContentInit() corre despues dq se inicializa el projected content
   ngAfterContentInit(): void {
      // console.log(this.tabs);
      const activeTabs = this.tabs?.filter((tab) => tab.active);

      if (!activeTabs || activeTabs.length === 0) {
         // para cuando no hay ni una activa
         // .first me entrega la primera de las "tabs QueryList"
         this.selectTab(this.tabs!.first);
      }
   }

   selectTab(tab: TabComponent) {
      this.tabs?.forEach((tab) => (tab.active = false));
      tab.active = true;

      // en lugar de e.preventDefault() donde tendria q pasar el event
      return false;
   }
}

// @ContentChildren(TabComponent) tabs;
// TabComponent es children ( q se quiere seleccionar ) xq se renderiza

// <app-tabs-container>
//       <app-tab>
//          <form>
//
//          </form>
//       </app-tab>
//
//       <app-tab>
//          <form>
//
//          </form>
//       </app-tab>
// </app-tabs-container>
