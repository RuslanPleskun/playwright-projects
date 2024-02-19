import { Page } from "@playwright/test";
import { HelperBase } from "./HelperBase";

export class SubcategoryPage extends HelperBase {
  constructor(page: Page) {
    super(page);
  }

  async selectSubcategory(subcategoryName: string) {
    await this.page.locator("rz-dynamic-widgets rz-widget-list a").getByText(subcategoryName).click();
  }
}