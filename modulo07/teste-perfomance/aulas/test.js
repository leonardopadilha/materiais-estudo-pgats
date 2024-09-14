import { browser } from 'k6/browser';
import { sleep, check } from 'k6';
import { numeroAleatorioMenorQue } from './utils/numeros.js';

export const options = {
  scenarios: {
    ui: {
      executor: 'shared-iterations',
      vus: 1,
      iterations: 2,
      maxDuration: '10s',
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
  const page = await browser.newPage();

  try {
    await page.goto('http://165.227.93.41/lojinha-web', { waitUntil: 'networkidle' });


    // Enter login credentials
    await page.locator('#usuario').type('admin');
    await page.locator('#senha').type('admin');

    await page.screenshot({ path: 'screenshots/screenshot.png' });
    
    const submitButton = page.locator('#entrar').click()
    await Promise.all([page.waitForNavigation(), submitButton.click()])

    const header = await page.locator('.container h3').textContent()
    console.log("TEXTO:::::::::" + header)

    check(header, {
        header: (h) => h == 'Lista de Produtos',
        
    });
    sleep(numeroAleatorioMenorQue(5.1))

  } finally {
    await page.close();
  }
}