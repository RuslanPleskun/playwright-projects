import {Locator, Page} from '@playwright/test';

export class NavigationPage {
   private readonly page: Page;
   private readonly formLayoutsMenuItem: Locator;
   private readonly toastrMenuItem: Locator;
   private readonly tooltipMenuItem: Locator;
   private readonly smartTableMenuItem: Locator;
   private readonly datepickerMenu: Locator;

   constructor(page: Page) {
    this.page = page;
    this.formLayoutsMenuItem = page.getByText('Form Layouts');
    this.toastrMenuItem = page.getByText('Toastr');
    this.tooltipMenuItem = page.getByText('Tooltip');
    this.smartTableMenuItem = page.getByText('Smart Table');
    this.datepickerMenu = page.getByText('Datepicker');
   }

   async formLayoutsPage() {
    await this.selectGroupMenuItem('Forms');
    await this.formLayoutsMenuItem.click();
   }

   async toastrPage() {
    await this.selectGroupMenuItem('Modal & Overlays');
    await this.toastrMenuItem.click();
   }

   async tooltipPage() {
    await this.selectGroupMenuItem('Modal & Overlays');
    await this.tooltipMenuItem.click();
   }

   async smartTablePage() {
    await this.selectGroupMenuItem('Tables & Data');
    await this.smartTableMenuItem.click();
   }

   async datepickerPage() {
    await this.selectGroupMenuItem('Forms');
    await this.datepickerMenu.click();
   }

   private async selectGroupMenuItem(groupItemTitle: string) {
    const groupMenuItem = this.page.getByTitle(groupItemTitle);
    const expandedState = await groupMenuItem.getAttribute('aria-expanded');
    if(expandedState == "false") {
      await groupMenuItem.click();
    }
   }
}