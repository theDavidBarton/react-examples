# Why `for` loops perform better than `Array.map()` and `Array.forEach()` when we are dealing with puppeteer methods inside iterations?

For this type of puppeteer question we usually have...

## Array.map ❌


```javascript
  const elHandleArray = await page.$$('button')
  // array.map
  elHandleArray.map(async el => {
    await el.click()
  })

  await page.screenshot({ path: 'clicks_map_02.png' })
  await browser.close()
```

### Result:

It looks like it works, but if we check when the screenshot happens: we can see

---

## Array.forEach ❌

### 1.

```javascript
  const elHandleArray = await page.$$('button')
  // array.forEach 1
  elHandleArray.forEach(async el => {
    await page.evaluate(() => el.click())
  })

  await page.screenshot({ path: 'clicks_foreach_01.png' })
  await browser.close()
```

### Result:

---

### 2.

```javascript
  const elHandleArray = await page.$$('button')
  // array.forEach 2
  elHandleArray.forEach(async el => {
    await element.click()
  })

  await page.screenshot({ path: 'clicks_foreach_02.png' })
  await browser.close()
```

### Result:

---
## page.$$eval + forEach ✅

```javascript
  // array.forEach 2
  await page.$$eval('button', links => links.map(link => link.click()))

  await page.screenshot({ path: 'clicks_eval_foreach.png' })
  await browser.close()
```

### Result:

---
## for...of
```javascript
  const elHandleArray = await page.$$('button')
  // for...of
  for (const el of elHandleArray) {
    await el.click()
  }

  await page.screenshot({ path: 'clicks_eval_foreach.png' })
  await browser.close()
```

### Result:
