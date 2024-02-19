import { Locator, Page, expect } from "@playwright/test";
import { HelperBase } from "./HelperBase";

export class ItemsPage extends HelperBase {
  private readonly price: Locator;
  
  constructor(page: Page) {
    super(page);
    this.price = page.locator("app-goods-tile-default .goods-tile__price-value");
  }

  async verifyCorrectPriceFiltering(fromPrice: number, toPrice: number) {
    const pricesArray = await Promise.all(
      await this.page
        .$$("app-goods-tile-default .goods-tile__price-value")
        .then(async (elements) => {
          return await Promise.all(
            elements.map(async (element) => {
              const priceText = await element.textContent();
              const price = parseFloat(priceText?.trim() || '0');
              return price;
            })
          );
        })
    );

    expect(pricesArray.every((price) => price >= fromPrice && price <= toPrice)).toBeTruthy();
  }


}