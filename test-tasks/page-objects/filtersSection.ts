import { Locator, Page } from "@playwright/test";
import { HelperBase } from "./HelperBase";

export class FiltersSection extends HelperBase {
  private readonly brand: Locator;
  private readonly price: Locator;
  private readonly processor: Locator;
  
  constructor(page: Page) {
    super(page);
    this.brand = page.locator('[data-filter-name="producer"] a');
    this.price = page.locator('[data-filter-name="price"]');
    this.processor = page.locator('[data-filter-name="processor"] a');
  }

  async selectBrand(...brands: string[]) {
    const myAtr = await this.brand.getAttribute("class");
    if(myAtr?.includes("sidebar-block_state_collapsed")) {
      await this.brand.getByRole('button').click();
    }

    for(let value of brands) {
      await this.brand.getByText(value).check();
    }
  }

  async setPriceRange(fromPrice: number, toPrice: number) {
    const myAtr = await this.price.getAttribute("class");
    if(myAtr?.includes("sidebar-block_state_collapsed")) {
      await this.price.getByRole('button').click();
    }
    const priceField = this.price.getByRole('textbox');
    await priceField.first().click();
    await priceField.first().clear();
    await priceField.first().fill(fromPrice.toString());

    await priceField.last().click();
    await priceField.last().clear();
    await priceField.last().fill(toPrice.toString());

    await this.price.getByRole('button').click();
  }

  async selectProcessor(...processors: string[]) {
    const myAtr = await this.processor.getAttribute("class");
    if(myAtr?.includes("sidebar-block_state_collapsed")) {
      await this.processor.getByRole('button').click();
    }

    for(let value of processors) {
      await this.processor.getByText(value).check();
    }
  }

}