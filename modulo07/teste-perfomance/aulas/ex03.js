import { browser } from 'k6/browser';
import { check } from 'k6';

export const options = {
  scenarios: {
    ui: {
      executor: 'shared-iterations',
      options: {
        browser: {
          type: 'chromium',
        },
      },
    },
  },
  thresholds: {
    checks: ['rate==1.0'],
  },
};

export default async function () {
  const BASE_URL = "http://165.227.93.41/lojinha-web/v2"
  const context = await browser.newContext();
  const page = await context.newPage({ headless: true });

  try {
    await page.goto(BASE_URL);

    await page.locator('#usuario').type('admin');
    await page.locator('#senha').type('admin');

    //await Promise.all([page.waitForNavigation(), page.locator('#button-entrar').click()]);

    await page.waitForNavigation(), page.locator('#button-entrar').click();

    //await page.screenshot({ path: './../screenshots/image.png' });

    const header = await page.locator('h3').textContent();
    console.log("Header::::::::::::" + header)
    check(header, {
      header: (h) => h == 'Lista de Produtos',
    });
  } finally {
    await page.close();
  }
}