import { renderToString } from 'react-dom/server'
import puppeteer from 'puppeteer';
import { Layout } from './reports/Layout';
import { Report } from './reports/Report';

(async () => {
  const browser = await puppeteer.launch({
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  const page = await browser.newPage();
  // PDF出力対象ページ
  const html = renderToString(<Layout>
    <Report title={`調査結果`}></Report>
  </Layout>);
  await page.setContent(html)
  // PDF作成処理
  await page.pdf({
    path: "report.pdf",
    format: "a4",
  });
  browser.close();
  console.log("done.");
})();
