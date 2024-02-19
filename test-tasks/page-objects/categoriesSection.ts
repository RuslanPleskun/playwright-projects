import { Page } from "@playwright/test";
import { HelperBase } from "./HelperBase";

export class CategoriesSection extends HelperBase {
  constructor(page: Page) {
    super(page);
  }

  async selectCategory(categoryName: string) {
    const category = this.page.locator("rz-sidebar-fat-menu").getByText(categoryName).click();
  }
}